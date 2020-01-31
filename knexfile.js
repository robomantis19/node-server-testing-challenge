// Update with your config settings.
const localPg = {
      host:'localhost', 
      port: 5432,
      user:     'postgres',
      password: 'postgres',
      database: 'churchs'
}
const pgUser = process.env.PGUSER || 'postgres'; 
const pgDb = process.env.PGDATABASE || 'churchs';
const PgPass = process.env.PGPASSWORD || 'postgres';
const prodConnection = `postgres://${pgUser}:${PgPass}@localhost/${pgDb}`;

module.exports = {

  development: {
    client: 'pg',
    useNullAsDefault : true, 
    connection: {
      filename: './churchs.db3',
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
