const Pool = require("pg").Pool; 

const pool = new Pool ({
  user: "postgres", 
  password: "spice",
  host: "localhost",
  port: 5432,
  database: safety_app

})

module.exports = pool;