const mysql = require('mysql2');
require("dotenv").config();

const con = mysql.createConnection({
    host: "localhost",
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

// console.log("you connected now");

// const con = mysql.createPool({
//     connectionLimit:10,
//     host: "localhost",
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_NAME
// });

// con.connect(function (err) {
//     if (err) throw err;
//     //Select all customers and return the result object:
//     console.log("db connected");
// });



// SelectAllElements = () =>{
//     return new Promise((resolve, reject)=>{
//         con.query('SELECT * FROM department',  (error, elements)=>{
//             if(error){
//                 return reject(error);
//             }
//             return resolve(elements);
//         });
//     });
// };

// SelectAllElements().then(el=>console.log(el));

module.exports=con;