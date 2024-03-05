import React from 'react'
import Logo from '../assets/FATEC_ZONA_LESTE.png'
import './Header.css'
const Header = () => {
  return (
    <header>
        <img src={Logo} className="logo" alt="logo Fatec Zona Leste cinza e vermelho" />
        <h1>Exercício 2 - React</h1>
    </header>
  )
}

export default Header