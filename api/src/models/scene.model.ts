import { JSONSchema, Model, ModelObject } from 'objection'
import { DBUtils } from '../db-utils'
import { Application } from '../declarations'
import { Event, EventModel } from './event.model'
import { Timestampable } from './timestampable'

const _TABLENAME = 'scenes'

export class SceneModel extends Timestampable {
  static tableName = _TABLENAME;

  id!: number;
  name!: string;
  event!: Event;

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
      event: {
        relation: Model.BelongsToOneRelation,
        modelClass: EventModel,
        join: {
          from: _TABLENAME + '.event_id',
          to: 'events.id',
        },
      },
    }
  }
}

export type Scene = ModelObject<SceneModel>;

export default function (app: Application): typeof SceneModel {
  DBUtils.tableCheck(app, _TABLENAME)
  return SceneModel
}
