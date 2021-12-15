import { Model, ModelOptions, QueryContext } from 'objection';
import { User } from './user';
import Knex from 'knex';
import knexConfig from '../knexfile';
// const connection = require('../knexfile')
// import connection  from '../knexfile';
// const { Model } = require('objection')

const knexConnection = Knex(knexConfig.development.connection)

Model.knex(knexConnection)

export class Workspace extends Model {
  public title!: string;
  public type: string | undefined
  public description: string | undefined
  public created_by: number | undefined
  // public created_At!: string;
  // public updated_At!: string;

  static get tableName() {
    return "workspace";
  }

  static get idColumn() {
    return 'workspace_id';
  }
  // $beforeInsert(queryContext: QueryContext): void | Promise<any> {
  //   this.created_At = new Date().toISOString();
  // }
  // $beforeUpdate(opt: ModelOptions, queryContext: QueryContext): void | Promise<any> {
  //   this.updated_At = new Date().toISOString();
  // }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['title', 'type'],
      properties: {
        workspace_id: { type: 'integer' },
        title: { type: 'string', minLength: 3 },
        type: { type: 'string' },
        description: { type: 'string' },
        created_by: { type: 'integer' },
      }
    };
  }
  static get relationMappings() {
    return {
      workspace_user: {
        relation: Workspace.HasManyRelation,
        modelClass: User,
        join: {
          from: "workspace.created_by",
          to: "users.user_id",
        },
      },
    };
  }
}

