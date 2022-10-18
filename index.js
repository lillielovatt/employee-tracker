const inquirer = require("inquirer");
require("dotenv").config();
require("console.table");

const Model = require("./lib/Model");
const Department = require("./lib/Department");
const Roles = require("./lib/Roles");
const Employee = require("./lib/Employee");

// const Employee2 = new Employee();
// const Roles2 = new Roles();
// const Department2 = new Department();

// async function getAllDeptArray() {
//     const info = await Department2.allDeptArray();
//     // console.log(info);
//     // const newArray = info.map((el) => {
//     //     const obj = { name: el.name, value: el.id };
//     //     return obj;
//     // });
//     // // .then((token) => token);
//     // console.log("21", newArray);
//     // return newArray;
//     return info;
// }
// const x = Department2.allDeptArray();
// console.log(x);

// async function getAllRolesArray() {
//     const info = await Roles2.allRolesArray();
//     // console.log(info);
//     const newArray = info.map((el) => {
//         const obj = { name: el.title, value: el.id };
//         return obj;
//     });
//     return newArray;
// }

// async function getAllEmployeeArray() {
//     const info = await Employee2.allEmployeeArray();
//     const newArray = info.map((el) => {
//         const obj = { name: el.name, value: el.id };
//         return obj;
//     });
//     return newArray;
// }

const startQuestion = () => {
    return inquirer
        .prompt([
            {
                type: "list",
                name: "action",
                message: "What would you like to do?",
                choices: [
                    "View All Employees",
                    "Add Employee",
                    "Update Employee Role",
                    "View All Roles",
                    "Add Role",
                    "View All Departments",
                    "Add Department",
                    "Quit",
                ],
                default: "Quit",
            },
        ])
        .then((response) => {
            const answer = response.action;
            console.log("69", answer);
            if (answer === "Add Department") {
                AddDepartment();
            } else if (answer === "Add Role") {
                AddRole();
            } else if (answer === "Add Employee") {
                AddEmployee();
            } else if (answer === "View All Employees") {
                ViewAllEmployees();
            } else if (answer === "View All Roles") {
                ViewAllRoles();
            } else if (answer === "View All Departments") {
                ViewAllDepartments();
            } else if (answer === "Update Employee Role") {
                UpdateEmployeeRole();
            } else if (answer === "Quit") {
                Quit();
            }
        });
};















//             {
//                 type: "input",
//                 name: "add_department",
//                 message: "What is the name of the department?",
//                 when: (answers) => answers.action === "Add Department",
//             },
//             {
//                 type: "input",
//                 name: "add_role_name",
//                 message: "What is the name of the role?",
//                 when: (answers) => answers.action === "Add Role",
//             },
//             {
//                 type: "input",
//                 name: "add_role_salary",
//                 message: "What is the salary of the role?",
//                 when: (answers) => answers.action === "Add Role",
//             },
//             {
//                 type: "list",
//                 name: "add_role_dept",
//                 message: "Which department does the role belong to?",
//                 choices: getAllRolesArray(),
//                 when: (answers) => answers.action === "Add Role",
//             },
//             {
//                 type: "input",
//                 name: "add_employee_fn",
//                 message: "What is the employee's first name?",
//                 when: (answers) => answers.action === "Add Employee",
//             },
//             {
//                 type: "input",
//                 name: "add_employee_ln",
//                 message: "What is the employee's last name?",
//                 when: (answers) => answers.action === "Add Employee",
//             },
//             {
//                 type: "list",
//                 name: "add_employee_title",
//                 message: "What is the employee's role?",
//                 choices: getAllRolesArray(),
//                 when: (answers) => answers.action === "Add Employee",
//             },
//             {
//                 type: "list",
//                 name: "add_employee_manager",
//                 message: "Who is the employee's manager?",
//                 choices: [], //need this to be dynamically filled from SQL
//                 when: (answers) => answers.action === "Add Employee",
//             },
//             {
//                 type: "list",
//                 name: "update_employee_select",
//                 message: "Which employee's role do you want to update?",
//                 choices: [], //need this to be dynamically filled from SQL
//                 when: (answers) => answers.action === "Update Employee Role",
//             },
//             {
//                 type: "list",
//                 name: "update_employee_role",
//                 message:
//                     "Which role do you want to assign the selected employee?",
//                 choices: [], //need this to be dynamically filled from SQL
//                 when: (answers) => answers.action === "Update Employee Role",
//             },
//         ])
//         .then((response) => {
//             switch (response.action) {
//                 case "Quit":
//                     return;
//                 case "View All Employees":
//                     return;
//                 case "Update Employee Role":
//                     return;
//                 case "View All Roles":
//                     return;
//                 case "Add Role":
//                     return;
//                 case "View All Departments":
//                     return;
//                 case "Add Department":
//                     return;
//             }
//         });
// };

// // use switch statements above
// // need to create array and update it every time there's a new dept, or delete a dept. should also have access to number value for table
// // need array for roles and depts

// // employeeAdd();

startQuestion();
