const express = require('express');
const knex = require('./../knex/knex.js');
const users = express.Router();



// Routes
users.get('/', (req, res) => {
  knex.from('users')
  .select('id','first_name', 'last_name')
  .then((items) => {
    res.json(items);
  });
});

users.post('/', (req, res) => {
  console.log(req.body);
  knex('users')
    .insert(req.body)
    .returning('id')
    .then((item) => {
      res.json(item); 
  })
});

users.put('/:userid', (req, res) => {
  console.log(req.body, req.params.userid);
  knex('users')
  .where({ id: req.params.userid})
  .update({first_name: req.body.first_name, last_name: req.body.last_name})
  .then((item) => {
    res.json('ok');
  });
});


module.exports = users;
