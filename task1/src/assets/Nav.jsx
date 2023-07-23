import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom'
import {GiHamburgerMenu} from "react-icons/gi"
import "./Nav.css"
function Nav() {
    const [showMenu, setShowMenu] = useState(false);
  
    const toggleMenu = () => {
      setShowMenu(!showMenu);
    };
  return (
    <section id="navbar" className={`w-full flex ${showMenu ? 'flex-col' : 'flex-row'} justify-between 
    border-4 border-black 
    bg-black text-white`}>
      <Link to="./"><img src="./FITPULSE.png" className="h-24 w-32 m-0 p-0"/></Link>
      <section id="navbar-links" className={`md:flex ${showMenu ? 'flex flex-col ' : 'flex-row  space-x-4'} 
      md:space-y-0 md:space-x-4 ${showMenu ? 'block' : 'hidden'}`}>
        <Link to="./about" className="border-1 ml-1 mr-1 rounded-lg pt-4 h-12 text-2xl font-semibold hover:underline">About</Link>
        <Link to="./specs" className="border-1  ml-1 mr-1 rounded-lg pt-4 text-2xl font-semibold hover:underline">Specifications</Link>
        <Link to="./news" className="border-1  ml-1 mr-1 rounded-lg pt-4 text-2xl font-semibold hover:underline">NewsLetter</Link>
        <Link to="contact" className="border-1  ml-1 mr-1 rounded-lg pt-4  text-2xl font-semibold hover:underline">Contact</Link>
      </section>
      <section id="burger-menu" className="md:hidden flex flex-col justify-between 
      items-center cursor-pointer p-2" onClick={toggleMenu}>
        <GiHamburgerMenu className="h-16 w-16"/>
      </section>
    </section>
  );
};


export default Nav