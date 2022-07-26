const con = require("../db/connection");
const Model = require("./Model");

class Employee extends Model {
    constructor(){
        super("employee");
    }
    addEmployee(firstName, lastName, role, manager){
        return con.query(`INSERT INTO ${this.tableName} (first_name, last_name, role_id, manager_id) VALUES (?,?,?,?)`, 
        [firstName, lastName, role, manager], function (err, result) {
            if (err) throw err;
            console.log(`Added ${firstName} ${lastName} to the database`);
        });
    }
    updateEmployee(value, id){
        return con.query(`UPDATE ${this.tableName} SET role_id=? WHERE id=?`, 
        [value,id], function (err, result) {
            if (err) throw err;
            console.log(`Updated employee's role`);
        });
    }
}

module.exports=Employee;