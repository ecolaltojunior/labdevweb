import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './NavBar.module.css'
const NavBar = () => {
  return (
    <nav className={styles.navbar}>
        
        <ul className={styles.links_list}>
            <li>
            <NavLink to="/perfil">Perfil</NavLink>
            </li>
            <button>Sair</button>

        </ul>
    </nav>
  )
}

export default NavBar