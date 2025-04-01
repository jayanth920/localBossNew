import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import User from "../_models/User";
import { connectDB } from "../_lib/mongodb";
import { v2 as cloudinary } from "cloudinary"; // Import Cloudinary
import { v4 as uuidv4 } from "uuid"; // To generate a unique ID for the file
import path from "path";

// Configure Cloudinary (You can move this configuration to a config file if needed)
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, // Replace with your Cloudinary cloud name
  api_key: process.env.CLOUDINARY_API_KEY, // Replace with your Cloudinary API key
  api_secret: process.env.CLOUDINARY_API_SECRET, // Replace with your Cloudinary API secret
});

export const dynamic = 'force-dynamic';

export async function POST(req: Request) {
  try {
    await connectDB();

    // Parse form data
    const formData = await req.formData();
    const username = formData.get("username") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const phone = formData.get("phone") as string;
    const profilePic = formData.get("profilePic") as File | null; // Profile picture

    const existingUser = await User.findOne({ email });
    if (existingUser) return NextResponse.json({ message: "Email already exists" }, { status: 400 });

    const hashedPassword = await bcrypt.hash(password, 10);

    let imageUrl = null;
    if (profilePic) {
      // Generate a unique name for the image
      const uniqueName = `${username}_${uuidv4()}_${Date.now()}${path.extname(profilePic.name)}`;

      // Convert the profile picture to a buffer
      const buffer = Buffer.from(await profilePic.arrayBuffer());

      // Upload the image to Cloudinary and wait for the result
      const uploadResult = await new Promise((resolve, reject) => {
        const uploadStream = cloudinary.uploader.upload_stream(
          {
            public_id: uniqueName, // Optional, can be used for custom naming
            folder: "user_profile_pics", // Optional folder name for organization
            resource_type: "auto", // Automatically detect the file type
          },
          (error, result) => {
            if (error) {
              reject("Cloudinary upload failed: " + error.message);
            } else {
              resolve(result);
            }
          }
        );
        uploadStream.end(buffer); // Use the 'end' method to send the buffer
      });

      imageUrl = (uploadResult as any)?.secure_url; // The URL of the uploaded image
    }

    // Create new user with the image URL
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      phone,
      profilePic: imageUrl, // Save the image URL
      cart: [],
      pastOrders: [],
    });

    await newUser.save();
    return NextResponse.json({ message: "User registered successfully" });
  } catch (error) {
    console.error(error); // Log error for debugging
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
