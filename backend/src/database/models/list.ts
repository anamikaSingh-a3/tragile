import { Model } from 'objection';

import { Board } from './board';

export class List extends Model {
    public title: string | undefined
    public description: string | undefined
    public board: number | undefined

    static get tableName() {
        return 'list'
    }

    static get idColumn() {
        return 'list_id'
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['title'],
            properties: {
                list_id: { type: 'integer' },
                title: { type: 'string', minLength: 3 },
                description: { type: 'string' },
                board: { type: 'integer' }
            }
        }
    }
    static get relationMappings() {
        return {
            list_board: {
                relation: Model.HasManyRelation,
                modelClass: Board,
                join: {
                    from: 'list.board',
                    to: 'board.board_id'
                }
            }
        }
    }
}
