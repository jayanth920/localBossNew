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
     const { user, setUser } = useUser() // Accessing the context]
     const [userId, setUserId] = useState<string>('')
     const [showPassword, setShowPassword] = useState(false)
     const [profilePic, setProfilePic] = useState<string | '' | null>(null)
     const [password, setPassword] = useState<string>('')
     const [phone, setPhone] = useState<string>('')
     const [isSaving, setIsSaving] = useState(false)
 
     // Load initial user data
     useEffect(() => {
         if (user) {
             setUserId(user._id)
             setPassword('')  // You can prefill the password if you want
             setPhone(user.phone || '')
             // Ensure that the default image is used if profilePic is not set
             setProfilePic(user.profilePic ? user.profilePic : null)
         }
     }, [user])
 
     // const togglePassword = () => setShowPassword(prev => !prev)
 
     // Handle Save functionality
     const handleSave = async () => {
         if (!user) return
 
         setIsSaving(true)
 
         const data = {
             userId,
             password,
             phone,
             profilePic
         };
 
         console.log(data)
 
 
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
                 setUser(result.user)
                 alert('Profile updated successfully')
                 window.location.href = '/home'
 
                 try {
                     const resp = await fetch(`api/user/${user._id}`)
                     const res = await resp.json()
                     if (res.ok) {
                         localStorage.setItem('user', JSON.stringify(res.user))
                     }
                 } catch (error) {
                     console.error(error)
                 }
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
     // const handleRemoveProfilePic = () => {
     //     setProfilePic(null) // This will reset the profile picture to the default one
     //     console.log(profilePic)
     // }
 
     // Handle file input change and update profilePic with the file URL
     // const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
     //     const file = e.target.files?.[0] // Get the first file
     //     if (file) {
     //         const reader = new FileReader()
     //         reader.onloadend = () => {
     //             setProfilePic(reader.result as string) // Set the URL of the image
     //         }
     //         reader.readAsDataURL(file) // Read the file as a data URL
     //     }
     //     console.log(profilePic)
     // }
 
     return (
         <div className="max-w-xl mx-auto mt-10 p-6 rounded-2xl bg-white shadow-md border border-gray-200 space-y-8">
             {/* Profile Picture */}
             <div className="flex flex-col items-center space-y-4">
                 <div className="relative w-32 h-32">
                     <Image
                         src={profilePic ? profilePic : '/images/profile-user.png'}
                         alt="Profile"
                         width={128}
                         height={128}
                         className="rounded-full border shadow object-cover"
                     />
                 </div>
                 <div className="flex gap-2">
                     {/* <Button
                         variant="outline"
                         className="flex items-center gap-2"
                         onClick={() => document.getElementById('fileInput')?.click()}
                     >
                         <Upload size={16} /> Change
                     </Button> */}
                     {/* <Button
                         variant="destructive"
                         className="flex items-center gap-2"
                         onClick={handleRemoveProfilePic}
                     >
                         <Trash2 size={16} /> Remove
                     </Button> */}
                     {/* <input
                         type="file"
                         id="fileInput"
                         accept="image/*"
                         className="hidden"
                         // onChange={handleFileChange} // Update the profilePic state with the selected image URL
                     /> */}
                 </div>
             </div>
 
             {/* Username */}
             <div>
                 <Label htmlFor="username" className="mb-1 block">Username</Label>
                 <div className="flex gap-2 items-center">
                     <Label id="username">{user?.username}</Label>
                 </div>
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
 
             {/* Save Button */}
             <div className="text-center">
                 <Button
                     className="px-8 py-2 text-lg rounded-xl bg-amber-400 hover:bg-amber-500"
                     onClick={handleSave}
                     disabled={isSaving}
                 >
                     {isSaving ? 'Saving...' : 'Save'}
                 </Button>
             </div>
         </div>
     )
 }