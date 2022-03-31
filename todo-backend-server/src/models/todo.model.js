'use strict'

let dbConnection = require('./../../config/db.config')

class Todo {
    constructor(todo) {
        this.description = todo.description
        this.createdAt = new Date()
        this.updatedAt = new Date()
    }

    static create(newTodo, result) {
        dbConnection.query(
            'INSERT INTO todos SET description=?, created_at=?, updated_at=?', 
            [newTodo.description, newTodo.createdAt, newTodo.updatedAt],
            (error, queryResult) => result(error, queryResult)
        )
    }

    static findAll(result) {
        dbConnection.query('SELECT * FROM todos', (error, queryResult) => result(error, queryResult))
    }

    static findByID(id, result) {
        dbConnection.query('SELECT * FROM todos WHERE id=?', [id], (error, queryResult) => result(error, queryResult))
    }

    static update(id, changedTodo, result) {
        dbConnection.query(
            'UPDATE todos SET description=?, created_at=?, updated_at=? WHERE id=?',
            [changedTodo.description, changedTodo.createdAt, changedTodo.updatedAt, id],
            (error, queryResult) => result(error, queryResult)
        )
    }

    static delete(id, result) {
        dbConnection.query('DELETE FROM todos WHERE id=?', [id], (error, queryResult) => result(error, queryResult))
    }
}

module.exports = Todo