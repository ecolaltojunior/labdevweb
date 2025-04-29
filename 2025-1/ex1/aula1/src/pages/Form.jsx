import React from 'react'
import './Form.css'
import { useState } from 'react'
const Form = () => {
    const [nome, setNome] = useState("")
    const [assunto, setAssunto] = useState("")
    const[mensagem, setMensagem] = useState("")

    const handleSubmit = (e)=>{
        e.preventDefault()
        console.log("Enviando formulário...")
        console.log(nome, assunto, mensagem)

        setNome("")
        setAssunto("")
        setMensagem("")
    }
  return (
    <main>
        <h1>Formulário de contato</h1>
        <form onSubmit={handleSubmit}>
            <fieldset>
                <legend>Dados da mensagem</legend>
            <label>
                <span>Nome</span>
                <input type="text" name="nome" id="nome" placeholder='Nome completo' onChange={(e)=>setNome(e.target.value)} value={nome} />
            </label><br />
            <label>
                <span>Assunto</span>
                <input type="text" name="assunto" id="assunto" placeholder='informe o assunto da mensagem' onChange={(e)=>setAssunto(e.target.value)} value={assunto}/>
            </label><br />
            <label>
                <span>Mensagem</span>
                <textarea name="mensagem" id="mensagem" cols="30" rows="10" onChange={(e)=>setMensagem(e.target.value)} value={mensagem}></textarea>
            </label>
            </fieldset>
            <button type='submit'>Enviar</button>
        </form>
    </main>
  )
}

export default Form