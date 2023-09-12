import React from 'react'
import styles from './Form.module.css'
const FormLogin = () => {
  return (
    <div>
        <h1 className='titulo'>LOGIN</h1>
        <form className={styles.formulario}>
            <label>
                <span>E-Mail</span>
                <input type="email" name="email" id="email" className={styles.text} />
            </label>
            <label>
                <span>Senha</span>
                <input type="password" name="senha" id="senha" className={styles.text} />
            </label>
            <button type="submit" className={styles.btn}>Logar</button>
        </form>
    </div>
  )
}

export default FormLogin