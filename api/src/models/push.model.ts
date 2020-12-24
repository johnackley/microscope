import { JSONSchema, Model, ModelObject } from 'objection'
import { DBUtils } from '../db-utils'
import { Application } from '../declarations'
import { Scene, SceneModel } from './scene.model'
import { Timestampable } from './timestampable'

const _TABLENAME = 'pushes'

export class PushModel extends Timestampable {
  static tableName = _TABLENAME;

  id!: number;
  name!: string;
  scene!: Scene;

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
      scene: {
        relation: Model.BelongsToOneRelation,
        modelClass: SceneModel,
        join: {
          from: _TABLENAME + '.scene_id',
          to: 'scenees.id',
        },
      },
    }
  }
}

export type Push = ModelObject<PushModel>;

export default function (app: Application): typeof PushModel {
  DBUtils.tableCheck(app, _TABLENAME)
  return PushModel
}
