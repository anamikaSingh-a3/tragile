import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('workspace', table => {
        table.increments('workspace_id').primary()
        table.string('title').notNullable()
        table.string('type').notNullable()
        table.string('description')
        table.integer('created_by').references('user_id').inTable('users')
        table.timestamps(true, true)
    })
}

export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTableIfExists('workspace')
}

