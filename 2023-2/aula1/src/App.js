import hello_world from './assets/images/hello_world.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <img src={hello_world} alt="imagem hello wolrd, olá mundo" className="App-logo" />
       <h1>LABORATÓRIO DE DESENVOLVIMENTO WEB</h1>
       <p>Introdução ao React</p>
       
      </header>
    </div>
  );
}

export default App;
