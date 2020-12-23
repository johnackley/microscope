import { JSONSchema, Model, ModelObject } from 'objection'
import { DBUtils } from '../db-utils'
import { Application } from '../declarations'
import { Timestampable } from './timestampable'
import { User, UserModel } from './user.model'

const _TABLENAME = 'teams'

export class OrgModel extends Timestampable {
  static tableName = _TABLENAME

  id!: number
  owner!: User
  name!: string
  slug: string | undefined = undefined
  description: string | undefined = undefined
  website: string | undefined = undefined
  avatar: string | undefined = undefined

  static get jsonSchema() : JSONSchema {
    return {
      type: 'object',
      required: ['name'],
      properties: {
        name: { type: 'string' },
        slug: { type: 'string' },
        description: { type: 'string' },
        website: { type: 'string' },
        avatar: { type: 'string' },
      },
    }
  }

  
  static get relationMappings() : any {
    return {
      owner: {
        relation: Model.BelongsToOneRelation,
        modelClass: UserModel,
        join: {
          from: 'teams.owner_id',
          to: 'users.id',
        },
      },
    }
  }

}

export type Org = ModelObject<OrgModel>

export default function (app: Application): typeof OrgModel {
  DBUtils.tableCheck(app, _TABLENAME)
  return OrgModel
}
