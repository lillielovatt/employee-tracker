const mysql = require('mysql2');

const con = mysql.createConnection({
    host: "localhost",
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

con.connect(function (err) {
    if (err) throw err;
    //Select all customers and return the result object:
    console.log("db connected");
});

module.exports=con;