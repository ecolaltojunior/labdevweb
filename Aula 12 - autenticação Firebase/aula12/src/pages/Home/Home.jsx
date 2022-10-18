import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Home.module.css'
const Home = () => {
  return (
    <div className={styles.home}>
        <h2>Login</h2>
        <form>
            <label>
                <span>E-Mail</span>
                <input type="email" name="email" placeholder='nome@site.com.br'/>
            </label>
            <label>
                <span>Senha</span>
                <input type="password" name="password" placeholder='Digite sua senha'/>
            </label>
            <button className='btn'>Entrar</button>
            <Link to='/cadastro' className='btn'>Cadastre-se</Link>
        </form>
    </div>
  )
}

export default Home