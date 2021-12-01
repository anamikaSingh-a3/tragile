import { Pool } from 'pg'
import { DATABASE, HOST, PASSWORD, USER } from './constants'

export const pool = new Pool({
  user: USER,
  host: HOST,
  database: DATABASE,
  password: PASSWORD,
  port: 5432,
})
