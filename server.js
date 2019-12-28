const express = require('express');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3001;
const knex = require('./knex/knex.js');
const app = express();

// Middleware
app.use(bodyParser.json());


// Routes
app.get('/users', (req, res) => {
  knex.from('users')
  .select('id','first_name', 'last_name')
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

app.put('/users/:userid', (req, res) => {
  console.log(req.body, req.params.userid);
  knex('users')
  .where({ id: req.params.userid})
  .update({first_name: req.body.first_name, last_name: req.body.last_name})
  .then((item) => {
    res.json('ok');
  });
});

app.listen(PORT, () => {
  console.log('Server Running on PORT: ' + PORT);
});