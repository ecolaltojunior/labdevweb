
import './App.css'
import ShowUserName from './components/ShowUserName'
import UserDetails from './components/UserDetails'

function App() {
    const users = [
      {id: 1001, nome: "Rodolfo", idade: 43, profissao: "padeiro"},
      {id: 1002, nome: "Gerson", idade: 71, profissao: "marinheiro"},
      {id: 1003, nome: "Rebeca da Silva Rodrigues", idade: 15, profissao: "jovem aprendiz"},
      {id: 1004, nome: "Socorro", idade: 69, profissao: "enfermeira"}
    ]
    return (
    <>
      <ShowUserName name="Junior" />
      {users.map((user)=>(
        <UserDetails key={user.id} nome={user.nome} idade={user.idade} profissao={user.profissao}/>
      ))}
    </>
  )
}

export default App
