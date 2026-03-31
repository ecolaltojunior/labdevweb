import './App.css'
import UserName from './components/UserName'
import UserDetails from './components/UserDetails'
function App() {
  const users = [
    {id: 1001, nome: "Neto", profissao: "garoto de programa", idade: 70 },
    {id: 1002, nome: "Roberto", profissao: "engenheiro", idade: 15},
    {id: 1003, nome: "Albert", profissao: "físico", idade: 27},
    {id: 1004, nome: "Matheus", profissao: "modelo", idade:20}
  ]

  return (
    <>
      <UserName name="Junior" />
      {users.map((user)=>(
        <UserDetails key={user.id} nome={user.nome} idade={user.idade} profissao={user.profissao}/>
      ))}
    </>
  )
}

export default App
