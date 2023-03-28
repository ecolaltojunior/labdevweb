import React from 'react'
import './Form.css'
import { useState } from 'react'
const Form = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log('Enviando formulário')
        console.log(name, email, message)

        setName("")
        setEmail("")
        setMessage("")
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>
            <span>Nome</span>
                <input type="text" name="nome" id="nome" placeholder='Nome Completo' onChange={(e)=>setName(e.target.value)} value={name}/>
            </label>
            <label>
                <span>E-Mail</span>
                <input type="email" name="email" id="email" placeholder='nome@site.com.br' onChange={(e)=>setEmail(e.target.value)} value={email}/>
            </label>
            <label>
                <span>Mensagem</span>
                <textarea name="mensagem" id="mensagem" cols="30" rows="10" placeholder='Digite sua mensagem aqui' onChange={(e)=>setMessage(e.target.value)} value={message}></textarea>
            </label>
            <button type="submit">Enviar</button>
        </form>

    </div>
  )
}

export default Form