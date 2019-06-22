import React from 'react'
import {Link} from 'react-router-dom'


const Navbar = () => {
    return (
    <nav>
    <div className="nav-wrapper teal">
      <Link to='/' className="brand-logo ">GOT API</Link>
    </div>
  </nav>
    )
}

export default Navbar