import dbConnect from "@/lib/db";

export async function POST(request: Request) {

    await dbConnect()

    
}

