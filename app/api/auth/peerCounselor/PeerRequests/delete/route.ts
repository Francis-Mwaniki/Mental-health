import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
const prisma = new PrismaClient();


export async function POST(req: Request, res: Response) {

  try {
    // if (!req.body) {
    //   return new NextResponse("Invalid request", { status: 400 });
    // }
    const  { id,conselorId } = await req.json(); 

    console.log("id",id,conselorId);
    if(!id || !conselorId){
        return NextResponse.json({ message: "Invalid request", status: 400 });
        }
    

    const data = await prisma.peerCounselor.findUnique({
        where:{
            id: (conselorId)
        },
        select:{
         meetings:true
        }
    })


    console.log("data from bookings",data);
    
     

    if (data === null) {
      return NextResponse.json({ message: "No meeting found", status: 404 });
    }

    //delete the meeting
    const deletedMeeting = await prisma.peerMeeting.delete({
        where:{
            id:(id)
        }
    })

    console.log("deletedMeeting",deletedMeeting);

    //fetch the updated meetings
    const updatedMeetings = await prisma.peerCounselor.findUnique({
        where:{
            id: (conselorId)
        },
        select:{
         meetings:true
        }
    })
  

    return NextResponse.json({ message: "Meeting deleted successfully",
       status: 200 });



  } catch (error: any) {
    return  NextResponse.json({ message: error.message, 
       status: 500
      });
  }
}