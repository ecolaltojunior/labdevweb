
import './App.css'
import UserDetails from './components/UserDetails'
import UserName from './components/UserName'

function App() {
  const users = [
    {id:1001,nome:"Ademir", idade:32, profissao:"garçom"},
    {id:1002, nome:"Ronaldo", idade:17, profissao:"garoto de programa"},
    {id: 1003, nome:"Marilza", idade:41, profissao:"cozinheira"},
    {id:1004, nome:"Marcos", idade:18, profissao:"padeiro"}
  ]
  return (
    <>
      <UserName name="Junior"/>
      {users.map((user)=>(
        <UserDetails key={user.id} nome={user.nome} idade={user.idade} profissao={user.profissao} />
      ))}
    </>
  )
}

export default App
