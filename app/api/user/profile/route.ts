import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import User from "@/app/api/_models/User";
import { connectDB } from "@/app/api/_lib/mongodb";
import { v2 as cloudinary } from "cloudinary";
import { v4 as uuidv4 } from "uuid";

// Cloudinary config
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const dynamic = "force-dynamic";

export async function PATCH(req: NextRequest) {
  try {
    await connectDB();

    // Parse the JSON body
    const { userId, password, phone, profilePic, username } = await req.json();

    // Find the user by ID
    const user = await User.findById(userId);
    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    let imageUrl = user.profilePic; // Default to old profile pic if no new one is provided

    // If a new profile picture is provided, upload it to Cloudinary
    if (
      profilePic &&
      profilePic !== "" &&
      profilePic !== null &&
      user.profilePic !== profilePic
    ) {
      const uniqueName = `${
        user.username
      }_${uuidv4()}_${Date.now()}${getImageExtension(profilePic)}`; // Get dynamic file extension

      const base64Data = profilePic.split(",")[1]; // Remove the 'data:image/png;base64,' part
      const buffer = Buffer.from(base64Data, "base64"); // Create buffer from base64 data

      // Upload the image buffer to Cloudinary
      const uploadResult = await new Promise((resolve, reject) => {
        const uploadStream = cloudinary.uploader.upload_stream(
          {
            public_id: uniqueName,
            folder: "user_profile_pics",
            resource_type: "auto",
          },
          (error, result) => {
            if (error) reject("Cloudinary upload failed: " + error.message);
            else resolve(result);
          }
        );
        uploadStream.end(buffer);
      });

      imageUrl = (uploadResult as any).secure_url; // Store the Cloudinary secure URL
    } else if (profilePic === null) {
      imageUrl = null;
    }

    // Add the username to the update
    if (username && username !== "") {
      user.username = username; // Update username
    }

    // If password is provided, hash it
    if (password && password !== "" && password !== null) {
      const hashedPassword = await bcrypt.hash(password, 10);
      user.password = hashedPassword;
    }

    // Update the phone number and profile pic
    user.phone = phone;
    user.profilePic = imageUrl;

    // Save the updated user
    await user.save();

    return NextResponse.json({
      ok: true,
      message: "Profile updated successfully",
      user,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}

// Helper function to determine image file extension based on Base64 format
function getImageExtension(base64String: string): string {
  if (base64String.startsWith("data:image/png")) {
    return ".png";
  } else if (base64String.startsWith("data:image/jpeg")) {
    return ".jpeg";
  } else if (base64String.startsWith("data:image/jpg")) {
    return ".jpg";
  } else {
    throw new Error("Unsupported image format");
  }
}
