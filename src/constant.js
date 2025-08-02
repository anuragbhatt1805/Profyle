import pkg from '../package.json' with { type: 'json' };

// Load environment variables from .env file
import dotenv from 'dotenv';
dotenv.config({
    override: true,
    quiet: true
});

export const APP_NAME = process.env.APP_NAME || pkg.name;
export const ENV = process.env.NODE_ENV || 'development';

export const PORT = process.env.NODE_PORT || 3000;

export const MONGO_URI = process.env.MONGO_URI || `mongodb://localhost:27017`;