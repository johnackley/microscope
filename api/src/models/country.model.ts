import { JSONSchema, ModelObject } from 'objection'
import { DBUtils } from '../db-utils'
import { Application } from '../declarations'
import { Timestampable } from './timestampable'

const _TABLENAME = 'countries'

export class CountryModel extends Timestampable {
  static tableName = _TABLENAME

  id!: number
  code!: string
  name!: string

  static get jsonSchema() : JSONSchema {
    return {
      type: 'object',
      required: ['code', 'name'],
      properties: {
        code: { type: 'string' },
        name: { type: 'string' },
      },
    }
  }

  static get relationMappings() : any {
    return {}
  }
}

export type Country = ModelObject<CountryModel>

export default function (app: Application): typeof CountryModel {
  DBUtils.tableCheck(app, _TABLENAME)
  return CountryModel
}
