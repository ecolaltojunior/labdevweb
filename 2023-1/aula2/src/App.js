import './App.css';
import hello_world from './assets/image/hello_world.png'
function App() {
  return (
    <div className="App">
      <header className="App-header">
       <img src={hello_world} className="App-logo" alt="hello world, olá mundo" />
       <h1>Aula 02 - Introdução ao React</h1>
       <p>Laboratório de Desenvolvimento Web</p>
      </header>
    </div>
  );
}

export default App;
