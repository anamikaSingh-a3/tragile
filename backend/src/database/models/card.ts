import { Model, ModelOptions, QueryContext } from 'objection'
import { Board } from './board'
import { List } from './list'
import { Workspace } from './workspace'
export class Card extends Model {
    public title: string | undefined
    public description: string | undefined
    public list: number | undefined

    static get tableName() {
        return 'card'
    }

    static get idColumn() {
        return 'card_id'
    }

    // $beforeInsert(queryContext: QueryContext): void | Promise<any> {
    //     this.created_At = new Date().toISOString();
    // }
    // $beforeUpdate(opt: ModelOptions, queryContext: QueryContext): void | Promise<any> {
    //     this.updated_At = new Date().toISOString();
    // }

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['title'],
            properties: {
                card_id: { type: 'integer' },
                title: { type: 'string', minLength: 3 },
                description: { type: 'string' },
                due_date: { type: 'string' },
                list: { type: 'integer' }
            }
        }
    }
    static get relationMappings() {
        return {
            card_list: {
                relation: Model.HasManyRelation,
                modelClass: List,
                join: {
                    from: 'card.list',
                    to: 'list.list_id'
                }
            }
        }
    }
}
