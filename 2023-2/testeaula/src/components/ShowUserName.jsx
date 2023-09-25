import React from 'react'

const ShowUserName = (props) => {
  return (
    <div>
        <h3>O nome do usuário é: {props.name}.</h3>
    </div>
  )
}

export default ShowUserName