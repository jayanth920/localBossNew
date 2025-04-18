import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "@/app/api/_lib/mongodb";
import User from "@/app/api/_models/User";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  try {
    await connectDB();

    const { userId, productId, review_text, rating } = await req.json();

    if (!userId || !productId || !review_text || rating == null) {
      return NextResponse.json({ message: "Missing fields" }, { status: 400 });
    }

    const user = await User.findById(userId);
    if (!user) return NextResponse.json({ message: "User not found" }, { status: 404 });

    const date = new Date().toISOString().split("T")[0]; // Format: YYYY-MM-DD

    const newReview = {
      productId: Number(productId),
      review_text,
      rating: Number(rating),
      date,
    };

    user.reviews.push(newReview);
    await user.save();

    return NextResponse.json({ reviews: user.reviews }, { status: 200 });
  } catch (error) {
    console.error("Error adding review:", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
