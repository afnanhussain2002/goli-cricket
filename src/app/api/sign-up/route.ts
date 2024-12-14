import dbConnect from "@/lib/db"
import UserModel from "@/model/user.model"


export async function POST(request: Request) {
    await dbConnect()
    const {username, email} = await request.json()
    const user = await UserModel.create({username, email})
    
}