import React, { Component } from 'react'
import axios from 'axios'
import { Themed, Card, Heading, Input, Button, Flex, Box } from 'theme-ui'

class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = { todoList: [] }

        this.addTodo = this.addTodo.bind(this)
        this.deleteTodo = this.deleteTodo.bind(this)
    }

    async componentDidMount() {
        this.getTodoList()
    }

    getTodoList() {
        axios.get('https://4000-turtlemaster16-todoapp-c82x1b8jsa4.ws-us38.gitpod.io/api/todo/')
            .then(result => {
                this.setState({ todoList: result.data.todos })
            }).catch(error => console.log(error))
    }

    addTodo() {
        const newTodoField = document.querySelector('#newTodo')

        if (newTodoField.value == null || newTodoField.value.trim() === '') { return }
        axios.post('https://4000-turtlemaster16-todoapp-c82x1b8jsa4.ws-us38.gitpod.io/api/todo/', {
            description: newTodoField.value
        }).then(response => this.getTodoList()).catch(error => console.log(error))
    }

    deleteTodo(_, id) {
        axios.delete(`https://4000-turtlemaster16-todoapp-c82x1b8jsa4.ws-us38.gitpod.io/api/todo/${id}`)
            .then(response => this.getTodoList()).catch(error => console.log(error))
    }

    render() {
        return (
            <div>
                <Card sx={{
                    padding: 4,
                    borderRadius: 4,
                    boxShadow: '0 0 8px rgba(0, 0, 0, 0.125)',
                }}>
                    <Heading sx={{ marginBottom: 3 }}>Todo App</Heading>
                    <Flex sx={{ marginBottom: 3 }}>
                        <Input placeholder='Add your new todo' sx={{ flex: '1 1 0' }} id='newTodo' />
                        <Button onClick={this.addTodo} sx={{ flex: '1 1 1', marginLeft: 2 }}>Add</Button>
                    </Flex>
                    {
                        this.state.todoList.map(({ id, description }) => {
                            return (
                                <Flex sx={{ marginY: 2 }}>
                                    <Box color="white" bg="secondary" sx={{ flex: '1 1 0', display: 'flex', alignItems: 'center', padding: 2, borderRadius: 4 }}>
                                        {description}
                                    </Box>
                                    <Button color="text" bg="background" onClick={(event) => this.deleteTodo(event, id)} sx={{ flex: '1 1 1', border: '1px solid', marginLeft: 2 }}>Delete</Button>
                                </Flex>
                            )
                        })
                    }
                </Card>
                <Themed.table>
                    <Themed.tr>
                        <Themed.th>Example Heading</Themed.th>
                        <Themed.th>Another Example Heading</Themed.th>
                    </Themed.tr>
                    <Themed.tr key='222'>
                        <Themed.td>Example Data</Themed.td>
                        <Themed.td>Another Example Data</Themed.td>
                    </Themed.tr>
                </Themed.table>
            </div>
        )
    }
}

export default TodoList