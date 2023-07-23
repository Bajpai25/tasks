import React from 'react'
import Nav from './Nav'
import Home from './Home'
import About from './About'
import Contact from "./Contact"
import { Routes,Route } from 'react-router-dom'
import Treasure from './Treasure'
function App() {
  return (
    <>
        <Nav/>
        <Routes>
          <Route path="/" Component={Home}/>
          <Route path="/contact" Component={Contact}/>
          <Route path="/about" Component={About}/>
          <Route path="/treasure" Component={Treasure}/>
        </Routes>
    </>
  )
}

export default App