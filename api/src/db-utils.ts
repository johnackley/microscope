import Knex from 'knex'
import { Application } from './declarations'

export class DBUtils {
  static async tableCheck (app: Application, tablename: string) : Promise<boolean> {
    const db: Knex = app.get('knex')
    const exists = await db.schema.hasTable(tablename)
    if (!exists) {
      console.error('Missing ' + tablename + ' table - try running db migrations')
    }
    return new Promise((resolve) => {
      resolve(exists)
    })
  }
}