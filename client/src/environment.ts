import dotenv from 'dotenv';

dotenv.config();

export const serverUrl = process.env.SERVER_URL || 'http://localhost:3000';
