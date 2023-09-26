
import './App.css';
import ShowUserName from './components/ShowUserName';
import UserDetails from './components/UserDetails';

function App() {
  const users = [
    {id: 1001, nome: "Lisa", idade: 22, profissao: "inspetora"},
    {id: 1002, nome: "Frajola", idade: 21, profissao: "Exterminador de pragas"},
    {id: 1003, nome: "Tom", idade: 12, profissao: "Vigia"}
  ]
  return (
    <div className="App">
      <ShowUserName name="Fulano" />

      {users.map((user)=>(
        <UserDetails key={user.id} nome={user.nome} idade = {user.idade} profissao = {user.profissao} />
      ))}
    </div>
  );
}

export default App;
