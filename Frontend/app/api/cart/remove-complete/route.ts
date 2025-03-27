import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "../../_lib/mongodb";
import User from "../../_models/User";

export async function POST(req: NextRequest) {
  try {
    await connectDB();
    const { userId, itemId } = await req.json();
    const user = await User.findById(userId);

    if (!user) return NextResponse.json({ message: "User not found" }, { status: 404 });

    // Always remove the item, no need to check quantity
    user.cart = user.cart.filter((i: any) => i.id !== itemId);
    await user.save();

    console.log(user.cart);
    return NextResponse.json(user.cart);
  } catch (error) {
    console.error("Error removing item:", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
