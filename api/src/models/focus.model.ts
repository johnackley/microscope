import { JSONSchema, Model, ModelObject } from 'objection'
import { DBUtils } from '../db-utils'
import { Application } from '../declarations'
import { Session, SessionModel } from './session.model'
import { Timestampable } from './timestampable'

const _TABLENAME = 'passes'

export class PassModel extends Timestampable {
  static tableName = _TABLENAME;

  id!: number;
  name!: string;
  session!: Session;

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
      session: {
        relation: Model.BelongsToOneRelation,
        modelClass: SessionModel,
        join: {
          from: _TABLENAME + '.session_id',
          to: 'sessions.id',
        },
      },
    }
  }
}

export type Pass = ModelObject<PassModel>;

export default function (app: Application): typeof PassModel {
  DBUtils.tableCheck(app, _TABLENAME)
  return PassModel
}
