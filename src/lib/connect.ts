"use client"
import { useUser } from "@clerk/nextjs";

export const LoggedUser = () =>{
    const {user} = useUser()
    return user
}
