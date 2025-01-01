import { Schema } from "mongoose";

export interface QuickMatch {
    hostTeam:string;
    visitorTeam:string;
    toss:string;
    opted:string;
    overs:number;
}

const QuickMatchSchema = new Schema<QuickMatch>({
    hostTeam:{
        type:String,
        required:true,
    },
    visitorTeam:{
        type:String,
        required:true,
    },
    toss:{
        type:String,
        required:true,
    },
    opted:{
        type:String,
        required:true,
    },
    overs:{
        type:Number,
        required:true,
    }
})