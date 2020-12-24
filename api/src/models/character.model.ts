import { JSONSchema, Model, ModelObject } from 'objection'
import { DBUtils } from '../db-utils'
import { Application } from '../declarations'
import { Scene, SceneModel } from './scene.model'
import { Timestampable } from './timestampable'

const _TABLENAME = 'characters'

export class CharacterModel extends Timestampable {
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
          to: 'scenes.id',
        },
      },
    }
  }
}

export type Character = ModelObject<CharacterModel>;

export default function (app: Application): typeof CharacterModel {
  DBUtils.tableCheck(app, _TABLENAME)
  return CharacterModel
}
