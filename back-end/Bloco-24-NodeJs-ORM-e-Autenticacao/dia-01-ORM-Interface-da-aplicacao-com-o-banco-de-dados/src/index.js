const express = require('express');

const userController = require('./controllers/userController');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/user', userController);

app.listen(3000, () => console.log(`Ouvindo na porta 3000!`));