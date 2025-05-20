import './App.css'
import ShowUserName from './components/ShowUserName'
import UserDetails from './components/UserDetails'

function App() {
  const users = [
    {id: 1001, nome: "Nelson", idade: 19, profissao: "Operador de telemarketing"},
    {id: 1002, nome: "Evaristo", idade: 40, profissao: "guitarrista"},
    {id: 1003, nome: "Jingle Natal", idade: 17, profissao: "ajudante de Papai Noel"}
  ]
  return (
    <>
      <div>
        <ShowUserName name="Junior" />
        {users.map((user)=>(
          <UserDetails key={user.id} nome={user.nome} idade={user.idade} profissao={user.profissao} />
        ))}
      </div>
    </>
  )
}

export default App
