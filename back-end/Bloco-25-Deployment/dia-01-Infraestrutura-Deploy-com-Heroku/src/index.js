const express = require('express');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use('/', (_req, res) => res.send('<h1>Hello Word</h1>'));

app.listen(PORT, () => console.log(`rodando na porta ${PORT}`));