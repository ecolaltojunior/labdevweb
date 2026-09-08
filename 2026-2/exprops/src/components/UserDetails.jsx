import React from 'react'

const UserDetails = ({nome, idade, profissao}) => {
  return (
    <div>
        <h3>Usuário:</h3>
        <p>Nome:{nome}</p>
        <p>Idade: {idade}</p>
        <p>Profissão: {profissao}</p>
        <p>{idade >=18 ? "Maior de idade" : "Menor de idade"}</p>
    </div>
  )
}

export default UserDetails