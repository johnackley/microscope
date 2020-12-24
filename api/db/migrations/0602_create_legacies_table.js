
/* eslint-disable @typescript-eslint/no-var-requires */
const utils = require('../utils')

const TABLENAME = 'legacies'
exports.up = function(knex) {
  return knex.schema
    .createTable(TABLENAME, function(table) {
      table.increments('id')
      table
        .integer('pass_id')
        .references('passes.id')
        .notNull()
      table
        .string('name')
        .unique()
        .notNull()
      utils.addTimestamps(knex, table)
    })
    .then(() => utils.addTimestampsTrigger(knex, TABLENAME))
}

exports.down = function(knex) {
  utils.dropTimestampsTrigger(knex, TABLENAME)
  return knex.schema.dropTableIfExists(TABLENAME)
}
