"use client"
import { useEffect } from "react"
import connectDB from "./db";

export const ConnectDB = () =>{
    useEffect(() => {
        connectDB();
      }, []);
}