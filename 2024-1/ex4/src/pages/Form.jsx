import React from 'react'
import './Form.css'
const Form = () => {
  return (
    <div>
        <form>
            <label>
                <span>Nome</span>
                <input type="text" name="nome" id="nome" placeholder="Nome completo" />
            </label>
            <label>
                <span>E-Mail</span>
                <input type="email" name="email" id="email" placeholder='nome@site.com' />
            </label>
            <label>
                <span>Mensagem</span>
                <textarea name="mensagem" id="mensagem" cols="30" rows="10"></textarea>
            </label>
            <button type="submit">Enviar</button>
        </form>

    </div>
  )
}

export default Form