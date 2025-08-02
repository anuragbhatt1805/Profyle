// Load environment variables from .env file
import dotenv from 'dotenv';
dotenv.config({
    override: true,
});

export const PORT = process.env.NODE_PORT || 3000;