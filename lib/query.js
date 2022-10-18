const db = require("../db/connection");

class allQueries {
    constructor(db) {
        this.db = db;
    }
    // views first because it will be easiest
    ViewAllRolesQuery() {
        // this way, it won't come back as undefined as happened when I did it
        return this.db
            .promise()
            .query(
                "SELECT role.id, role.title, department.name AS department, role.salary FROM role LEFT JOIN department on role.department_id = department.id;"
            );
    }

    ViewAllEmployeesQuery() {
        // stackoverflow, and lotsss of sample joins
        // gets managers as a column by matching with department on employee id
        return this.db
            .promise()
            .query(
                "SELECT employee.id, employee.first_name, employee.last_name, department.name AS department,  role.salary, role.title, CONCAT(manager.first_name, ' ', manager.last_name) AS manager FROM employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN department on role.department_id = department.id LEFT JOIN employee manager on manager.id = employee.manager_id;"
            );
    }

    ViewAllDepartmentsQuery() {
        // just need to select from the db, no joins needed
        return this.db
            .promise()
            .query("SELECT department.id, department.name FROM department;");
    }

    // adding to DB, more mutation than query but it's still a query officially
    AddNewEmployeeQuery(employeeInfo) {
        return this.db
            .promise()
            .query("INSERT INTO employee SET ?", employeeInfo);
    }

    AddNewRoleQuery(roleInfo) {
        return this.db.promise().query("INSERT INTO role SET ?", roleInfo);
    }

    AddNewDepartmentQuery(departmentInfo) {
        return this.db
            .promise()
            .query("INSERT INTO department SET ?", departmentInfo);
    }

    UpdateEmployeeRoleQuery(employeeID, roleID) {
        return this.db
            .promise()
            .query("UPDATE employee SET role_id = ? WHERE id = ?", [
                roleID,
                employeeID,
            ]);
    }
}

module.exports = new allQueries(db);
