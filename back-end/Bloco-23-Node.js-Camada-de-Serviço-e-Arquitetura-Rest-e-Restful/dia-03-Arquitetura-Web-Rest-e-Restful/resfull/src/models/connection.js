const dbMysql = require('mysql2/promise');

const dbM = dbMysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'rest_exercicios',
});

module.exports = dbM;
