import React from 'react'
import Form from "./Form"
import TodoList from './TodoList'

const todo = [
  {
    id: 1,
    item: "New Todo"
  },
  {
    id: 2,
    item: "New Todo"
  }, 
  {
    id: 3,
    item: "New Todo"
  }, 
  {
    id: 4,
    item: "New Todo"
  }, 
];


export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todoItem: ''
    }
  }

  addTodo = (e, todo) => {
    e.preventDefault();
    const newTodo = {
      id: Date.now(),
      todo: todo
    }
    this.setState({...this.state, todo: [this.state.todoItem, newTodo]})

  }
  render() {
    return (
      <div>
        <div>
          Todo App
        </div>
        <TodoList addTodo={this.addTodo} />
        <div>Add a New Todo</div>
        <Form />
      </div>
    )
  }
}
