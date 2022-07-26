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
            console.log(`Added ${name} to the database`);
        });
    }
    allDeptArray(){
        const v=[];
        con.query(`SELECT * FROM ${this.tableName}`, function (err, result) {
            if (err) throw err;
            console.log(result);
            result.forEach(el=>{
                v.push(el.name, el.id);
            })
            console.log(v);
            // console.table(result);
        }); 
        return v;
    }
    
}

module.exports=Department;