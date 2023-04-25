import React from 'react'
import styles from './NavBar.module.css'
import { NavLink } from 'react-router-dom'
const NavBar = () => {
  return (
    <nav className={styles.navbar}>
        <ul className={styles.links_list}>
            <li>
                <NavLink to="/cadastro">Cadastrar</NavLink>
            </li>
            <li>
                <NavLink to="/perfil">Perfil</NavLink>
            </li>
            <button>Sair</button>
            
        </ul>

    </nav>
  )
}

export default NavBar