import React from 'react'
import './Form.css'
const Form = () => {
  return (
    <div>
        <form>
            <label>
            <span>Nome</span>
                <input type="text" name="nome" id="nome" placeholder='Nome Completo' />
            </label>
            <label>
                <span>E-Mail</span>
                <input type="email" name="email" id="email" placeholder='nome@site.com.br' />
            </label>
            <label>
                <span>Mensagem</span>
                <textarea name="mensagem" id="mensagem" cols="30" rows="10" placeholder='Digite sua mensagem aqui'></textarea>
            </label>
            <button type="submit">Enviar</button>
        </form>

    </div>
  )
}

export default Form