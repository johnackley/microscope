const TABLE = 'teams'
const seed = async function(knex) {
  // Deletes ALL existing entries
  await knex(TABLE)
    .del()
    .then(function() {
      // Inserts seed entries
      return knex(TABLE).insert([
        {
          id: 1,
          owner_id: 1,
          name: 'Shenango Wildcards',
          slug: 'shenango-wildcards',
          description: 'The Shenango Wildcards, playing SW, 5e, CoC, and assorted other RPGS since 2016',
          website: 'https://quantumogre.com/shenangowildcards',
          avatar: 'shenango-wildcards-avatar.png',
        },
      ])
    })

  await knex.raw('select setval(\'' + TABLE + '_id_seq\', max(id)) from ' + TABLE)
}
exports.seed = seed
