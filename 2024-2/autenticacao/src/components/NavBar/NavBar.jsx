import React from 'react'
import styles from './NavBar.module.css'
import { NavLink } from 'react-router-dom'
import { useAuthValue } from '../../context/AuthContext'
import { useAuthentication } from '../../hooks/useAuthentication'

const NavBar = () => {
  const {user} = useAuthValue()
  const {logout} = useAuthentication()
 

  
  return (
    <nav className={styles.navbar}>
      { user &&
        <ul className={styles.links_list}>
            <li>
                <NavLink to="/cadastro">Cadastrar</NavLink>
            </li>
            <li>
                <NavLink to="/perfil">Perfil</NavLink>
            </li>
            <NavLink to="/" onClick={logout}>Sair</NavLink>
            
        </ul>
    }
    </nav>
  )
}

export default NavBar