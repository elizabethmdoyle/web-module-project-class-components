import React from 'react'
import Form from "./Form"
import TodoList from './TodoList'


export default class App extends React.Component {
  render() {
    return (
      <div>
        <div>
          Todo App
        </div>
        <TodoList />
        <div>Add a New Todo</div>
        <Form />
      </div>
    )
  }
}
