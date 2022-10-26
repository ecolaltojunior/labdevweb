import React from 'react'
import { useAuthValue } from '../../context/AuthContext'
import { Navigate } from 'react-router-dom'
import styles from './Perfil.module.css'
const Perfil = () => {
    const {user} = useAuthValue()
  return (

    <div className={styles.perfil} >
        {user ? 
        <>
        <p>Olá {user.displayName}, bem-vindo!</p> 
        <p>Seu e-mail é: {user.email}</p>
        </>: <Navigate to='/' />}
    </div>
  )
}

export default Perfil