const { Pool } = require('pg')

const pool = new Pool ({
  user: "spice", 
  password: "spice",
  host: "localhost",
  port: 5432,
  database: "safety_app"

})

module.exports = pool;