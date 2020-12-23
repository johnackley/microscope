// inspired by https://www.shanestillwell.com/2018/06/29/setting-up-knex-project/

function addTimestamps(knex, table) {
  table
    .timestamp('created_at')
    .defaultTo(knex.fn.now())
    .notNull()
  table
    .timestamp('updated_at')
    .defaultTo(knex.fn.now())
    .notNull()
  table
    .timestamp('deleted_at')
}

function addTimestampsTrigger(knex, tablename) {
  return knex.raw(`
    CREATE TRIGGER update_${tablename}_updated_at
    BEFORE UPDATE ON ${tablename}
    FOR EACH ROW
    EXECUTE PROCEDURE update_modified_column()
  `)
}

function dropTimestampsTrigger(knex, tablename) {
  return knex.raw(`
    DROP TRIGGER IF EXISTS update_${tablename}_updated_at ON ${tablename}
  `)
}

module.exports = {
  addTimestamps,
  addTimestampsTrigger,
  dropTimestampsTrigger,
}
