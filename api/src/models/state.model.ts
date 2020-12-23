import { JSONSchema, Model, ModelObject } from 'objection'
import { DBUtils } from '../db-utils'
import { Application } from '../declarations'
import { Country, CountryModel } from './country.model'
import { Timestampable } from './timestampable'

const _TABLENAME = 'states'

export class StateModel extends Timestampable {
  static tableName = _TABLENAME;

  id!: number;
  code!: string;
  name!: string;
  country!: Country;

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
    return {
      country: {
        relation: Model.BelongsToOneRelation,
        modelClass: CountryModel,
        join: {
          from: 'states.country_id',
          to: 'countries.id',
        },
      },
    }
  }
}

export type State = ModelObject<StateModel>;

export default function (app: Application): typeof StateModel {
  DBUtils.tableCheck(app, _TABLENAME)
  return StateModel
}
