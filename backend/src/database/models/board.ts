import { Model } from 'objection';

import { Workspace } from './workspace';

export class Board extends Model {
  public title: string | undefined
  public visibility: string | undefined
  public workspace: number | undefined

  static get tableName() {
    return 'board'
  }

  static get idColumn() {
    return 'board_id'
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['title', 'workspace'],
      properties: {
        board_id: { type: 'integer' },
        title: { type: 'string', minLength: 3 },
        visibilty: { type: 'string' },
        workspace: { type: 'integer' }
      }
    }
  }
  static get relationMappings() {
    return {
      board_workspace: {
        relation: Model.HasManyRelation,
        modelClass: Workspace,
        join: {
          from: 'board.workspace',
          to: 'workspace.workspace_id'
        }
      }
    }
  }
}
