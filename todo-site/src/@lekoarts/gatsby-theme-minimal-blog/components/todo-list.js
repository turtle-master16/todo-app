import React, { Component } from 'react'
import axios from 'axios'
import { Themed, Card, Heading, Input, Button, Flex, Box } from 'theme-ui'

class TodoList extends Component {
    addTodo() {
        const newTodoField = document.querySelector('#newTodo')

        axios.post('https://4000-turtlemaster16-todoapp-c82x1b8jsa4.ws-us38.gitpod.io/api/todo/', {
            description: newTodoField.value
        }).then(response => console.log(response), error => console.log(error))
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
                    <Flex>
                        <Box color="text" bg="background" sx={{ flex: '1 1 0', border: '1px solid', display: 'flex', alignItems: 'center', paddingLeft: 2 }}>
                            Beep
                        </Box>
                        <Button bg="secondary" onClick={this.addTodo} sx={{ flex: '1 1 1', marginLeft: 2 }}>Delete</Button>
                    </Flex>
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