const TABLE = 'countries'
const seed = async function(knex) {
  // Deletes ALL existing entries
  await knex(TABLE)
    .del()
    .then(function() {
      // Inserts seed entries
      return knex(TABLE).insert([
        {
          id: 1,
          code: 'US',
          name: 'United States',
        },
      ])
    })

  await knex.raw('select setval(\'' + TABLE + '_id_seq\', max(id)) from ' + TABLE)
}
exports.seed = seed
