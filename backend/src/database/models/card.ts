import { Model } from 'objection';

import { List } from './list';

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
