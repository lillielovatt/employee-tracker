
const con = require("../db/connection");

class Model{
    constructor(tableName){
        this.tableName=tableName;
    }
    selectAll(){
        return con.query(`SELECT * FROM ${this.tableName}`, function (err, result) {
            if (err) throw err;
            console.table(result);
        });
    }
}

module.exports=Model;