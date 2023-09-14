import React from 'react'
import Todo from "./Todo"

export default class TodoList extends React.Component {
  constructor(props) {
    super(props);
    
  }
  render() {
    return (
      <div>
      <div>
        TodoList
      </div>
      <Todo />

      </div>
    )
  }
}
