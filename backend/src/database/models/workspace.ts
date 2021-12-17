import Knex from 'knex';
import { Model } from 'objection';

import knexConfig from '../knexfile';
import { User } from './user';

const knexConnection = Knex(knexConfig)

Model.knex(knexConnection)

export class Workspace extends Model {
  public title: string | undefined;
  public type: string | undefined
  public description: string | undefined
  public created_by: number | undefined

  static get tableName() {
    return "workspace";
  }

  static get idColumn() {
    return 'workspace_id';
  }

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

