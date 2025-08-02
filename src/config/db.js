import mongoose from "mongoose";

import { MONGO_URI, APP_NAME } from "../constant.js";

export const connectDB = async () => {
    try {
        const mongo = await mongoose.connect(`${MONGO_URI}/${APP_NAME.toLowerCase()}`)
        console.log("MONGO:",`Database connected: "${mongo.connection?.name}" for ${APP_NAME}`);
    } catch (error) {
        console.error("MONGO:","Database connection failed with error:", error);
    }
}