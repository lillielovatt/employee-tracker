const con = require("../db/connection");
const Model = require("./Model");

class Roles extends Model {
    constructor() {
        super("roles");
    }
    addRole(title, salary, department_id) {
        return con.query(
            `INSERT INTO ${this.tableName} (title,salary, department_id) VALUES (?,?,?)`,
            [title, salary, department_id],
            function (err, result) {
                if (err) throw err;
                console.log(`Added ${title} to the database`);
            }
        );
    }
    viewAllRoles() {
        return con.query(
            `SELECT roles.id, roles.title, roles.salary, department.name AS department 
        FROM department
        LEFT JOIN roles ON department.id = roles.department_id`,
            function (err, result) {
                if (err) throw err;
                // console.table(result);
            }
        );
    }
    allRolesArray() {
        return new Promise((resolve, reject) => {
            con.query(
                `SELECT roles.title, roles.id FROM roles`,
                (error, elements) => {
                    if (error) {
                        reject(error);
                    }
                    resolve(elements);
                }
            );
        });
    }
}

module.exports = Roles;
