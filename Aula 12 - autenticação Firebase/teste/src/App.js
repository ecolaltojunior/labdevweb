
import './App.css';
import{BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home/Home';
import Cadastro from './pages/Cadastro/Cadastro'
import NavBar from './components/NavBar'
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
     
      <BrowserRouter>
      <NavBar />
      <h1>LABORATÓRIO DE DESENVOLVIMENTO WEB</h1>
        <div className='container'>
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path ='/cadastro' element={<Cadastro />} />
        </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
