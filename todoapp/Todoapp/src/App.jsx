import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Todo from "./components/Todo.jsx"
import Header from "./components/header.jsx"
import "./appp.css"

function App() {
  

  return (
    <div className="App">
       <Header />
       <Todo /> 
    </div>
  );
}

export default App
