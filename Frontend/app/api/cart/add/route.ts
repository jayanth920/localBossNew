import { NextRequest, NextResponse } from "next/server";
import User from "@/app/api/_models/User";
import { connectDB } from "@/app/api/_lib/mongodb";

export async function POST(req: NextRequest) {
  try {
    await connectDB();
    const { userId, item } = await req.json();
    const user = await User.findById(userId);

    if (!user) return NextResponse.json({ message: "User not found" }, { status: 404 });

    let existingItem = user.cart.find((i: any) => i.id === item.id);
    if (existingItem) existingItem.quantity += item.quantity;
    else user.cart.push(item);

    await user.save();
    return NextResponse.json(user.cart);
  } catch (error) {
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
