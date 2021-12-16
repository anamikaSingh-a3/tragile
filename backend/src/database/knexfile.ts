// Update with your config settings.
import { Knex, knex } from 'knex';
import knexFactory from 'knex';
import knexSnakeseMapper, { Model } from 'objection'
import { DATABASE, HOST, PASSWORD, USER } from '../constants'

const knexConfig: Knex.Config = {
  // development: {
  client: 'postgres',
  connection: {
    database: 'Tragile_database',
    user: USER,
    password: PASSWORD,
    host: HOST
  },
    // connection: `postgres://postgres:${PASSWORD}@${HOST}/${DATABASE}`,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    },
    seeds: {
      directory: './seeds'
    },
    ...knexSnakeseMapper
  }
// }
export default knexConfig