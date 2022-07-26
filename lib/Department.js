const con = require("../db/connection");
const Model = require("./Model");

class Department extends Model {
    constructor(){
        super("department");
    }
    addDepartment(name){
        return con.query(`INSERT INTO ${this.tableName} (name) VALUES (?)`, name, function (err, result) {
            if (err) throw err;
            // console.table(result);
        });
    }
    
}

module.exports=Department;