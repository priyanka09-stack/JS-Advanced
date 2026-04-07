import Menu from "./component/Menu";
import Article from "./component/Article";
import Author from "./component/Author";
import{Add} from "./component/utility"
import {Sub} from "./component/utility"
import HomePage from "./component/HomePage";

import React from 'react'

function App(){
  
  return (
    <>
      <Menu />
      <Article  />
      <Author />
      <Add/>
      <Sub/>
      <HomePage/>

    </>
  )
}

export default App

