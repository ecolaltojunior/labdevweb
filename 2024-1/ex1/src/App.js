import HelloWorld from './assets/images/hello_world.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={HelloWorld} className="App-logo" alt="Hello World" />
        <h1>LABORATÓRIO DE DESENVOLVIMENTO WEB</h1>
        <p>
          Exercício 1 - React
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
