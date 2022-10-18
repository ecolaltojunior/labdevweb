import './App.css';
import{BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home/Home';
import Cadastro from './pages/Cadastro/Cadastro';
function App() {
  return (
    <>
      <h1>Laboratório de Desenvolvimento Web</h1>
      <BrowserRouter>
      
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/cadastro' element={<Cadastro />} />
        </Routes>
        
      </BrowserRouter>
    </>
  );
}

export default App;
