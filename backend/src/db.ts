import { Pool } from 'pg'

export const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'Tragile',
  password: 'password',
  port: 5432,
})
