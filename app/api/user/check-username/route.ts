
import { NextRequest, NextResponse } from 'next/server'
import User from '@/app/api/_models/User'
import { connectDB } from '@/app/api/_lib/mongodb'

export const dynamic = 'force-dynamic'

export async function GET(req: NextRequest) {
    try {
        const username = req.nextUrl.searchParams.get('username'); // Use get() to access query parameter

        if (!username) {
            return NextResponse.json({ message: 'Username is required' }, { status: 400 })
        }

        await connectDB()

        // Check if the username exists in the database
        const user = await User.findOne({ username })
        
        // If the username exists, return a message indicating it's taken
        if (user) {
            return NextResponse.json({ message: 'Username already taken' }, { status: 409 })
        }

        // If the username doesn't exist, return a message indicating it's available
        return NextResponse.json({ message: 'Username available' }, { status: 200 })
    } catch (error) {
        console.error(error)
        return NextResponse.json({ message: 'Internal Server Error' }, { status: 500 })
    }
}
