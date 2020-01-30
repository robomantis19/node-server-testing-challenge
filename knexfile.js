// Update with your config settings.

module.exports = {

  development: {
    client: 'postgresql',
    useNullAsDefault : true, 
    connection: {
      filename: './dev.sqlite3',
      host:'localhost', 
      port: 5432,
      database: 'churchs',
      user:     'postgres',
      password: 'postgres'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      host:'localhost', 
      port: 5432,
      database: 'churchs',
      user:     'postgres',
      password: 'postgres'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      host:'localhost', 
      port: 5432,
      user:     'postgres',
      password: 'postgres',
      database: 'churchs',
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './migrations'
    },
    seeds:{
      directory: './seeds'
    }
  }

};
