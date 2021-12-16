import { Model, ModelOptions, QueryContext } from 'objection'
import { Workspace } from './workspace'
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

  // $beforeInsert(queryContext: QueryContext): void | Promise<any> {
  //     this.created_At = new Date().toISOString();
  // }
  // $beforeUpdate(opt: ModelOptions, queryContext: QueryContext): void | Promise<any> {
  //     this.updated_At = new Date().toISOString();
  // }

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
