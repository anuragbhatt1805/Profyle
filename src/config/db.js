import mongoose from "mongoose";

import { MONGO_URI, APP_NAME } from "../constant.js";
import { buildLogger } from "./logger.js";

// Initialize logger for database operations
const logger = buildLogger({ config: "database" });

export const connectDB = async () => {
    try {
        const mongo = await mongoose.connect(`${MONGO_URI}/${APP_NAME.toLowerCase()}`);
        logger.info(`Database connected: "${mongo.connection?.name}" for ${APP_NAME}`);
    } catch (error) {
        logger.error("Database connection failed with error:", error);
    }
}