import { JSONSchema, ModelObject } from 'objection'
import { DBUtils } from '../db-utils'
import { Application } from '../declarations'
import { Timestampable } from './timestampable'

const _TABLENAME = 'users'

export class UserModel extends Timestampable {
  static tableName = _TABLENAME

  id!: number
  email!: string
  mobile : string | undefined = undefined
  firstname : string | undefined = undefined
  lastname : string | undefined = undefined
  password : string | undefined = undefined
  auth0Id : string | undefined = undefined

  static get jsonSchema(): JSONSchema {
    return {
      type: 'object',
      required: ['password'],

      properties: {
        email: { type: ['string', 'null'] },
        mobile: { type: ['string', 'null'] },
        firstname: { type: ['string', 'null'] },
        lastname: { type: ['string', 'null'] },
        password: { type: 'string' },
        auth0Id: { type: ['string', 'null'] },
      },
    }
  }

  static get relationMappings() : any {
    return {}
  }
}

export type User = ModelObject<UserModel>

export default function (app: Application): typeof UserModel {
  DBUtils.tableCheck(app, _TABLENAME)
  return UserModel
}
