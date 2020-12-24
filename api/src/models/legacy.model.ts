import { JSONSchema, Model, ModelObject } from 'objection'
import { DBUtils } from '../db-utils'
import { Application } from '../declarations'
import { Pass, PassModel } from './pass.model'
import { Timestampable } from './timestampable'

const _TABLENAME = 'legacies'

export class LegacyModel extends Timestampable {
  static tableName = _TABLENAME;

  id!: number;
  name!: string;
  pass!: Pass;

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
      pass: {
        relation: Model.BelongsToOneRelation,
        modelClass: PassModel,
        join: {
          from: _TABLENAME + '.pass_id',
          to: 'passes.id',
        },
      },
    }
  }
}

export type Legacy = ModelObject<LegacyModel>;

export default function (app: Application): typeof LegacyModel {
  DBUtils.tableCheck(app, _TABLENAME)
  return LegacyModel
}
