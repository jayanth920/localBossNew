import { NextRequest, NextResponse } from "next/server";
import User from "@/app/api/_models/User";
import { connectDB } from "@/app/api/_lib/mongodb";

export const dynamic = 'force-dynamic'

export async function POST(req: NextRequest) {
  try {
    await connectDB();
    const { userId } = await req.json();
    const user = await User.findById(userId);

    if (!user) return NextResponse.json({ message: "User not found" }, { status: 404 });
    if (!user.paymentInfo) return NextResponse.json({ message: "Payment info missing" }, { status: 400 });

    const order = {
      date: new Date().toISOString(),
      totalAmount: user.cart.reduce((sum: number, item: any) => sum + item.price * item.quantity, 0),
      items: [...user.cart],
    };

    user.pastOrders.push(order);
    user.cart = [];

    await user.save();
    return NextResponse.json({ message: "Order placed successfully", order });
  } catch (error) {
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
