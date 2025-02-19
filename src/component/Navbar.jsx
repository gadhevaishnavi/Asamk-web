import React from 'react'
import '../assets/css/Navpage.css'
import { Link } from 'react-router-dom'
import logo from '../assets/images/logo.png'
import '../assets/css/Navpage.css'
const Navbar = () => {
  return (
    <>
    <div className='nav-bar'>
    <div className='logo'>
      <img src={logo} alt="" />
    </div>
    <nav>
      <Link to ="/">Home</Link>
      <Link to="/aboutus">AboutUs</Link>
      <Link to="/product">Products</Link>
      <Link to="/location">Location</Link>
      <Link to="/contactus">ContactUs</Link>
    </nav>
    </div>
    </>
  )
}

export default Navbar
