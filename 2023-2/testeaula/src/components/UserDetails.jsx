import React from 'react'

const UserDetails = ({nome, idade, profissao}) => {
  return (
    <div>
        <h3>Usuários</h3>
        <ul>
            <li>Nome - {nome}</li>
            <li>Idade - {idade}</li>
            <li>Profissão - {profissao}</li>
        </ul>

        {idade>=18 ? (<p>Maior de idade</p>):(<p>Menor de idade</p>)}
    </div>
  )
}

export default UserDetails