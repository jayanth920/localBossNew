import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import User from "../_models/User";
import { connectDB } from "../_lib/mongodb";

export const dynamic = 'force-dynamic'


export async function POST(req: Request) {
  try {
    await connectDB();
    const { username, email, password, phone } = await req.json();
    const existingUser = await User.findOne({ email });
    
    if (existingUser) return NextResponse.json({ message: "Email already exists" }, { status: 400 });
    
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, email, password: hashedPassword, phone, cart: [], pastOrders: [] });
    await newUser.save();
    
    return NextResponse.json({ message: "User registered successfully" });
  } catch (error) {
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
