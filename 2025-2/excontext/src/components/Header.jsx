import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
const Header = () => {
    const {theme} = useContext(ThemeContext)
  return (
    <header style={{
        backgroundColor: theme==='light'?'#f0f0f0':'#222',
        color: theme==='light'?'#000':'#fff',
        padding: '10px'
    }}>
        <h1>Meu App em Context API</h1>
    </header>
  )
}

export default Header