import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

// Get all services
export async function GET(req: Request, res: Response) {
  try {




 /* 
 
 */
        const counselors = await prisma.peerCounselor.findMany({})

        console.log("counselor-----", counselors);

          
      return NextResponse.json({
        message: "ok",
        status: 200,
        data: counselors
      });
  } catch (error: any) {
    return NextResponse.json({
      message: error.message,
      status: 500,
    });
  }
}