import { config } from "dotenv";
config();

export const PORT = process.env.PORT || 9000;
export const MONGO_URI = process.env.MONGO_URI;
export const SECRET_KEY_TOKEN = process.env.SECRET_KEY_TOKEN;