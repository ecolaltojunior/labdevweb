import React from 'react'
import './Form.css'
import { useState } from 'react'
const Form = () => {
    const [nome, setName] = useState("")
    const [email, setEmail] = useState("")
    const [mensagem, setMessage] = useState("")

    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log("Enviando Formulário")
        console.log(nome, email, mensagem)

        setName("")
        setEmail("")
        setMessage("")
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>
                <span>Nome</span>
                <input type="text" name="nome" id="nome" placeholder='Nome Completo' onChange={(e)=>setName(e.target.value)} value={nome}/>
            </label>
            <label>
                <span>E-Mail</span>
                <input type="email" name="email" id="email" placeholder='nome@site.com' onChange={(e)=>setEmail(e.target.value)} value={email} />
            </label>
            <label>
                <span>Mensagem</span>
                <textarea name="mensagem" id="mensagem" cols="30" rows="10" onChange={(e)=>setMessage(e.target.value)} value={mensagem}></textarea>
            </label>
            <button type="submit">Enviar</button>
        </form>
    </div>
  )
}

export default Form