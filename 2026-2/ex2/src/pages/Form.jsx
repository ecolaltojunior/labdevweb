import React from 'react'
import { useState } from 'react'
import './Form.css'
const Form = () => {
    const [nome, setNome] = useState("")
    const [assunto, setAssunto] = useState("")
    const [mensagem, setMensagem] = useState("")

    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log("Enviando o formulário...")
        console.log(nome, assunto, mensagem)
        setNome("")
        setAssunto("")
        setMensagem("")
    }
  return (
    <main>
        <h2>Formulário de contato</h2>
        <form onSubmit={handleSubmit}>
            <fieldset>
                <legend>Dados de mensagem</legend>
                <label>
                    <span>Nome</span>
                    <input type="text" name="nome" id="nome" placeholder='Nome Completo' onChange={(e)=>setNome(e.target.value)} value={nome}/>
                </label>
                <label>
                    <span>Assunto</span>
                    <input type="text" name="assunto" id="assunto" placeholder='Assunto da mensagem' onChange={(e)=>setAssunto(e.target.value)} value={assunto}/>
                </label>
                <label>
                    <span>Mensagem</span>
                    <textarea name="mensagem" id="mensagem" cols="30" rows="10" onChange={(e)=>setMensagem(e.target.value)} value={mensagem}></textarea>
                </label>

            </fieldset>
            <button type="submit">Enviar</button>
        </form>
    </main>
  )
}

export default Form