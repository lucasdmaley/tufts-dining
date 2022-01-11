const Pool = require("pg").Pool;

const pool = new Pool({
    user: "me",
    password: "P0$tgre$pa$$w0rd",
    host: "localhost",
    port: 5432,
    database: "dining"
})

module.exports = pool;