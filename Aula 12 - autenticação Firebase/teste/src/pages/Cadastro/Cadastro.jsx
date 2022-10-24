import React from 'react'
import styles from './Cadastro.module.css'
const cadastro = () => {
  return (
    <div className={styles.cadastro}>
        <h2>Cadastre-se</h2>
        <form>
            <label>
                <span>Nome</span>
                <input type="text" name="displayName" required placeholder='Nome Completo'/>
            </label>
            <label>
                <span>E-Mail</span>
                <input type="text" name="email" required placeholder='nome@site.com.br'/>
            </label>
            <label>
                <span>Senha</span>
                <input type="password" name="password" required placeholder='Insira uma senha'/>
            </label>
            <label>
                <span>Confirmar Senha</span>
                <input type="password" name="confirmPassword" required placeholder='Confirme a senha'/>
            </label>
            <button className='btn'>Cadastrar</button>
        </form>
    </div>
  )
}

export default cadastro