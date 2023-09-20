import React from 'react'

//input box the todo elements are subimitted and a clear button
//will add todo items in this form

export default class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      todo: ''
    }

  }

  handleChanges = (e) => {
    e.preventDefault();
    this.setState({...this.state, todo: e.target.value})
  }


  submitForm = (e) => {
    e.preventDefault();
    this.props.addTodo(e, this.state.todo);
    this.setState({...this.state, todo: ''})
  }

  
  render() {
    return (
      <div>
        <form onSubmit={this.submitForm}>
          <input type="text" value={this.state.todo} onChange={this.handleChanges}></input>
          <button onClick={() => {this.props.addTodo('todo testing')}} >Add Todo</button>
        </form>
        
      </div>
      
    )
  }
}
