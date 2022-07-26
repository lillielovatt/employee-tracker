const con = require("../db/connection");
const Model = require("./Model");

class Roles extends Model {
    constructor(){
        super("roles");
    }
    addRole(title,salary){
        return con.query(`INSERT INTO ${this.tableName} (name) VALUES (?)`, name, function (err, result) {
            if (err) throw err;
            // console.table(result);
        });
    }
    
}

module.exports=Department;