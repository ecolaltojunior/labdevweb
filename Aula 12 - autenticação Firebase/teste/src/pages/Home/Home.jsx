import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Home.module.css'
import { useState, useEffect } from 'react'
import { useAuthentication } from '../../hooks/useAuthentication'
const Home = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const { login, error: authError, loading } = useAuthentication()

  const handleSubmit = async (e) => {
      e.preventDefault()

      setError("")
      const user = {
          email,
          password
      }
     

     const res = await login(user)

      console.log(res)
  }

  useEffect(()=>{

      if(authError){
          setError(authError)
      }

  },[authError])
  return (
    <div className={styles.home}>
        <form onSubmit={handleSubmit}>
            <label>
                <span>E-Mail</span>
                <input type="email" name="email" placeholder='nome@site.com.br' value={email} onChange={(e)=>setEmail(e.target.value)} />
            </label>
            <label>
                <span>Senha</span>
                <input type="password" name="senha" placeholder='Digite sua senha' value={password} onChange={(e)=>setPassword(e.target.value)}/>
            </label>
            {!loading && <button className='btn' type="submit">Entrar</button>}
            {loading && (<button className='btn' disabled>Aguarde...</button>)}
            {error && <p className='error'>{error}</p>}
            <p><Link to='/cadastro' className='btn'>Cadastre-se</Link></p>
        </form>
    </div>
  )
}

export default Home