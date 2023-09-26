import React from 'react'

const UserDetails = ({nome, idade, profissao}) => {
  return (
    <div>
        <h2>Usuários</h2>
        <ul>
            <li>Nome - {nome}</li>
            <li>Idade - {idade}</li>
            <li>Profissão - {profissao}</li>
        </ul>
        {idade>=18 ? (<p>Maior de idade</p>) : (<p>Menor de idade</p>)}
    </div>
  )
}

export default UserDetails