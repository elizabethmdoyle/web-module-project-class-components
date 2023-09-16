import React from 'react'



const Todo = (props) => {

  console.log(props, "todo")  
return (
  <div>
    <p>{props.item}</p>
  </div>
)
}

export default Todo


// export default class Todo extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       listItem: ''
//     }
//   }

//   //to show a todo 
//   render() {
//     return (
//       <div>
//         Todo item
//         <p>{this.props.todo}</p>
//       </div>
//     )
//   }
// }
