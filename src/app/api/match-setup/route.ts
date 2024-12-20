import dbConnect from "@/lib/db";
import MatchSetupModel from "@/model/match-setup.model";

export async function POST(request: Request) {

    await dbConnect()

    try {
        const {team1,team2,over,dateTime,location,ballType, matchOwner} = await request.json();
        console.log("data----",team1,team2,over,dateTime,location,ballType);

        if(!team1 || !team2 || !over ){
            return Response.json({error: "Missing team1, team2 or over"}, {status: 400})
        }


        const newMatch = new MatchSetupModel({team1,team2,over,dateTime,location,ballType, matchOwner})

        await newMatch.save()

        return Response.json({message: "Match created successfully"}, {status: 201})
    } catch (error) {
       console.log(error); 
    }


}

