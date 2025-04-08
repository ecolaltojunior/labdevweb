import React from 'react'
import logo from '../assets/FATEC_ZONA_LESTE.png'
import './Header.css'
const Header = () => {
  return (
    <header>
        <img src={logo} alt="logo Fatec Zona Leste" className='logo' />
        <h1>Exercício React</h1>
    </header>
  )
}

export default Header