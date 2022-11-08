import React from 'react'
import styles from './Cadastro.module.css'
import { useState, useEffect } from 'react'
import { useAuthentication } from '../../hooks/useAuthentication'
const Cadastro = () => {
    const [displayName, setDisplayName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [error, setError] = useState("")
    const [success, setSuccess] = useState("")

    const { createUser, error: authError, loading } = useAuthentication()

    const handleSubmit = async (e) => {
        e.preventDefault()

        setError("")
        const user = {
            displayName,
            email,
            password
        }
        if(password !== confirmPassword){
            setError("As senhas precisam ser iguais")
            return
        }

       const res = await createUser(user)

        setSuccess(res)

        setDisplayName("")
        setEmail("")
        setPassword("")
        setConfirmPassword("")
    }

    useEffect(()=>{

        if(authError){
            setError(authError)
        }

    },[authError])
  return (
    <div className={styles.cadastro}>
        <h2>Cadastre-se</h2>
        <form onSubmit={handleSubmit}>
            <label>
                <span>Nome:</span>
                <input type="text" name="displayName" placeholder='Nome Completo' value={displayName} onChange={(e)=>setDisplayName(e.target.value)}/>
            </label>
            <label>
                <span>E-Mail:</span>
                <input type="email" name="email" placeholder='nome@site.com.br' value={email} onChange={(e)=>setEmail(e.target.value)}/>
            </label>
            <label>
                <span>Senha:</span>
                <input type="password" name="password" placeholder='Insira uma senha' value={password} onChange={(e)=>setPassword(e.target.value)}/>
            </label>
            <label>
                <span>Confirmar Senha:</span>
                <input type="password" name="confirmPassword" placeholder='Confirme a senha' value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)}/>
            </label>
            {!loading && <button className='btn'>Cadastrar</button>}
            {loading && <button className='btn' disabled>Aguarde...</button>}
            {error && <p className='error'>{error}</p>}
            {success && <p className='success'>Usuário cadastrado com sucesso!</p>}

            
        </form>
    </div>
  )
}

export default Cadastro