import React, { Component } from 'react'
//import styled from 'styled-components'
import styled from '@emotion/styled'
import {css} from '@emotion/react'


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
        <Button>Click Me</Button>
        <Button red >Click Again</Button>
        <button css ={{backgroundColor:'chartreuse' ,color:'green',padding:'100px'}}>Dayumm !!</button>
        <button className ='bg-pink-500 text-white border-2 border-white'>TailWinddddd !!</button>
      </div>
    )
  }


  
}

export default Author

const Button =styled.button`
  background-color :${props=>props.red ? "red":"pink"} ;
  color : white;
  padding:15px;



`

