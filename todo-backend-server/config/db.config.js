'use strict'

const mysql = require('mysql2')

const dbConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'todo_db'
})

dbConnection.connect(error => {
    if (error) { throw error; }
    console.log("Database connected succesfully!")
})

module.exports = dbConnection;