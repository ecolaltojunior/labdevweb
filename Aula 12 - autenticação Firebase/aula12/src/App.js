import './App.css';
import{BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home/Home';
import Cadastro from './pages/Cadastro/Cadastro';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
function App() {
  return (
    <> 
      <BrowserRouter>
        <NavBar />
        <h1>Laboratório de Desenvolvimento Web</h1>
        <main className='container'>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/cadastro' element={<Cadastro />} />
        </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </> 
  );
}

export default App;
