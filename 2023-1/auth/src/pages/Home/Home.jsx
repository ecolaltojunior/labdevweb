import React from 'react'
import styles from './Home.module.css'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { useAuthentication } from '../../hooks/useAuthentication'
const Home = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const {login, error: authError, loading } = useAuthentication()
  
  const handleSubmit = async (e)=>{
    e.preventDefault()

    setError("")

    const user = {
      email,
      password
    }
    const res = await login (user)
    console.log(res)
  }

  useEffect(()=>{
    if(authError){
      setError(authError)
    }
  },[authError])
  return (
    <main className='container'>
    <div className={styles.home}>
        <form onSubmit={handleSubmit}>
            <label>
                <span>E-mail</span>
                <input type="email" name="email" id="email" placeholder='nome@site.com.br' value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
            </label>
            <label>
                <span>Senha</span>
                <input type="password" name="password" id="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} />
            </label>
            {!loading && <button type="submit" className='btn'>Entrar</button>}
            {loading && <button type="submit" className='btn' disabled>Aguarde...</button>}
            {error && <p className='error'>{error}</p>}
            <Link to='/cadastro' className='btn'>Cadastre-se</Link>
        </form>
        
    </div>
    </main>
  )
}

export default Home