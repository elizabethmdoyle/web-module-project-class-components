import React from 'react'
import Todo from "./Todo"
//can add items to the list
//will mark items checked or unchecked - using the completed classname in css

// const TodoList = (props) => {

//   const { todos } = props
//   console.log(props, "todolist")
//   console.log(props.todo)
//   return (
//     <div>
//        {todos.map(item => {
//          return <Todo value={todos.item} key={todos.id}/>
//         })}
//     </div>
//   )
// }

// export default TodoList


export default class TodoList extends React.Component {
  constructor() {
    super();
    this.state = {
      showAll: true
    }
  }

  toggleCompleted = (evt) => {
    this.setState({...this.state, showAll: !this.state.showAll})
  }

  render() {
    //destructured todo from the props object - props does not need super to be called in a React.component
    //cannot add this.props in the return statement, as only jsx elements can be renedred in the return statement
    const { todos, toggleTodo } = this.props;
    console.log(this.props)
    const filtered = todos.filter(td => {!td.completed || this.state.showAll})
    console.log(filtered)
    return (


      <div>
        {filtered.map(item => {
          return <Todo key={item.id} todo={item} toggleTodo={toggleTodo}/>
        })}
       <button onClick={this.toggleCompleted} >Show All</button>


      </div>
    )
  }
}
