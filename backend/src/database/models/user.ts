import { Model } from 'objection';

export class User extends Model {

  public user_id: number | undefined
  public name: string | undefined
  public username: string | undefined
  public email: string | undefined
  public bio: string | undefined
  public password: string | undefined

  static get tableName() {
    return 'users'
  }
  static get idColumn() {
    return 'user_id'
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: ['name', 'email', 'password'],
      properties: {
        user_id: { type: 'integer' },
        name: { type: 'string', minLength: 3 },
        username: { type: 'string' },
        bio: { type: 'string' },
        email: { type: 'string' },
        password: { type: 'string' }
      }
    }
  }
}
