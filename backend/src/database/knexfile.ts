// Update with your config settings.
import { DATABASE, PASSWORD, USER, HOST, PORT} from "../constants";
import knexSnakeseMapper from 'objection'

module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      database: DATABASE,
      user: USER,
      host: HOST,
      port: PORT,
      password: PASSWORD
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations',
    },
    seeds: {
      directory: './seeds'
    },
    ...knexSnakeseMapper
  },
};
