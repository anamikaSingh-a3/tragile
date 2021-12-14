// Update with your config settings.
import knexSnakeseMapper from 'objection'

module.exports = {
  development: {
    client: 'postgresql',
    connection: {
      database: 'Tragile_database',
      user: 'anamikasingh',
      password: null
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
}
