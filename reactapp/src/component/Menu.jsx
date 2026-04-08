/*import React from 'react'

function Menu(props) {
  return (
    <>
        <div>Menu</div>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <button
          className="counter"
          onClick={() => props.setCount((count) => count + 1)}
        >
          Count is {props.count}
        </button>
    </>
  )
}

export default Menu*/

import "../css/Menu.css"

import React, { Component } from 'react'

export default class Menu extends Component {
  
    constructor(props) {
        super(props)
        this.state={
          count:0
        }
    }  
    componentDidMount(){
      console.log("Component Did Mount")

      //data to be retrieved from backend
    } 

    shouldComponentUpdate(nextProps, nextState){
      if (nextState.count ===1){
        return false
      }
      console.log("Should Component Update")
      return true
    }

    componentWillUnmount(){
      console.log("Component Will Unmount")
    }

    /* handleIncrement = () => {
    this.setState((count) => count + 1)
  }*/
    handleIncrement = () => {
  
    this.setState((prevState) => ({
      count: prevState.count + 1
    }))
  }
  render() {
    return (
        <>
            <div>Menu</div>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
                   {/*<button
                    className="counter"
                    onClick={() =>this.props.setCount((count) => count + 1)}>
                        Count is {this.props.count}
                    </button>*/}
                            
            <h2>{this.state.count}</h2>
            <button  className="counter" onClick={this.handleIncrement}>Increment</button>


        </>
    )
  }
}
