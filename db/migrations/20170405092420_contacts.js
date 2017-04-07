
exports.up = function(knex, Promise) {
  return knex.schema
    .createTable('contacts', function(table){
      table.increments();
      table.string('name').notNullable();
      table.string('email').notNullable();
      table.string('phone').notNullable();
      table.string('message').notNullable()
    })
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTable('contacts')
};
