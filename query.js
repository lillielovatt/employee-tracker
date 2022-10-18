//  all of my SQL queries

// select * from department
// select * from roles
// select * from employees and then need to join on roles 

// insert into [tablename] (all params,more params) values(?,?)
// ^for employee, role, dept

// update [tablename] set [param-to-update]=? where [unique id]=?

const con = require("./db/connection");

con.query







    con.query("SELECT * FROM roles", function (err, result, fields) {
        if (err) throw err;
        // console.log(result);
        // console.table(result);
    });
