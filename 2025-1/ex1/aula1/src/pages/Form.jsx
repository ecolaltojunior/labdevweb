import React from 'react'
import './Form.css'
const Form = () => {
  return (
    <main>
        <h1>Formulário de contato</h1>
        <form>
            <fieldset>
                <legend>Dados da mensagem</legend>
            <label>
                <span>Nome</span>
                <input type="text" name="nome" id="nome" placeholder='Nome completo' />
            </label><br />
            <label>
                <span>Assunto</span>
                <input type="text" name="assunto" id="assunto" placeholder='informe o assunto da mensagem'/>
            </label><br />
            <label>
                <span>Mensagem</span>
                <textarea name="mensagem" id="mensagem" cols="30" rows="10"></textarea>
            </label>
            </fieldset>
            <button type='submit'>Enviar</button>
        </form>
    </main>
  )
}

export default Form