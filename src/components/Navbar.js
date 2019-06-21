import React from 'react'
import {Link} from 'react-router-dom'


const Navbar = () => {
    return (
    <nav>
    <div className="nav-wrapper">
      <Link to='/' className="brand-logo ">GOT houses</Link>
    </div>
  </nav>
    )
}

export default Navbar