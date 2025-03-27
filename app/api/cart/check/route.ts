import { NextRequest, NextResponse } from "next/server";
import User from "@/app/api/_models/User";
import { connectDB } from "@/app/api/_lib/mongodb";

export const dynamic = 'force-dynamic'

export async function POST(req: NextRequest) {
  try {
    await connectDB();
    const { userId, itemId } = await req.json(); // Expect userId and itemId in the request

    // Find the user by their ID
    const user = await User.findById(userId);

    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    // Check if the item exists in the cart
    const existingItem = user.cart.find((item: any) => item.id === itemId);

    // Return a response indicating whether the item is in the cart or not
    return NextResponse.json({ isItemInCart: existingItem ? true : false });
  } catch (error) {
    console.error("Error checking cart:", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
