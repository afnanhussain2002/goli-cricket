"use server"
import dbConnect from "@/lib/db"
import UserModel from "@/model/user.model"


export async function POST(request: Request) {
    await dbConnect()
   try {
     const {username, email} = await request.json()

     console.log("info=====",username, email);

     if (!username || !email) {
        return Response.json({error: "Missing username or email"}, {status: 400})
     }
     const newUser = await UserModel.create({username, email})

     console.log("newUser=====",newUser);


     return Response.json({message: "User registered successfully"}, {status: 201})



   } catch (error) {
    console.log("Error registering user", error);
   }
    
}