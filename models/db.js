const mysql = require("mysql")
const dbConfig = require("../config/db.config")

//create a connection to the database

const db = mysql.createConnection({
    host:dbConfig.HOST,
    user:dbConfig.USER,
    password:dbConfig.PASSWORD,
    database:dbConfig.DB
})

//Open the MYSQL connection
db.connect(error=>{
    if(error) throw error
    console.log("successfully connected to the database");
})

module.exports= db