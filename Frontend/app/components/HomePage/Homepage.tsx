"use client"

import Link from "next/link";
import { useState, useEffect } from "react";
import { ShimmerButton } from "@/components/magicui/shimmer-button";

export function HomePage() {
    const [user, setUser] = useState<any>(null);

    useEffect(() => {
        // Check if user is logged in (for simplicity, assume user data is stored in localStorage)
        const userData = localStorage.getItem("user"); // This could be a JWT or user object
        if (userData) {
            setUser(JSON.parse(userData)); // Update state if user is logged in
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("user"); // Remove user data on logout
        setUser(null); // Update state
    };

    return (
        <div className="flex flex-col items-center justify-start min-h-screen font-[family-name:var(--font-geist-sans)] mx-auto border-gray-200">
            <div className="w-full flex justify-between items-center p-4 bg-white shadow-md">
                <div>
                    <Link href="/" className="text-lg font-bold text-black">LocalBoss</Link>
                </div>

                <div className="flex items-center gap-4">
                    {/* If user is logged in, show profile pic and username, otherwise show login button */}
                    {user ? (
                        <div className="relative">
                            <button className="flex items-center gap-2">
                                <img
                                    src={user.profilePic || "/default-profile-pic.jpg"}
                                    alt="Profile"
                                    className="w-8 h-8 rounded-full"
                                />
                                <span className="text-sm font-semibold">{user.username}</span>
                            </button>
                            <div className="absolute right-0 mt-2 w-48 bg-white shadow-md rounded-md">
                                <Link href="/profile" className="block p-2 text-gray-700">Profile</Link>
                                <Link href="/payment" className="block p-2 text-gray-700">Payment Methods</Link>
                                <button onClick={handleLogout} className="w-full text-left p-2 text-gray-700">Logout</button>
                            </div>
                        </div>
                    ) : (
                        <Link href="/login" className="text-blue-500">Login</Link>
                    )}
                </div>
            </div>

            <div
                className="w-[40vw] h-fit text-center text-black text-[20px] mt-[15vh] mb-[10vh]"
            >
                At <b>LocalBoss</b>, we bring the freshest groceries straight to your doorstep.
                From farm-fresh vegetables and juicy fruits to daily essentials, snacks, and
                beverages, we make sure you get the best quality at unbeatable prices.
            </div>

            <Link href="/shop">
                <ShimmerButton className="shadow-2xl">
                    <span className="whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white bg-[255,0,100,1] lg:text-lg">
                        Shop Now !
                    </span>
                </ShimmerButton>
            </Link>
        </div>
    );
}
