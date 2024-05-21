import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Cadastro from './pages/Cadastro/Cadastro';
import Perfil from './pages/Perfil/Perfil';
import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';
import { useState, useEffect } from 'react';
import {AuthProvider} from './context/AuthContext'
import { useAuthentication } from './hooks/useAuthentication'
import { onAuthStateChanged } from 'firebase/auth'
function App() {
  const [user, setUser] = useState(undefined)
  const {auth} = useAuthentication()
  const loadingUser = user===undefined

  useEffect(()=>{
    onAuthStateChanged(auth, (user)=>{
      setUser(user)
    })
  },[auth])
  if(loadingUser){
    return <p>Carregando...</p>
  }
  return (
  <>
    <AuthProvider value={{user}}>
      <BrowserRouter>
      {user && <NavBar />}
        <Routes>
          <Route path='/perfil' element={user ? <Perfil /> : <Navigate to='/' />} />
          <Route path='/' element={!user ? <Home /> : <Navigate to='/perfil' />} />
          <Route path='/cadastro' element={<Cadastro />} />
          
        </Routes>
      </BrowserRouter>
      <Footer />
    </AuthProvider>
  </>
  );
}

export default App;
