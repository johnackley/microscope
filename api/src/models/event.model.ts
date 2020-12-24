import { JSONSchema, Model, ModelObject } from 'objection'
import { DBUtils } from '../db-utils'
import { Application } from '../declarations'
import { Period, PeriodModel } from './period.model'
import { Timestampable } from './timestampable'

const _TABLENAME = 'events'

export class EventModel extends Timestampable {
  static tableName = _TABLENAME;

  id!: number;
  name!: string;
  period!: Period;

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
      period: {
        relation: Model.BelongsToOneRelation,
        modelClass: PeriodModel,
        join: {
          from: _TABLENAME + '.period_id',
          to: 'periods.id',
        },
      },
    }
  }
}

export type Event = ModelObject<EventModel>;

export default function (app: Application): typeof EventModel {
  DBUtils.tableCheck(app, _TABLENAME)
  return EventModel
}
