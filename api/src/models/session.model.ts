import { JSONSchema, Model, ModelObject } from 'objection'
import { DBUtils } from '../db-utils'
import { Application } from '../declarations'
import { Team, TeamModel } from './team.model'
import { Timestampable } from './timestampable'

const _TABLENAME = 'sessions'

export class SessionModel extends Timestampable {
  static tableName = _TABLENAME;

  id!: number;
  name!: string;
  team!: Team;

  static get jsonSchema() : JSONSchema {
    return {
      type: 'object',
      required: ['name'],
      properties: {
        name: { type: 'string' },
      },
    }
  }

  static get relationMappings() : any {
    return {
      team: {
        relation: Model.BelongsToOneRelation,
        modelClass: TeamModel,
        join: {
          from: _TABLENAME + '.team_id',
          to: 'teams.id',
        },
      },
    }
  }
}

export type Session = ModelObject<SessionModel>;

export default function (app: Application): typeof SessionModel {
  DBUtils.tableCheck(app, _TABLENAME)
  return SessionModel
}
