import React from 'react'
import {Link} from 'react-router-dom'
import './NavBar.css'
const NavBar = () => {
  return (
    <nav>
        <Link to="/">Home</Link>
        <Link to="/page2">Página 2</Link>
    </nav>
  )
}

export default NavBar