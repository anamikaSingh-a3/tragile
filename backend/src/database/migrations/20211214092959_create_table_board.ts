import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('board', table => {
        table.increments('board_id')
        table.string('title').notNullable()
        table.string('visibility')
        table.integer('workspace').references('workspace_id').inTable('workspace')
        table.timestamps(true, true)
    })
}

export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTableIfExists('board')

}

