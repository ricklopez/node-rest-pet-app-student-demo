const express = require('express');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3001;
const knex = require('./knex/knex.js');
const app = express();

app.use(bodyParser.json());



app.get('/users', (req, res) => {
  knex.from('users')
  .select('first_name', 'last_name')
  .then((items) => {
    res.json(items);
  });
});

app.post('/users', (req, res) => {
  console.log(req.body);
  knex('users')
    .insert(req.body)
    .returning('id')
    .then((item) => {
      res.json(item); 
  })
});

app.put('/users', (req, res) => {
  knex('users')
  .where({ id: 4 })
  .update({ last_name: 'lopez'})
  .then((item) => {
    res.json('ok');
  });
});

app.listen(PORT, () => {
  console.log('Server Runnin on PORT' + PORT);
});