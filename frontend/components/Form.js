import React from 'react'

export default class Form extends React.Component {
  render() {
    return (
      <div>
        <div>
          Form
        </div>
        <div>
          <input type="text"></input>
          <button>Add Todo</button>
        </div>
        
        <button>Clear Completed</button>
      </div>
      
    )
  }
}
