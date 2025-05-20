import React from 'react'

const UserDetails = ({nome, idade, profissao}) => {
  return (
    <div>
        <h2>Usuário</h2>
        <ul>
            <li>Nome: {nome}</li>
            <li>Idade: {idade}</li>
            <li>Profissão: {profissao}</li>
        </ul>
        {idade>=18 ? (<p>Maior de Idade</p>):(<p>Menor de Idade</p>)}
    </div>
  )
}

export default UserDetails