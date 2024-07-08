import { newStudentsTable } from "@/db/schema";
import { db } from "@/index";
import { eq } from "drizzle-orm";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest){
    try {
        const data = await req.json();

        const result  = await db.insert(newStudentsTable).values({
            fullname: data?.fullname,
            semester:data?.semester,
            address:data?.address,
            contact:data?.contact
        })
        return NextResponse.json(result);
    } catch (error) {
        console.error("Error inserting data", error);
        return NextResponse.json({error: "Failed to insert data"}, {status: 500})
    }
}

export async function GET(req:NextRequest){
    try {
        const result = await db.select().from(newStudentsTable)
        return NextResponse.json(result);
    } catch (error) {
        console.log(error)
    }
}

export async function DELETE(req:NextRequest){
    const searchParams  = req.nextUrl.searchParams;
    const id = searchParams.get('id');

    try {
        const result = await db.delete(newStudentsTable)
        .where(eq(newStudentsTable.id, parseInt(id ?? '')))
        return NextResponse.json(result);
    } catch (error) {
        console.log(error)
    }
}