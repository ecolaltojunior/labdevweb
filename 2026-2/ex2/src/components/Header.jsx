import React from 'react'
import logo from '../assets/hero.png'
import './Header.css'
const Header = () => {
  return (
    <header>
        <img src={logo} className='logo' alt="logo hero" />
        <h1>Exercício 2 - React JS</h1>
    </header>
  )
}

export default Header