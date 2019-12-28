const express = require('express');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3001;
const userRouter = require('./routes/users.routes');
const app = express();

// Middleware
app.use(bodyParser.json());


// Routes

// User.Routes
app.use("/users",userRouter);



app.listen(PORT, () => {
  console.log('Server Running on PORT: ' + PORT);
});