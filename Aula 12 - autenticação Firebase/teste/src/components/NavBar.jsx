import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './NavBar.module.css'
import { useAuthentication } from '../hooks/useAuthentication'
import { useAuthValue } from '../context/AuthContext'
const NavBar = () => {
  const {user} = useAuthValue()
  const {logout} = useAuthentication()
  return (
    <nav className={styles.navbar}>
        {user &&
        <ul className={styles.links_list}>
            <li>
            <NavLink to="/perfil">Perfil</NavLink>
            </li>
            <button onClick={logout}>Sair</button>

        </ul>
        }
    
    </nav>
  )
}

export default NavBar