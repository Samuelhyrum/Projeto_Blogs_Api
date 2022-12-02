const express = require('express');
const Login = require('./controllers/login');
const User = require('./controllers/user');
const ValidateUser = require('./middlewares/validateCreateUser');
// ...

const app = express();

app.use(express.json());
app.post('/login', Login);
app.post('/user', ValidateUser, User);
// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
