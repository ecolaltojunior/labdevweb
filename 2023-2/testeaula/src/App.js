import './App.css';
import ShowUserName from './components/ShowUserName';
import UserDetails from './components/UserDetails';

function App() {
  const users = [
    {id: 1001, nome: "Junior", idade: 37, profissao: "professor"},
    {id: 1002, nome: "José", idade: 17, profissao: "pintor"},
    {id: 1003, nome: "Maria", idade: 58, profissao: "engenheira"}
  ]
  return (
    <div className="App">
      <ShowUserName name="Junior" />

      {users.map((user)=>(
        <UserDetails key={user.id} nome={user.nome} idade={user.idade} profissao={user.profissao} />
      ))}
      

    </div>
  );
}

export default App;
