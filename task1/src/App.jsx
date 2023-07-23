import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Nav from './assets/Nav'
import About from './assets/About'
import Specs from "./assets/Specs"
import News from './assets/News'
import Contact from './assets/Contact'
import Home from './Home'
function App() {
  return (<>
    <Nav/>
    <Routes>
    <Route path="/" Component={Home}/>
      <Route path="/about" Component={About}/>
      <Route path="/specs" Component={Specs}/>
      <Route path="/news" Component={News}/>
      <Route path="/contact" Component={Contact}/>
    </Routes>
  </>
  )
}

export default App