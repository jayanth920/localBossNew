"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@/app/components/context/userContext";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function AuthPage() {
  const [isSignup, setIsSignup] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");

  const router = useRouter();
  const { setUser } = useUser(); // Context for authentication

  const handleAuth = async () => {
    try {
      const endpoint = isSignup ? "/api/register" : "/api/login";
      const body = isSignup
        ? { username, email, password, phone } // Register requires all fields
        : { email, password }; // Login only requires email & password
  
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
  
      if (!response.ok) throw new Error(`${isSignup ? "Signup" : "Login"} failed`);
  
      if (isSignup) {
        alert("Signup successful! Please login.");
        setIsSignup(false); // Switch to login tab after signing up
      } else {
        const { token, user } = await response.json();
        setUser(user); // Update global auth state
  
        // Store the user data in localStorage
        localStorage.setItem("user", JSON.stringify(user)); // Store user info
        localStorage.setItem("token", token); // Store JWT token
  
        router.push("/"); // Redirect to home
      }
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-[400px]">
        {/* Custom Tabs (Login/Signup) */}
        <div className="flex mb-4">
          <button
            className={`w-1/2 p-2 ${!isSignup ? "bg-blue-500 text-white" : "bg-gray-200"}`}
            onClick={() => setIsSignup(false)}
          >
            Login
          </button>
          <button
            className={`w-1/2 p-2 ${isSignup ? "bg-blue-500 text-white" : "bg-gray-200"}`}
            onClick={() => setIsSignup(true)}
          >
            Sign Up
          </button>
        </div>

        {/* Login Form */}
        {!isSignup && (
          <Card>
            <CardHeader>
              <CardTitle>Login</CardTitle>
              <CardDescription>Sign in to your account</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full" onClick={handleAuth}>
                Login
              </Button>
            </CardFooter>
          </Card>
        )}

        {/* Signup Form */}
        {isSignup && (
          <Card>
            <CardHeader>
              <CardTitle>Sign Up</CardTitle>
              <CardDescription>Create a new account</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="username">Username</Label>
                <Input
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="email-signup">Email</Label>
                <Input
                  id="email-signup"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="password-signup">Password</Label>
                <Input
                  id="password-signup"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="phone">Phone</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full" onClick={handleAuth}>
                Sign Up
              </Button>
            </CardFooter>
          </Card>
        )}
      </div>
    </div>
  );
}
