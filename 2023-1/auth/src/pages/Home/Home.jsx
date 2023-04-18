import React from 'react'
import styles from './Home.module.css'

const Home = () => {
  return (
    <div className={styles.home}>
        <form>
            <label>
                <span>E-mail</span>
                <input type="email" name="email" id="email" placeholder='nome@site.com.br' />
            </label>
            <label>
                <span>Senha</span>
                <input type="password" name="password" id="password" />
            </label>
            <button type="submit" className='btn'>Entrar</button>
        </form>
        
    </div>
  )
}

export default Home