"use client";

import { useEffect, useState } from "react";
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
import NeumorphButton from "@/components/cultui/neumorph-button";
import { Loader2 } from "lucide-react";

export default function AuthPage() {
  const [isSignup, setIsSignup] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [profilePic, setProfilePic] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null); // Preview Image
  const [loading, setLoading] = useState(false);


  const router = useRouter();
  const { setUser, user, setSyncUser } = useUser(); // Context for authentication

  // Redirect if user is already logged in
  useEffect(() => {
    if (user || localStorage.getItem("user")) {
      router.push("/"); // Redirect to home page if logged in
    }
  }, [user, router]);

  // Handle image selection
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setProfilePic(file);
      setPreview(URL.createObjectURL(file)); // Create preview URL
    }
  };

  // Handle Signup/Login
  const handleAuth = async () => {
    setLoading(true);
    try {
      const endpoint = isSignup ? "/api/register" : "/api/login";
      let body: any;

      if (isSignup) {
        body = new FormData();
        body.append("username", username);
        body.append("email", email);
        body.append("password", password);
        body.append("phone", phone);
        if (profilePic) body.append("profilePic", profilePic);
      } else {
        body = { username, password };
      }

      const response = await fetch(endpoint, {
        method: "POST",
        body: isSignup ? body : JSON.stringify(body),
        headers: !isSignup ? { "Content-Type": "application/json" } : {},
      });

      if (!response.ok) throw new Error(`${isSignup ? "Signup" : "Login"} failed`);

      if (isSignup) {
        alert("Signup successful! Please login.");
        setIsSignup(false);
      } else {
        const { token, user } = await response.json();
        setSyncUser(user);
        localStorage.setItem("token", token);
        router.push("/");
      }
    } catch (error: any) {
      console.error("Error during authentication:", error);
      alert("Authentication failed. Please check your credentials.");
    } finally {
      setLoading(false);
    }
  };


  return (
    <div className="flex justify-center items-center min-h-fit">
      <div className="w-[80vw] mx-[10vw] md:mx-0 md:w-[400px] mt-[20vh] md:mt-5">
        {/* Custom Tabs (Login/Signup) */}
        <div className="flex h-[40px] justify-center items-center mb-4 bg-gray-200 rounded-[10px]">
          <button
            className={`w-[195px] h-[30px] flex justify-center items-center p-2 rounded-[7px] shadow-[10px] shadow-neutral-600 ${!isSignup ? "bg-white text-black" : "bg-gray-200 text-slate-600"}`}
            onClick={() => setIsSignup(false)}
          >
            Login
          </button>
          <button
            className={`w-[195px] h-[30px] flex justify-center items-center p-2 rounded-[7px] shadow-[10px] shadow-neutral-600 ${isSignup ? "bg-white text-black" : "bg-gray-200 text-slate-600"}`}
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
                <Label htmlFor="username">Username</Label>
                <Input id="username" type="username" value={username} onChange={(e) => setUsername(e.target.value)} />
              </div>
              <div className="space-y-1">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
              </div>
            </CardContent>
            <CardFooter>
            <NeumorphButton className="w-full" onClick={handleAuth} disabled={loading}>
  <div className="flex items-center justify-center gap-3">
    <span>Login</span>
    {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" strokeWidth={2} />}
  </div>
</NeumorphButton>
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
                <Input id="username" type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
              </div>
              <div className="space-y-1">
                <Label htmlFor="email-signup">Email</Label>
                <Input id="email-signup" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className="space-y-1">
                <Label htmlFor="password-signup">Password</Label>
                <Input id="password-signup" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
              </div>
              <div className="space-y-1">
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
              </div>

              {/* Profile Picture Upload */}
              <div className="space-y-1">
                <Label htmlFor="profilePic">Profile Picture</Label>
                <Input id="profilePic" type="file" accept="image/*" onChange={handleImageChange} />
                {preview && (
                  <img src={preview} alt="Profile Preview" className="mt-2 w-24 h-24 rounded-full object-cover" />
                )}
              </div>
            </CardContent>
            <CardFooter>
            <NeumorphButton className="w-full" onClick={handleAuth} disabled={loading}>
  <div className="flex items-center justify-center gap-3">
    <span>Sign Up</span>
    {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" strokeWidth={2} />}
  </div>
</NeumorphButton>
            </CardFooter>
          </Card>
        )}
      </div>
    </div>
  );
}
