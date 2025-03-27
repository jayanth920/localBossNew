import { NextRequest, NextResponse } from 'next/server';
import User from '@/app/api/_models/User'; // Adjust path as necessary
import { connectDB } from '@/app/api/_lib/mongodb'; // Adjust path as necessary

export const dynamic = 'force-dynamic'


export async function GET(request: NextRequest) {
  try {
    // Connect to the database
    await connectDB();

    // Extract user ID from the URL path
    const { pathname } = request.nextUrl;
    const id = pathname.split('/').pop(); // Extract the id from the URL path

    // Handle case where no id is found in the path
    if (!id) {
      return NextResponse.json({ message: 'User ID is required' }, { status: 400 });
    }

    // Find user by ID
    const user = await User.findById(id);

    // If user is not found, return a 404 response
    if (!user) {
      return NextResponse.json({ message: 'User not found' }, { status: 404 });
    }

    // Return the user data in the response
    return NextResponse.json(user);

  } catch (error) {
    // Handle internal server errors
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
