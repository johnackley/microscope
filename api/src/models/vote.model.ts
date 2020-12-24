import { JSONSchema, Model, ModelObject } from 'objection'
import { DBUtils } from '../db-utils'
import { Application } from '../declarations'
import { Push, PushModel } from './push.model'
import { Timestampable } from './timestampable'

const _TABLENAME = 'votes'

export class VoteModel extends Timestampable {
  static tableName = _TABLENAME;

  id!: number;
  name!: string;
  push!: Push;

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
      push: {
        relation: Model.BelongsToOneRelation,
        modelClass: PushModel,
        join: {
          from: _TABLENAME + '.push_id',
          to: 'pushes.id',
        },
      },
    }
  }
}

export type Vote = ModelObject<VoteModel>;

export default function (app: Application): typeof VoteModel {
  DBUtils.tableCheck(app, _TABLENAME)
  return VoteModel
}
