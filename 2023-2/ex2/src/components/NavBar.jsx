import React from 'react'
import { Link } from 'react-router-dom'
import './NavBar.css'
const NavBar = () => {
  return (
    <nav>
        <Link to="/">Home</Link>
        <Link to="/pagina2">Página 2</Link>
        <Link to="/pagina3">Página 3</Link>
    </nav>  
  )
}

export default NavBar