import React from 'react'
import Form from "./Form"
import TodoList from './TodoList'

const todo = [
  {
    id: 1,
    item: "New Todo", 
    completed: false
  },
  {
    id: 2,
    item: "New Todo", 
    completed: false
  }, 
  {
    id: 3,
    item: "New Todo", 
    completed: false
  }, 
  {
    id: 4,
    item: "New Todo", 
    completed: false
  }, 
];

console.log(todo, "app")

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todo: todo
    }
  }

  addTodo = (e, todo) => {
    e.preventDefault();
    const newTodo = {
      id: Date.now(),
      item: todo, 
      completed: false
    }
    this.setState({...this.state, todo: [...this.state.todo, newTodo]})

  }

  
  // clearCompleted = (e, item) => {
  //   e.preventDefault();
  //   if(item.completed === true) {
  //     this.setState({item: [this.todo.item.completed: true]})  
  //   }
  //   return item;
    
  // }


  
  render() {
    return (
      <div>
        <div>
          Todo App
        </div>
        <TodoList todo={this.state.todo} />
        <Form addTodo={this.addTodo} />
        <button >Clear Completed</button>
      </div>
    )
  }
}
