// Update with your config settings.
const localPg = {
      host:'localhost', 
      port: 5432,
      user:     'postgres',
      password: 'postgres',
      database: 'churchs'
}
const pgUser = process.env.PG_USER || 'postgres'; 
const pgDb = process.env.PG_DB || 'churchs';
const prodConnection = `postgres://${pgUser}@localhost/${pgDb}`;

module.exports = {

  development: {
    client: 'pg',
    useNullAsDefault : true, 
    connection: {
      host:'localhost', 
      port: 5432,
      database: 'churchs',
      user:     'postgres',
      password: 'postgres'
    }
  },

  staging: {
    client: 'pg',
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
    client: 'pg',
    connection: prodConnection,
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
