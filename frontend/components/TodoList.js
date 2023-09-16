import React from 'react'
import Todo from "./Todo"
//can add items to the list
//will mark items checked or unchecked - using the completed classname in css

const TodoList = (props) => {

  console.log(props, "todolist")
  console.log(props.todo)
  return (
    <div>
       {props.todo.map(item => {
         return <Todo value={props.todo.item} key={props.todo.id}/>
        })}
    </div>
  )
}

export default TodoList


// export default class TodoList extends React.Component {
//   constructor(props) {
//     super(props);
    
//   }



//   render() {
//     return (
//       <div>
//         {this.props.todo.map(todo => {
//           <Todo value={todo.id} key={todo}/>
//         })}

//       {/* <div>
//         TodoList
//       </div>
//       <Todo  /> */}

//       </div>
//     )
//   }
// }
