import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Cadastro from './pages/Cadastro/Cadastro';
import Perfil from './pages/Perfil/Perfil';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cadastro' element={<Cadastro />} />
          <Route path='/perfil' element={<Perfil />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
