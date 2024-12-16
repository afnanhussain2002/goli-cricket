import dbConnect from "@/lib/db";

export async function POST(request: Request) {

    await dbConnect()

    try {
        const {team1,team2,over,dateTime,location,ballType} = await request.json()

        if(!team1 || !team2 || !over ){
            return Response.json({error: "Missing team1, team2 or over"}, {status: 400})
        }
    } catch (error) {
       console.log(error); 
    }


}

