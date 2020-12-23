// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config({ path: './' })
module.exports = {
  development: {
    debug: false,
    client: 'pg',
    connection: {
      host: 'localhost',
      port: 5432,
      user: 'microscope',
      password: 'microscope',
      database: 'microscope',
    },
    migrations: {
      directory: './db/migrations',
    },
    seeds: {
      directory: './db/seeds',
    },
  },
}
