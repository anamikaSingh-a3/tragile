import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('card', table => {
        table.increments('card_id').primary()
        table.string('title').notNullable()
        table.string('description')
        table.string('due_date')
        table.integer('list').references('list_id').inTable('list')
        table.timestamps(true, true)
    })
}

export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTableIfExists('card')
}

