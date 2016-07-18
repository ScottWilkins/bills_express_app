
exports.up = function(knex, Promise) {
  return knex.schema.createTable('bills', function(table){
    table.increments();
    table.string('user');
    table.integer('amount');
    table.timestamps();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('bills');
};
