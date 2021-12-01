import * as dotenv from 'dotenv'
dotenv.config();

export const USER = process.env.DB_USER
export const HOST = process.env.DB_HOST
export const DATABASE = process.env.DB
export const PASSWORD = process.env.DB_PASSWORD
