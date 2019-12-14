
exports.seed = function(knex) {
  // Deletes ALL existing entries
  
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {first_name: 'jane', last_name: 'doe'},
        {first_name: 'john', last_name: 'cool'},
        {first_name: 'david', last_name: 'smith'}
      ]);
    })
  .then(function(){
    return knex('pets').del()
    .then(function () {
      // Inserts seed entries
      return knex('pets').insert([
        {id: 1, name: 'athena', pet_type: 'dog'},
        {id: 2, name: 'mona lisa', pet_type: 'dog'},
        {id: 3, name: 'scruff', pet_type: 'cat'}
      ]);
    });
  });
  
};