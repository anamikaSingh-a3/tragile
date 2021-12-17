import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('list', table => {
        table.increments('list_id').primary()
        table.string('title').notNullable()
        table.string('description')
        table.integer('board').references('board_id').inTable('board')
        table.timestamps(true, true)
    })
}

export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTableIfExists('list')
}

