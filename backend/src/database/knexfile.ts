import { Knex } from 'knex';
import knexSnakeseMapper from 'objection';

import { HOST, PASSWORD, USER } from '../constants';

const knexConfig: Knex.Config = {
  client: 'postgres',
  connection: {
    database: 'Tragile_db',
    user: USER,
    password: PASSWORD,
    host: HOST
  },
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
export default knexConfig