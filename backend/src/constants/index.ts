import * as dotenv from 'dotenv';

dotenv.config();

export const USER = process.env.DB_USER
export const HOST = process.env.DB_HOST
export const DATABASE = process.env.DB
export const PASSWORD = process.env.DB_PASSWORD
export const PORT = process.env.PORT
export const SECRET = process.env.SECRET
export const USER_EMAIL = process.env.EMAIL
export const USER_PASSWORD = process.env.PASSWORD
