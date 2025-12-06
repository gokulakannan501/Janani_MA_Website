import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const body = await request.json();

        // Validate body
        if (!body.name || !body.email || !body.date) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        // Connect to database (MongoDB/PostgreSQL) here
        // const db = await connectToDatabase();
        // await db.bookings.insertOne(body);

        console.log('Booking request received:', body);

        return NextResponse.json({ success: true, message: 'Booking received' }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
