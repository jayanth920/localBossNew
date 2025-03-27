import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "../../_lib/mongodb";
import User from "../../_models/User";

export async function POST(req: NextRequest) {
  try {
    await connectDB();
    const { userId, itemId } = await req.json();
    const user = await User.findById(userId);

    if (!user) return NextResponse.json({ message: "User not found" }, { status: 404 });

    const item = user.cart.find((i: any) => i.id === itemId);

    if (item) {
      if (item.quantity > 1) {
        item.quantity -= 1; // Decrease quantity by 1
      } else {
        user.cart = user.cart.filter((i: any) => i.id !== itemId); // Remove item if quantity is 1
      }
      await user.save();
    }

    return NextResponse.json(user.cart);
  } catch (error) {
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
