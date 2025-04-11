'use client'

import { useState, useEffect } from 'react'
import { useUser } from '@/app/components/context/userContext'
import Image from 'next/image'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Pencil, Eye, EyeOff, Upload, Trash2 } from 'lucide-react'
import { useRouter } from 'next/navigation'

export default function ProfilePage() {
    const router = useRouter()
    const { user, setUser, setSyncUser } = useUser()
    const [userId, setUserId] = useState<string>('')
    const [showPassword, setShowPassword] = useState(false)
    const [profilePic, setProfilePic] = useState<string | '' | null>(null)
    const [password, setPassword] = useState<string>('')
    const [phone, setPhone] = useState<string>('')
    const [username, setUsername] = useState<string>('')
    const [usernameStatus, setUsernameStatus] = useState<string>('')
    const [isSaving, setIsSaving] = useState(false)

    // Load initial user data
    useEffect(() => {
        if (user) {
            setUserId(user._id)
            setUsername(user.username) // Pre-fill username from context
            setPassword('')  // You can prefill the password if you want
            setPhone(user.phone || '')
            // Ensure that the default image is used if profilePic is not set
            setProfilePic(user.profilePic ? user.profilePic : null)
        }
    }, [user])


    // Debounced function to check username availability
    const checkUsernameAvailability = async (username: string) => {
        if (username === user?.username) {
            setUsernameStatus('') // No message if it's their current username
            return
        }

        setUsernameStatus('Checking...')

        try {
            const response = await fetch(`/api/user/check-username?username=${username}`)
            const result = await response.json()

            if (response.ok) {
                setUsernameStatus('Username available')
            } else {
                setUsernameStatus(result.message) // 'Username already taken'
            }
        } catch (error) {
            console.error(error)
            setUsernameStatus('Error checking username')
        }
    }

    // Debounced input handler to delay the check
    const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value)
        clearTimeout(window.usernameTimeout)

        window.usernameTimeout = setTimeout(() => {
            checkUsernameAvailability(e.target.value)
        }, 1000) as any // 1 second debounce
    }

    // Handle Save functionality
    const handleSave = async () => {
        if (!user) return

        setIsSaving(true)

        const data = {
            userId,
            password,
            phone,
            profilePic,
            username,
        };

        console.log("data: ", data)

        try {
            const response = await fetch('/api/user/profile', {
                method: 'PATCH',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const result = await response.json();

            if (result.ok) {
                console.log("result.user: ", result.user)
                setSyncUser(result.user) // Sync the updated user with the context
                alert('Profile updated successfully')
                // window.location.reload(); // Reload page to reflect changes
            } else {
                alert(result.message || 'Error updating profile')
            }
        } catch (error) {
            console.error(error)
            alert('Failed to update profile')
        } finally {
            setIsSaving(false)
        }
    }

    // Handle Remove Profile Picture functionality
    const handleRemoveProfilePic = () => {
        setProfilePic(null) // This will reset the profile picture to the default one
        console.log(profilePic)
    }

    // Handle file input change and update profilePic with the file URL
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0] // Get the first file
        if (file) {
            const reader = new FileReader()
            reader.onloadend = () => {
                setProfilePic(reader.result as string) // Set the URL of the image
            }
            reader.readAsDataURL(file) // Read the file as a data URL
        }
        console.log(profilePic)
    }

    // Handle Close functionality (Go back to previous page)
    const handleClose = () => {
        router.back() // Go back to the previous page in the browser history
    }

    return (
        <div className="max-w-xl mx-auto mt-10 p-6 rounded-2xl bg-white shadow-md border border-gray-200 space-y-8">
            {/* Profile Picture */}
            <div className="flex flex-col items-center space-y-4">
                <div className="relative w-32 h-32 rounded-full overflow-hidden">
                    <Image
                        src={profilePic !== null ? profilePic : '/images/profile-user.png'}
                        alt="Profile"
                        width={256}
                        height={256}
                        className="object-cover w-full h-full"
                    />
                </div>
                <div className="flex gap-2">
                    <Button
                        variant="outline"
                        className="flex items-center gap-2"
                        onClick={() => document.getElementById('fileInput')?.click()}
                    >
                        <Upload size={16} /> Change
                    </Button>
                    <Button
                        variant="destructive"
                        className="flex items-center gap-2"
                        onClick={handleRemoveProfilePic}
                    >
                        <Trash2 size={16} /> Remove
                    </Button>
                    <input
                        type="file"
                        id="fileInput"
                        accept="image/*"
                        className="hidden"
                        onChange={handleFileChange} // Update the profilePic state with the selected image URL
                    />
                </div>
            </div>

            {/* Editable Username */}

            <div>
                <Label htmlFor="username" className="mb-1 block">Username</Label>
                <Input
                    id="username"
                    value={username}
                    onChange={handleUsernameChange} // Check username availability on change
                />
                {/* Display username availability message */}
                {usernameStatus && (
                    <p className={`mt-2 text-sm ${usernameStatus === 'Username available' ? 'text-green-600' : 'text-red-600'}`}>
                        {usernameStatus}
                    </p>
                )}
            </div>

            {/* Password */}
            <div>
                <Label htmlFor="password" className="mb-1 block">Password</Label>
                <div className="flex gap-2 items-center">
                    <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <Label htmlFor="password" className="mb-1 block">(Leave it blank if you don't want to change it)</Label>
            </div>

            {/* Phone Number */}
            <div>
                <Label htmlFor="phone" className="mb-1 block">Phone Number</Label>
                <Input
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />
            </div>

            {/* Save Button & Close Button */}
            <div className="text-center flex justify-center items-center gap-2">
                <Button
                    className="px-8 py-2 text-lg rounded-xl bg-emerald-400 hover:bg-emerald-600"
                    onClick={handleSave}
                    disabled={isSaving || usernameStatus === 'Checking...'} // Disable while saving or checking
                >
                    {isSaving ? 'Saving...' : 'Save'}
                </Button>

                <Button
                    variant="outline"
                    className="px-8 py-2 text-lg rounded-xl bg-red-500 hover:bg-red-600 text-amber-50"
                    onClick={handleClose}
                >
                    Close
                </Button>
            </div>

        </div>
    )
}
