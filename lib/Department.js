const con = require("../db/connection");
const Model = require("./Model");

class Department extends Model {
    constructor() {
        super("department");
    }
    addDepartment(name) {
        return con.query(
            `INSERT INTO ${this.tableName} (name) VALUES (?)`,
            name,
            function (err, result) {
                if (err) throw err;
                console.log(`Added ${name} to the database`);
            }
        );
    }
    allDeptArray() {
        return con.query(
            `SELECT * FROM ${this.tableName}`,
            function (err, result) {
                if (err) throw err;
                console.log("23", result);
                return result;
            }
        );
    }
}

module.exports = Department;
