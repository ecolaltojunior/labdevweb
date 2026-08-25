import React from 'react'
import {Link} from 'react-router-dom'
import './NavBar.css'
const Navbar = () => {
  return (
    <nav>
        <Link to="/">Home</Link>
        <Link to="/contato">Contato</Link>
    </nav>
  )
}

export default Navbar