/* eslint-disable @typescript-eslint/no-var-requires */
const utils = require('../utils')

const TABLENAME = 'countries'
exports.up = function(knex) {
  return knex.schema.createTable(TABLENAME, function(table) {
    table.increments('id')
    table.string('code').unique().notNull()
    table.string('name').unique().notNull()
    utils.addTimestamps(knex, table)
  })
}

exports.down = function(knex) {
  return knex.schema.dropTableIfExists(TABLENAME)
}
