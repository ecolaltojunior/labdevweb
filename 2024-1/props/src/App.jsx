import './App.css'
import ShowUserName from './components/ShowUserName'
import UserDetails from './components/UserDetails'

function App() {
  const users = [
    {id: 1001, nome: "Tom", idade: 19, profissao: "só dorme"},
    {id: 1002, nome: "Lisa", idade: 17, profissao: "aprendiz de inspetora"},
    {id: 1003, nome: "Jão", idade: 25, profissao: "desenvolvedor"},
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
