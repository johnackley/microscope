/* eslint-disable @typescript-eslint/no-var-requires */
const utils = require('../utils')

const TABLENAME = 'users'
exports.up = function(knex) {
  return knex.schema
    .createTable(TABLENAME, function(table) {
      table.increments('id')
      table
        .string('email')
        .unique()
        .notNull()
      table.string('mobile')
      table.string('password').notNull()
      table.string('auth0Id')
      table.string('firstname')
      table.string('lastname')
      table.string('customer_ref')
      table.text('avatar')
      table
        .boolean('superadmin')
        .defaultTo(false)
        .notNull()
      utils.addTimestamps(knex, table)
    })
    .then(() => utils.addTimestampsTrigger(knex, TABLENAME))
}

exports.down = function(knex) {
  utils.dropTimestampsTrigger(knex, TABLENAME)
  return knex.schema.dropTableIfExists(TABLENAME)
}
