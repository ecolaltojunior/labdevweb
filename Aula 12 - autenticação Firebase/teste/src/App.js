
import './App.css';
import{BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home/Home';
import Cadastro from './pages/Cadastro/Cadastro'

function App() {
  return (
    <div className="App">
      <h1>LABORATÓRIO DE DESENVOLVIMENTO WEB</h1>
      <BrowserRouter>
        <div className='container'>
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path ='/cadastro' element={<Cadastro />} />
        </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
