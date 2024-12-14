import mongoose from "mongoose";
import DB_NAME from "./constans";

const connectDB = async() =>{
    try {
        const connect = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)

        console.log(`mongoDB Connected !! DB HOST: ${connect.connection.host}`);
    } catch (error) {
        console.log('mongoDB connection error', error);
        process.exit(1)
    }
}

export default connectDB;