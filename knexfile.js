// Update with your config settings.
const localPg = {
      host:'localhost', 
      port: 5432,
      user:     'postgres',
      password: 'postgres',
      database: 'churchs'
}
const pgUser = process.env.PGUSER || 'lspvolwvgmftbz'; 
const pgDb = process.env.PGDATABASE || 'daisvbqi23fhu';
const PgPass = process.env.PGPASSWORD || '3fb3a77727bedf74e3d530b2e02721b5dae873187851c1a8dfd93ef88ce0cd3f';
const prodConnection = `postgres://${pgUser}:${PgPass}@ec2-54-174-229-152.compute-1.amazonaws.com/${pgDb}`;

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
