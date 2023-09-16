import React from 'react'



// const Todo = (props) => {

//   console.log(props, "todo")  
// return (
//   <div>
//     Todo
//   </div>
// )
// }

// export default Todo


export default class Todo extends React.Component {


  //to show a todo 
  render() {
    return (
      <div>
        <p>{this.props.todos.item}</p>
      </div>
    )
  }
}
