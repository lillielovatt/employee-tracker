const inquirer = require("inquirer");
require("dotenv").config();
const cTable = require('console.table');
const Model = require("./lib/Model");
const Department = require("./lib/Department");

const Employee = new Model("employee");
const Department1 = new Department();
Department1.selectAll();
Department1.addDepartment("Math");
Department1.selectAll();


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






