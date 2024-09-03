import './App.css';
import ShowUserName from './components/ShowUserName';
import UserDetails from './components/UserDetails';

function App() {
  const users = [
    {id: 1001, nome: "Tom", idade: 18, profissao: "dormir"},
    {id: 1002, nome: "Lisa", idade: 16, profissao: "inspetora"},
    {id: 1003, nome:"Frajola", idade: 20, profissao: "caçador"}
  ]
  return (
    <div className="App">
      <ShowUserName name="Fulano" />
      {users.map((user)=>(
        <UserDetails key={user.id} nome={user.nome} idade={user.idade} profissao={user.profissao} />
      ))}
    </div>
  );
}

export default App;
