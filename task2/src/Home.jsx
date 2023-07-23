import React from 'react'
import Header from './Header'
import About from './About'
import Services from './Services'
import Contact from "./Contact"
function Home() {
  return (
    <div>
      <Header/>
      <About/>
      <Services/>
      <Contact/>
    </div>
  )
}

export default Home