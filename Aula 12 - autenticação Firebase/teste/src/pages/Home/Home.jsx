import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <form>
            <label>
                <span>E-Mail</span>
                <input type="email" name="email" placeholder='nome@site.com.br' />
            </label>
            <label>
                <span>Senha</span>
                <input type="password" name="senha" placeholder='Digite sua senha' />
            </label>
            <button className='btn'>Entrar</button>
            <p><Link to='/cadastro' className='btn'>Cadastre-se</Link></p>
        </form>
    </div>
  )
}

export default Home