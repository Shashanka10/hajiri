import { db } from "@/index";
import { semesterTable } from "@/db/schema";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest){
    const result  = await db.select().from(semesterTable);
    return NextResponse.json(result);
}
export const dynamic = "force-dynamic";