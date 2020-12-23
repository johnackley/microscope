/* eslint-disable @typescript-eslint/no-var-requires */
const utils = require('../utils')

const TABLENAME = 'states'
exports.up = function(knex) {
  return knex.schema.createTable(TABLENAME, function(table) {
    table.increments('id')
    table
      .string('code')
      .unique()
      .notNull()
    table
      .string('name')
      .unique()
      .notNull()
    table
      .integer('country_id')
      .references('countries.id')
      .notNull()
    utils.addTimestamps(knex, table)
  })
}

exports.down = function(knex) {
  return knex.schema.dropTableIfExists(TABLENAME)
}
