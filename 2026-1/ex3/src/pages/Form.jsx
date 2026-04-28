import React from 'react'
import { useState, useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'
import './Form.css'
const Form = () => {
  const [nome, setNome] = useState("")
  const [assunto, setAssunto] = useState("")
  const [mensagem, setMensagem] = useState("")

  const handleSubmit = (e)=>{
    e.preventDefault()
    console.log("Enviando formulário...")
    console.log(nome, assunto,mensagem)
    setNome("")
    setAssunto("")
    setMensagem("")
  }
  const {theme, toggleTheme} = useContext(ThemeContext)
  return (
    <main style={{
        backgroundColor: theme==='light'?'#fff':'#333',
        color: theme==='light'?'#000':'#fff'
    }}>
        <h2>Formulário de contato</h2>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <legend>Dados da mensagem</legend>
            <label>
              <span>Nome</span>
              <input type="text" name="nome" placeholder='Nome Completo' onChange={(e)=>setNome(e.target.value)} value={nome}/>
            </label>
            <label>
              <span>Assunto</span>
              <input type="text" name="assunto" placeholder='informe o assunto da mensagem' onChange={(e)=>setAssunto(e.target.value)} value={assunto} />
            </label>
            <label>
              <span>Mensagem</span>
              <textarea name="mensagem" cols="30" rows="10" onChange={(e)=>setMensagem(e.target.value)} value={mensagem}></textarea>
            </label>
          </fieldset>
          <button type="submit">Enviar</button>
        </form>
        <button onClick={toggleTheme}>Mudar tema</button>
    </main>
  )
}

export default Form