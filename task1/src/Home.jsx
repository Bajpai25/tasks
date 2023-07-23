import React from "react"
import About from "./assets/About"
import Specs from "./assets/Specs"
import News from "./assets/News"
import Contact from "./assets/Contact"
import Bio from "./assets/Bio"
function Home(){
    return(
        <>
        <Bio/>
         <About/>
         <Specs/>
         <News/>
         <Contact/>   
        </>
    )
}
export default Home