import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import User from "../_models/User";
import { connectDB } from "../_lib/mongodb";

export const dynamic = 'force-dynamic'

const SECRET_KEY = process.env.SECRET_KEY as string;

export async function POST(req: Request) {
  try {
    await connectDB();
    const { email, password } = await req.json();
    const user = await User.findOne({ email });

    if (!user) return NextResponse.json({ message: "Invalid credentials" }, { status: 400 });
    
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) return NextResponse.json({ message: "Invalid credentials" }, { status: 400 });
    
    const token = jwt.sign({ id: user._id, email: user.email }, SECRET_KEY, { expiresIn: "7d" });
    return NextResponse.json({ token, user });
  } catch (error) {
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}