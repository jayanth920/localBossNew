import { type NextRequest, NextResponse } from 'next/server';
import User from '@/app/api/_models/User';  // Adjust path as necessary
import { connectDB } from '@/app/api/_lib/mongodb';  // Adjust path as necessary

export const dynamic = 'force-dynamic'


export async function GET(request: NextRequest) {
  try {
    await connectDB();

    const { pathname } = request.nextUrl;
    const id = pathname.split('/').pop();  

    if (!id) {
      return NextResponse.json({ message: 'User ID is required' }, { status: 400 });
    }

    const user = await User.findById(id);

    if (!user) {
      return NextResponse.json({ message: 'User not found' }, { status: 404 });
    }

    // console.log(JSON.stringify(user));
    return NextResponse.json(user);

  } catch (error) {
    return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 });
  }
}
