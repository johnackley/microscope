/* eslint-disable @typescript-eslint/no-var-requires */
const bcrypt = require('bcrypt')
 
const TABLE = 'users'
const seed = async function(knex) {
  const saltRounds = 10
  function encrypt(cleartext) {
    return bcrypt.hashSync(cleartext, saltRounds)
  }
  // Deletes ALL existing entries
  await knex(TABLE)
    .del()
    .then(function() {
      // Inserts seed entries
      return knex(TABLE).insert([
        {
          id: 1,
          email: 'john@johnackley.com',
          mobile: '7246027400',
          password: encrypt('secret1,Squirrel'),
          firstname: 'John',
          lastname: 'Ackley',
          avatar: 'johnackley-avatar.png',
          superadmin: true,
        },
      ])
    })

  await knex.raw('select setval(\'' + TABLE + '_id_seq\', max(id)) from ' + TABLE)
}
exports.seed = seed
