import { Schema } from "mongoose"

export interface MatchSetup{
    team1:string,
    team2:string,
    over:number,
    dateTime:Date,
    location:string,
    ballType:string
}

const MatchSetupSchema = new Schema<MatchSetup>({
    team1:{
        type:String,
        required:true,
    },
    team2:{
        type:String,
        required:true,
    },
    over:{
        type:Number,
        required:true,
    },
    dateTime:{
        type:Date,
    },
    location:{
        type:String,
    },
    ballType:{
        type:String,
    }
})