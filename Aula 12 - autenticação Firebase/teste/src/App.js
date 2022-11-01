
import './App.css';
import{BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import Home from './pages/Home/Home';
import Cadastro from './pages/Cadastro/Cadastro'
import NavBar from './components/NavBar'
import Footer from './components/Footer';
import { AuthProvider } from './context/AuthContext'
import { onAuthStateChanged } from 'firebase/auth';

//hooks

import { useState, useEffect } from 'react';
import { useAuthentication } from './hooks/useAuthentication';
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
    <div className="App">
     <AuthProvider value={{user}}>
      <BrowserRouter>
      {user && <NavBar />}
      <h1>LABORATÓRIO DE DESENVOLVIMENTO WEB</h1>
        <div className='container'>
        <Routes>
        <Route path='/perfil' element={user ? <Perfil /> : <Navigate to='/' />} /> 
        <Route path='/' element={!user ? <Home /> : <Navigate to='/perfil' />} />
        <Route path ='/cadastro' element={<Cadastro />} />
        </Routes>
        </div>
        <Footer />
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
