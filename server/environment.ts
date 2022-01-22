import dotenv from 'dotenv';

dotenv.config();

export const serverPort = process.env.SERVER_PORT || 3000;
export const databasePort = process.env.DB_PORT || 27017;
export const databaseName = process.env.DB_NAME || 'gist';
export const apiKey = process.env.API_KEY;
export const apiUserId = process.env.API_USER_ID;
