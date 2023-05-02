import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Cadastro from './pages/Cadastro/Cadastro';
import Perfil from './pages/Perfil/Perfil';
import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';
import { useState } from 'react';
import {AuthProvider} from './context/AuthContext'
function App() {
  const [user, setUser] = useState(undefined)
  return (
    <>
    <AuthProvider value={{user}}>
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cadastro' element={<Cadastro />} />
          <Route path='/perfil' element={<Perfil />} />
        </Routes>
      </BrowserRouter>
      <Footer />
      </AuthProvider>
    </>
  );
}

export default App;
