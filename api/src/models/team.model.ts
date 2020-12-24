import { JSONSchema, Model, ModelObject } from 'objection'
import { DBUtils } from '../db-utils'
import { Application } from '../declarations'
import { Timestampable } from './timestampable'
import { User, UserModel } from './user.model'

const _TABLENAME = 'teams'
const _MEMBERS_TABLENAME = 'team_members'

export class TeamModel extends Timestampable {
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
          from: _TABLENAME + '.owner_id',
          to: 'users.id',
        },
      },
      members: {
        relation: Model.ManyToManyRelation,
        modelClass: UserModel,
        join: {
          from: 'teams.id',
          through: {
            from: _MEMBERS_TABLENAME + '.team_id',
            to: _MEMBERS_TABLENAME + '.user_id',
            // extra: ['extra'],
          },
          to: 'users.id',
        },
      },
    }
  }
}

export type Team = ModelObject<TeamModel>

export default function (app: Application): typeof TeamModel {
  DBUtils.tableCheck(app, _TABLENAME)
  return TeamModel
}
