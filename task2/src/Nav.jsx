import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';

function Nav() {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <nav className="flex flex-col md:flex-row justify-between  text-black md:pb-8 md:pt-4 hover:bg-[#333333] hover:text-white">
      <Link to="./">
        <h1 className="text-3xl pl-4 md:text-5xl font-extrabold font-sans">Chuckle Factory😄</h1>
      </Link>
      <section className={` pl-4 md:flex ${click? 'flex flex-col':'hidden'} ${click ? 'block'  : 'hidden'}`}>
        <Link
          to="/treasure"
          className="font-semibold hover:underline text-lg md:text-2xl font-mono mb-2 md:mb-0 md:mr-4"
        >
          Treasure
        </Link>
        <Link to="about" className="hover:underline font-semibold md:text-2xl font-mono mb-2 md:mb-0 md:mr-4">
          About
        </Link>
        <Link to="/contact" className="hover:underline font-semibold md:text-2xl font-mono mb-2 md:mb-0">
          Contact
        </Link>
      </section>
      <GiHamburgerMenu
        className={`text-4xl  md:hidden cursor-pointer   pl-4  text-white`}
        onClick={handleClick}
      />
    </nav>
  );
}

export default Nav;
