
exports.up = function(knex) {
  
  return knex.schema
    .createTable('users', function(table){
      table.increments('id');
      table.string('first_name', 255).notNullable();
      table.string('last_name', 255).notNullable();
    })
    .createTable('pets', function(table){
      table.increments('id');
      table.enu('pet_type', ['dog', 'cat'], {useNative: true, enumName: 'pet_type'});
      table.string('name', 255).notNullable();
    }); 
};

exports.down = function(knex) {
  return knex.schema
    .dropTable("pets")
    .dropTable("users")
};
