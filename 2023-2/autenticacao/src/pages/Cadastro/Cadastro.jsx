import React from 'react'
import styles from './Cadastro.module.css'

const Cadastro = () => {
  
  return (
    <main className='container'>
    <div className={styles.cadastro}>
      <form>
        <label>
          <span>Nome:</span>
          <input type="text" name="displayName" id="displayName" placeholder='Nome Completo'/>
        </label>
        <label>
          <span>E-Mail:</span>
          <input type="email" name="email" id="email" placeholder='nome@site.com.br' />
        </label>
        <label>
          <span>Senha:</span>
          <input type="password" name="password" id="password" />
        </label>
        <label>
          <span>Confirmar Senha:</span>
          <input type="password" name="confirmPassword" id="confirmPassword" />
        </label>
      <button type="submit" className='btn'>Cadastrar</button>
      
      </form>

    </div>
    </main>
  )
}

export default Cadastro