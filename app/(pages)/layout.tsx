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
import { useEffect, useState } from "react"

export default function Layout({ children }: React.PropsWithChildren) {
    const { user, logout, setUser } = useUser(); // Accessing the context
    const [imageSrc, setImageSrc] = useState("/images/profile-user.png");

    useEffect(() => {
        if (user?.profilePic && user.profilePic.trim() !== "") {
            setImageSrc(user.profilePic); 
        } else {
            setImageSrc("/images/profile-user.png");  
        }
    }, [user]);  

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
                <div className="absolute md:top-[4vh] top-[2vh] left-[80vw] md:left-[85vw]">
                    {user ? (
                        <DropdownMenu>
                            <DropdownMenuTrigger className="flex justify-between items-center md:px-4 md:py-2 px-1 py-0 md:static absolute top-[1vh] left-[1vw] rounded-md shadow-lg bg-amber-50 border border-gray-300 hover:shadow-xl transition-shadow">
                                <Avatar>
                                    <AvatarImage
                                        src={imageSrc ? imageSrc : "/images/profile-user.png"}
                                        alt="Profile"
                                    />
                                </Avatar>
                                &nbsp;
                                {user.username.length > 1 ? `${user.username.slice(0, 1)}...` : user.username}
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="bg-amber-50">
                                <DropdownMenuItem asChild>
                                    <Link href="/profile">Profile</Link>
                                </DropdownMenuItem>
                                {/* <DropdownMenuItem>Payment Methods</DropdownMenuItem> */}
                                <DropdownMenuItem onClick={handleLogout}>Logout</DropdownMenuItem> {/* Logout action */}
                            </DropdownMenuContent>
                        </DropdownMenu>

                    ) : (
                        <div className="absolute left-[2vw] top-[1vh] md:static">
                        <Link href="/login">
                            <Button variant="outline" className="bg-amber-50">Login</Button>
                        </Link>
                        </div>
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
