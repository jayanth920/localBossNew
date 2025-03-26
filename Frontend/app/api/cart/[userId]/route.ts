import { NextRequest, NextResponse } from "next/server";
import User from "@/app/api/_models/User";
import { connectDB } from "@/app/api/_lib/mongodb";

export async function GET(req: NextRequest, { params }: { params: { userId: string } }) {
  try {
    await connectDB();
    const user = await User.findById(params.userId);
    if (!user) return NextResponse.json({ message: "User not found" }, { status: 404 });

    return NextResponse.json(user.cart);
  } catch (error) {
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
