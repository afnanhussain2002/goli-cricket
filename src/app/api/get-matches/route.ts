import dbConnect from "@/lib/db";
import MatchSetupModel from "@/model/match-setup.model";

export async function GET(request: Request) {
    await dbConnect()
    try {
        const matches = await MatchSetupModel.find({ })

        return Response.json({matches}, {status: 200})
    } catch (error) {
        console.log(error); 
    }
}