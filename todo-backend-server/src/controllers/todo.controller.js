'use strict'

const Todo = require('../models/todo.model')

exports.create = function (request, response) {
    Todo.create(new Todo(request.body), (error, createdTodo) => {
        if (error) {
            response.send(error)
            return
        }

        Todo.findByID(createdTodo.insertId, (error, fetchedTodo) => {
            if (error) {
                response.send(error)
                return
            }
            response.json({
                result: 'SUCCESS',
                message: `Successfully created todo with id: ${createdTodo.insertId}.`,
                todos: fetchedTodo
            })
        })
    })
}

exports.findAll = function (_, response) {
    Todo.findAll((error, fetchedTodos) => {
        if (error) {
            response.send(error)
            return
        }
        response.json({
            result: 'SUCCESS',
            message: 'Successfully fetched todos.',
            todos: fetchedTodos
        })
    })
}

exports.findByID = function (request, response) {
    Todo.findByID(request.params.id, (error, fetchedTodo) => {
        if (error) {
            response.send(error)
            return
        }
        response.json({
            result: 'SUCCESS',
            message: `Successfully fetched todo.`,
            todos: fetchedTodo
        })
    })
}

exports.update = function (request, response) {
    Todo.update(request.params.id, new Todo(request.body), (error, _) => {
        if (error) {
            response.send(error)
            return
        }
        Todo.findByID(request.params.id, (error, fetchedTodo) => {
            if (error) {
                response.send(error)
                return
            }
            response.json({
                result: 'SUCCESS',
                message: `Successfully updated todo with id: ${request.params.id}.`,
                todos: fetchedTodo
            })
        })
    })
}

exports.delete = function (request, response) {
    Todo.delete(request.params.id, (error, _) => {
        if (error) {
            response.send(error)
            return
        }
        response.json({
            result: 'SUCCESS',
            message: `Succesfully deleted todo with id ${request.params.id}.`
        })
    })
}