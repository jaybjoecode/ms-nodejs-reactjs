

import mongoose from "mongoose";
import * as dotenv from 'dotenv';
dotenv.config()

const MONGODB_URI = process.env.DATABASE

export const connectDB = async () => {
    try {
        // console.log('MONGODB_URI', MONGODB_URI)
        await mongoose.connect(MONGODB_URI);
        console.log("MongoDB is connected");
    } catch (error) {
        console.error(error);
    }
};