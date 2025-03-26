import { type NextRequest, NextResponse } from 'next/server';
import User from '@/app/api/_models/User';  // Adjust path as necessary
import { connectDB } from '@/app/api/_lib/mongodb';  // Adjust path as necessary

export async function GET(request: NextRequest) {
  try {
    // Connect to the database
    await connectDB();

    // Get the id from the dynamic route (in the path of the URL)
    const { pathname } = request.nextUrl;
    const id = pathname.split('/').pop();  // Extract the id from the URL path

    // If no id is found, return 400 or 404
    if (!id) {
      return NextResponse.json({ message: 'User ID is required' }, { status: 400 });
    }

    // Fetch the user by ID
    const user = await User.findById(id);

    if (!user) {
      return NextResponse.json({ message: 'User not found' }, { status: 404 });
    }

    // Return the user data in the response
    console.log(JSON.stringify(user));
    return NextResponse.json(user);

  } catch (error) {
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
