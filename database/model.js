const mysql       = require('mysql');
const security    = require('../config/local.json');

const con = mysql.createConnection({
  host: security.config.host,
  user: security.config.user,
  password:security.config.password,
  database: security.config.database
});

con.connect
exports.con = con;
