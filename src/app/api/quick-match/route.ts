import dbConnect from "@/lib/db";
import QuickMatchModel from "@/model/quick-match.modal";

export async function POST(request: Request) {
  await dbConnect();
  try {
    const { hostTeam, visitorTeam, toss, opted, overs } = await request.json();
    console.log("data=====", hostTeam, visitorTeam, toss, opted, overs);
    const newQuickMatch = new QuickMatchModel({
      hostTeam,
      visitorTeam,
      toss,
      opted,
      overs,
    });
    await newQuickMatch.save();
    return Response.json(
      { message: "Quick Match created successfully" },
      { status: 201 }
    );
  } catch (error) {
    console.log(error);
  }
}
