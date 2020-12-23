/* eslint-disable @typescript-eslint/no-var-requires */
const utils = require('../utils')

const TABLENAME = 'teams'
exports.up = function(knex) {
  return knex.schema
    .createTable(TABLENAME, function(table) {
      table.increments('id')
      table
        .integer('owner_id')
        .references('users.id')
        .notNull()
      table
        .string('name')
        .unique()
        .notNull()
      table
        .string('slug')
        .unique()
        .notNull()
      table.text('description')
      table.text('avatar')
      table.text('website')
      utils.addTimestamps(knex, table)
    })
    .then(() => utils.addTimestampsTrigger(knex, TABLENAME))
}

exports.down = function(knex) {
  utils.dropTimestampsTrigger(knex, TABLENAME)
  return knex.schema.dropTableIfExists(TABLENAME)
}
