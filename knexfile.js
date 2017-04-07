// Update with your config settings.

module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      database: 'pizza_shack'
    },
    migrations: {
      tabeleName: 'knex_migrations',
      directory: __dirname + '/db/migrations'
    },
    seeds: {
      directory: __dirname+ '/db/seeds'
    }
  }

};
