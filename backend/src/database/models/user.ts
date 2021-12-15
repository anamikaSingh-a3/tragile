import { Model, ModelOptions, QueryContext } from 'objection';

export class User extends Model {
    created_At: string | undefined
    updated_At: string | undefined

    static get tableName() {
      return "users";
    }
  
    $beforeInsert(queryContext: QueryContext): void | Promise<any> {
        this.created_At = new Date().toISOString();
    }
    $beforeUpdate(opt: ModelOptions, queryContext: QueryContext): void | Promise<any> {
        this.updated_At = new Date().toISOString();
    }
  
    static get jsonSchema() {
        return {
          type: 'object',
          required: ['user_id', 'name', 'email', 'password'],
          properties: {
            user_id: { type: 'integer' },
            name: { type: 'string', minLength: 3},
            username: { type: 'string'},
            email: { type: 'string'},
            password: { type: 'string'},
          }
        };
    }
}