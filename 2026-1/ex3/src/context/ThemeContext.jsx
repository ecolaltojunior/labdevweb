import React from 'react'
import { createContext, useState } from 'react'

//Criando o contexto
export const ThemeContext = createContext()

//Criando o provider
export const ThemeProvider = ({children})=>{
    const [theme, setTheme] = useState('light')
    
    const toggleTheme = ()=>{
        setTheme((prevTheme)=>(prevTheme==='light'?'dark':'light'))
    }
    return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
        {children}
    </ThemeContext.Provider>
  )
}
  


