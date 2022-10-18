const { prompt } = require("inquirer");
require("dotenv").config();
require("console.table");
const queries = require("./lib/query");

const startQuestion = () => {
    prompt([
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
    ]).then((response) => {
        const answer = response.action;
        if (answer === "Add Department") {
            AddDepartment();
        } else if (answer === "Add Role") {
            AddRole();
        } else if (answer === "Add Employee") {
            AddEmployee();
        } else if (answer === "View All Roles") {
            ViewAllRoles();
        } else if (answer === "View All Employees") {
            ViewAllEmployees();
        } else if (answer === "View All Departments") {
            ViewAllDepartments();
        } else if (answer === "Update Employee Role") {
            UpdateEmployeeRole();
        } else if (answer === "Quit") {
            Quit();
        }
    });
};

const ViewAllRoles = () => {
    queries
        .ViewAllRolesQuery()
        .then(([res]) => {
            const roles = res;
            console.table(roles);
        })
        // start over again after displaying correct info
        .then(() => startQuestion());
};

const ViewAllEmployees = () => {
    queries
        .ViewAllEmployeesQuery()
        .then(([res]) => {
            const employees = res;
            console.table(employees);
        })
        // start over after displaying correct info
        .then(() => startQuestion());
};

const ViewAllDepartments = () => {
    queries
        .ViewAllDepartmentsQuery()
        .then(([res]) => {
            const departments = res;
            console.table(departments);
        })
        // start over after displaying correct info
        .then(() => startQuestion());
};

const AddDepartment = () => {
    prompt([
        {
            type: "input",
            name: "name",
            message: "Please enter department's name.",
            validate: (name) => {
                if (typeof name === "string") {
                    return true;
                } else {
                    console.log("You need to enter a valid name.");
                    return false;
                }
            },
        },
    ]).then((res) => {
        const departmentName = res;
        queries
            .AddNewDepartmentQuery(departmentName)
            .then(console.log(departmentName, " was added."))
            .then(() => startQuestion());
    });
};

const AddRole = () => {
    queries
        .ViewAllDepartmentsQuery()
        .then(([res]) => {
            const depts = res;
            const choices = depts.map((el) => ({
                name: el.name,
                value: el.id,
            }));

            prompt([
                {
                    type: "input",
                    name: "name",
                    message: "What's the name of the role?",
                },
                {
                    type: "input",
                    name: "salary",
                    message: "What's the salary of the role?",
                    validate: (salary) => {
                        if (!isNaN(salary) && salary) {
                            return true;
                        } else {
                            console.log("You need to enter a valid salary.");
                            return false;
                        }
                    },
                },
                {
                    type: "list",
                    name: "deptId",
                    message: "Which department does the role belong to?",
                    choices: choices,
                },
            ]);
        })
        .then((newRole) => {
            queries
                .AddNewRoleQuery(newRole)
                .then(console.log(newRole, " was added."))
                .then(() => startQuestion());
        });
};

const AddEmployee = () => {
    prompt([
        {
            type: "input",
            name: "firstName",
            message: "Please enter employee's first name.",
            validate: (firstName) => {
                if (typeof firstName === "string") {
                    return true;
                } else {
                    console.log("You need to enter a valid name.");
                    return false;
                }
            },
        },
        {
            type: "input",
            name: "lastName",
            message: "Please enter employee's last name.",
            validate: (lastName) => {
                if (typeof lastName === "string") {
                    return true;
                } else {
                    console.log("You need to enter a valid name.");
                    return false;
                }
            },
        },
    ]).then((res) => {
        const firstName = res.firstName;
        const lastName = res.lastName;

        queries.ViewAllRolesQuery().then(([res]) => {
            let roles = res;
            const choices = roles.map((el) => ({
                name: el.title,
                value: el.id,
            }));

            prompt({
                type: "list",
                name: "roleID",
                message: "What's the employee's role?",
                choices: choices,
            }).then((res) => {
                const roleID = res.roleID;
                queries.ViewAllEmployeesQuery().then(([res]) => {
                    const employees = res;
                    const choices = employees.map((el) => ({
                        name: `${el.first_name} ${el.last_name}`,
                        value: el.id,
                    }));

                    prompt({
                        type: "list",
                        name: "managerID",
                        message: "Who is their manager?",
                        choices: choices,
                    })
                        .then((res) => {
                            const employee = {
                                manager_id: res.managerID,
                                role_id: roleID,
                                first_name: firstName,
                                last_name: lastName,
                            };

                            queries.AddNewEmployeeQuery(employee);
                        })
                        .then(() => console.log(firstName, " was added."))
                        .then(() => startQuestion());
                });
            });
        });
    });
};

const UpdateEmployeeRole = () => {
    queries.AddNewEmployeeQuery().then(([res]) => {
        const employees = res;
        const choices = employees.map((el) => ({
            name: `${el.first_name} ${el.last_name}`,
            value: el.id,
        }));

        prompt({
            type: "list",
            name: "employeeID",
            message: "Which employee's role do you want to update?",
            choices: choices,
        }).then((res) => {
            const employeeID = res.employeeID;

            queries.ViewAllRolesQuery().then(([res]) => {
                let roles = res;
                const choices = roles.map((el) => ({
                    name: el.title,
                    value: el.id,
                }));

                prompt({
                    type: "list",
                    name: "roleID",
                    message: "Which role do you want to give this employee?",
                    choices: choices,
                })
                    .then((res) =>
                        queries.UpdateEmployeeRoleQuery(employeeID, res.roleID)
                    )
                    .then(console.log("The employee's role was updated."))
                    .then(() => startQuestion());
            });
        });
    });
};

const Quit = () => {
    process.exit();
};

// initially start the program when "node index" is called
startQuestion();
