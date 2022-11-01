import './App.css';
import{BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import Home from './pages/Home/Home';
import Cadastro from './pages/Cadastro/Cadastro';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { AuthProvider } from './context/AuthContext'
import {useAuthentication} from './hooks/useAuthentication'
import { useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import Perfil from './pages/Perfil/Perfil';
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
        <h1>Laboratório de Desenvolvimento Web</h1>
        <main className='container'>
        <Routes>
          <Route path='/perfil' element={<Perfil />} />
          <Route path='/' element={!user ? <Home /> : <Navigate to='/perfil'/>}  />
          <Route path='/cadastro' element={<Cadastro />} />
        </Routes>
        </main>
        <Footer />
      </BrowserRouter>
      </AuthProvider>
    </> 
  );
}

export default App;
