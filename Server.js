const ex = require("express")
const sql = require("mysql2")


const app = ex();



app.listen(3000, ()=>{
    console.log("coiso o coso")
})


const mysql_config = require('./mysql_config')

const connection = sql.createConnection(mysql_config)