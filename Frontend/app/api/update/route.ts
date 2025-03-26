import { NextRequest, NextResponse } from "next/server";
import User from "@/app/api/_models/User";
import { connectDB } from "@/app/api/_lib/mongodb";

export async function POST(req: NextRequest) {
  try {
    await connectDB();
    const { userId, username, email, phone, profilePic } = await req.json();
    const user = await User.findById(userId);

    if (!user) return NextResponse.json({ message: "User not found" }, { status: 404 });

    user.username = username;
    user.email = email;
    user.phone = phone;
    user.profilePic = profilePic;

    await user.save();
    return NextResponse.json({ message: "Profile updated successfully" });
  } catch (error) {
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
