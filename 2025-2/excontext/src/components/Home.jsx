import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

const Home = () => {
    const {theme, toggleTheme} = useContext(ThemeContext)
  return (
    <div style={{
        backgroundColor: theme==='light'?'#fff':'#333',
        color: theme==='light'?'#000':'#fff',
        padding: '20px',
        minHeight: '100vh'
    }}>
        <h2>Modo Atual: {theme}</h2>
        <button onClick={toggleTheme}>Alternar Tema</button>
    </div>
  )
}

export default Home