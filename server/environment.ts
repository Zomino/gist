import dotenv from 'dotenv';

dotenv.config();

export const serverPort = process.env.SERVER_PORT || 3001;
export const databasePort = process.env.DB_PORT || 27017;
export const databaseName = process.env.DB_NAME || 'gist';
export const APIKey = process.env.API_KEY;
export const APIUserID = process.env.API_USER_ID;
