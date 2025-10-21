import React from 'react'
import { ThemeProvider } from './context/ThemeContext'

import './App.css'
import Header from './components/Header'
import Home from './components/Home'

function App() {

  return (
    <>
      <ThemeProvider>
        <Header />
        <Home />      
      </ThemeProvider>
    </>
  )
}

export default App
