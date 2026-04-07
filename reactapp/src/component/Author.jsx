import React, { Component } from 'react'

export class Author extends Component {

    constructor() {
        super()
        this.state = {
            count:0
    }}
    handleIncrement=()=>{
        this.setState({count:this.state.count+1})
    }

  render() {
    return (
      <div>
        <p>This author is tired !!!!!!!!!!!!!!!!!!1</p>
        <p>Count: {this.state.count}</p>
        <button onClick={this.handleIncrement}>Increment</button>
      </div>
    )
  }

  
}

export default Author