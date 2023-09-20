import React from 'react'



// const Todo = (props) => {

   

// return (
//   <div>
//     Todo
//     {console.log(props)}
//   </div>
// )
// }

// export default Todo


export default class Todo extends React.Component {


  //to show a todo 
  render() {
     const {id, item, completed} = this.props.todo;
     const {toggleTodo} = this.props;
    console.log(this.props)

    return (
      <div onClick={() => {toggleTodo(id)}}>
        <p>{item} {completed && '✓'}</p>
      </div>
    )
  }
}
