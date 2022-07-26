const inquirer = require("inquirer");

// add employee
// update employee
// add role
// add department
const employeeAdd = () => {
    return inquirer.prompt([
        {
            type: "list",
            name: "action",
            message: "What would you like to do?",
            choices: ["View All Employees", "Add Employee", "Update Employee Role", "View All Roles", "Add Role", "View All Departments", "Add Department", "Quit"],
            default: "Quit"
        },
        {
            type: "input",
            name: "add_department",
            message: "What is the name of the department?",
            when: (answers) => answers.action === "Add Department"
            //need to console log that "input" was added to the database
        },
        {
            type: "input",
            name: "add_role_name",
            message: "What is the name of the role?",
            when: (answers) => answers.action === "Add Role"
        },
        {
            type: "input",
            name: "add_role_salary",
            message: "What is the salary of the role?",
            when: (answers) => answers.action === "Add Role"
        },
        {
            type: "list",
            name: "add_role_dept",
            message: "Which department does the role belong to?",
            choices: [], //need this to be dynamically filled from SQL 
            when: (answers) => answers.action === "Add Role"
        },

    ])
};

var mysql = require('mysql2');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "$Q2Gd$ye9D22dRp#",
    database: "employee_info"
});

con.connect(function (err) {
    if (err) throw err;
    //Select all customers and return the result object:
    con.query("SELECT * FROM roles", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
        console.table(result);
    });
});




