import dbConnect from "@/lib/db"
import UserModel from "@/model/user.model"


export async function POST(request: Request) {
    await dbConnect()
   try {
     const {username, email} = await request.json()

     if (username || email) {
        return Response.json({error: "Username or email already exists"}, {status: 400})
     }
     const newUser = new UserModel({username, email})

     await newUser.save()

     return Response.json({message: "User registered successfully"}, {status: 201})



   } catch (error) {
    console.log("Error registering user", error);
   }
    
}