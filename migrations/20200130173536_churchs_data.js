
exports.up = function(knex) {
  return knex.schema
  .createTable('SBCs', tbl => { 
      tbl.increments();
      tbl.string('count', 128).notNullable()
      tbl.string('City').notNullable()
      tbl.string('State').notNullable()
      tbl.string('Attend').notNullable()
      tbl.string('Church').notNullable()
  })
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('SBCs');
};
