import React from 'react'
import styles from './Perfil.module.css'
import { useAuthValue } from '../../context/AuthContext'
import { Navigate } from 'react-router-dom'
const Perfil = () => {
  const { user } = useAuthValue()
  return (
    <main className='container'>
    <div className={styles.perfil}>
      {
        user ?
        <>
        <p>Olá, {user.displayName}, bem-vindo!</p>
        <p>Seu e-mail é: {user.email}!</p>
        </>:
        <Navigate to='/' />
      }
    </div>
    </main>
  )
}

export default Perfil