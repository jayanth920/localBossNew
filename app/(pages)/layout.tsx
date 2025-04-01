'use client'

import Link from "next/link"
import { Menu } from "../components/Menu"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Title } from "../components/Title"
import { useUser } from "../components/context/userContext"
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function Layout({ children }: React.PropsWithChildren) {
    const { user, logout, setUser } = useUser(); // Accessing the context

    // Handle logout functionality
    const handleLogout = () => {
        // Remove user data and token from localStorage
        localStorage.removeItem("user");
        localStorage.removeItem("token");

        // Reset the global user context state
        setUser(null);  // Assuming setUser sets the user context to null when logged out

        window.location.href = "/home";
    };

    return (
        <>
            <Menu />
            <div className="flex flex-col items-center justify-start min-h-screen font-[family-name:var(--font-geist-sans)] mx-auto border-gray-200">
                <div className="absolute top-[4vh] left-[90vw]">
                    {user ? (
                        <DropdownMenu>
                            <DropdownMenuTrigger className="flex justify-between items-center px-4 py-2 rounded-md shadow-lg bg-white border border-gray-300 hover:shadow-xl transition-shadow">
                                <Avatar>
                                    <AvatarImage src={user.profilePic || "/default-profile-pic.jpg"} alt="Profile" />
                                    <AvatarFallback>CN</AvatarFallback>
                                </Avatar>
                                &nbsp;
                                {user.username}
                            </DropdownMenuTrigger>
                            <DropdownMenuContent>
                                <DropdownMenuItem>Profile</DropdownMenuItem>
                                <DropdownMenuItem>Payment Methods</DropdownMenuItem>
                                <DropdownMenuItem onClick={handleLogout}>Logout</DropdownMenuItem> {/* Logout action */}
                            </DropdownMenuContent>
                        </DropdownMenu>

                    ) : (
                        <Link href="/login">
                            <Button variant="outline">Login</Button>
                        </Link>
                    )}
                </div>
                <Link href="/home">
                    <Title />
                </Link>
                {children}
            </div>
        </>
    );
}
