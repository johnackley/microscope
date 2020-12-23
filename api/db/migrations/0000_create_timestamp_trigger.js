// inspired by https://www.shanestillwell.com/2018/06/29/setting-up-knex-project/

exports.up = function(knex) {
  return knex.raw(`
CREATE OR REPLACE FUNCTION update_modified_column()
  RETURNS TRIGGER 
  LANGUAGE PLPGSQL
  AS
$$
BEGIN
  NEW.updated_at = now();
	RETURN NEW;
END;
$$
  `)
}

exports.down = function(knex) {
  return knex.raw(`
    DROP FUNCTION IF EXISTS update_modified_column();
  `)
}
