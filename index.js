const inquirer = require("inquirer");
require("dotenv").config();
const cTable = require('console.table');
const Model = require("./lib/Model");
const Department = require("./lib/Department");
const Roles = require("./lib/Roles");
const Employee = require("./lib/Employee");

const Employee2 = new Employee();
const Roles2 = new Roles();
const Department2 = new Department();

// Department2.viewAll();
// Roles2.viewAllRoles();

console.log("16",Department2.allDeptArray());

// Employee2.selectAll();
// Employee2.addEmployee("Maxwell","Neuer",3);
// Employee2.selectAll();




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
        {

        }

    ])
};






