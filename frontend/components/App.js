import React from 'react'
import Form from "./Form"
import TodoList from './TodoList'

//another way to incremet ids instead of Date.now() - in the commented out addTodo
//would be to initialize the id variable at 0, and then increment a variable that will increment based on previous todos

let id = 0;
let getId = () => ++id

const initialTodos = [
  {
    id: getId(),
    item: "Get dressed", 
    completed: false
  },
  {
    id: getId(),
    item: "Wake up", 
    completed: false
  }, 
  {
    id: getId(),
    item: "Learn React", 
    completed: false
  }
];

console.log(initialTodos, "app")

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: initialTodos
    }
  }

  addTodo = (e, todo) => {
    e.preventDefault();
    const newTodo = {
      id: getId(),
      item: todo, 
      completed: false
    }
    this.setState({...this.state, todos: [...this.state.todos, newTodo]})

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
        <TodoList todos={this.state.todos} />
        <Form addTodo={this.addTodo} />
        <button >Clear Completed</button>
      </div>
    )
  }
}
