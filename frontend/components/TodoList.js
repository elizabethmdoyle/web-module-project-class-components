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


  render() {
    //destructured todo from the props object - props does not need super to be called in a React.component
    //cannot add this.props in the return statement, as only jsx elements can be renedred in the return statement
    const { todos } = this.props;
    console.log(todos)
    return (


      <div>
        {todos.map(item => {
          return <Todo key={todos.id} todo={todos.item} />
        })}


      </div>
    )
  }
}
