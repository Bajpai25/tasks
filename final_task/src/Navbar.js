import React from 'react'
import "./Navbar.css";
import LogoutButton from './Logout';
import LoginButton from './Login';
import Profile from './Profile';
 const Navbar = () => {
  return (
    <div className='nav'>
      <img className='nav_logo'
      src="https://variety.com/wp-content/uploads/2020/05/netflix-logo.png"
      width={80} height={40} 
      alt="netflix"/> 
      <LogoutButton/>
      <LoginButton />
      <Profile/>
    </div>
  )
}
export default Navbar;
