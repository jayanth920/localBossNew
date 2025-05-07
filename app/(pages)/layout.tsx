"use client";

import Link from "next/link";
import { Menu } from "../components/Menu";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Title } from "../components/Title";
import { useUser } from "../components/context/userContext";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useEffect, useState } from "react";

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
    setUser(null); // Assuming setUser sets the user context to null when logged out

    window.location.href = "/home";
  };

  return (
    <>
      <Menu />

      <div
        className="flex flex-col items-center justify-start min-h-screen font-[family-name:var(--font-geist-sans)] mx-auto border-gray-200 p-6"
        role="main"
        aria-label="Main page content"
      >
        {/* User Avatar or Login */}
        <div className="absolute md:right-8 right-1 top-8">
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger
                className="flex justify-between items-center md:px-4 md:py-2 px-1 py-0 md:static absolute top-[1vh] left-[1vw] rounded-md shadow-lg bg-amber-50 border border-gray-300 hover:shadow-xl transition-shadow"
                aria-label="User menu"
                aria-haspopup="menu"
              >
                <Avatar>
                  <AvatarImage
                    src={imageSrc ? imageSrc : "/images/profile-user.png"}
                    alt="User profile picture"
                  />
                </Avatar>
                &nbsp;
                {user.username.length > 1
                  ? `${user.username.slice(0, 1)}...`
                  : user.username}
              </DropdownMenuTrigger>

              <DropdownMenuContent
                className="bg-amber-50"
                aria-label="User dropdown options"
              >
                <DropdownMenuItem asChild>
                  <Link href="/profile" aria-label="Go to profile page">
                    Profile
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem
                  onClick={handleLogout}
                  aria-label="Logout from account"
                >
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Link href="/login" aria-label="Go to login page">
              <Button
                variant="outline"
                className="relative bg-amber-50 cursor-pointer px-2 md:px-8 md:py-8 rounded-xl shadow-2xl border-pink-600 border-2 group overflow-hidden hover:text-amber-50 transition-all duration-150"
              >
                <span className="relative z-10 md:text-xl">Login</span>
                <span className="absolute inset-0 bg-pink-600 group-hover:w-full w-0 transition-all duration-300"></span>
              </Button>
            </Link>
          )}
        </div>

        {/* Title link to homepage */}
        <Link href="/home" aria-label="Return to homepage">
          <Title />
        </Link>

        {/* Main page content */}
        {children}
      </div>
    </>
  );
}
