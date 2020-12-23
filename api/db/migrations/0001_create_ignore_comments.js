// inspired by https://www.shanestillwell.com/2018/06/29/setting-up-knex-project/

exports.up = function(knex) {
  return knex.raw(`
    COMMENT ON TABLE knex_migrations IS E'@omit';
    COMMENT ON SEQUENCE knex_migrations_id_seq IS E'@omit';
    COMMENT ON TABLE knex_migrations_lock IS E'@omit';
    COMMENT ON SEQUENCE knex_migrations_lock_index_seq IS E'@omit';
  `)
}

exports.down = function(knex) {
  return knex.raw(`
    COMMENT ON TABLE knex_migrations IS E'';
    COMMENT ON SEQUENCE knex_migrations_id_seq IS E'';
    COMMENT ON TABLE knex_migrations_lock IS E'';
    COMMENT ON SEQUENCE knex_migrations_lock_index_seq IS E'';
  `)
}
