import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './components/Header'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Home from './pages/Home';
import Pagina2 from './pages/Pagina2';
import Pagina3 from './pages/Pagina3';
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pagina2" element={<Pagina2 />} />
          <Route path='/pagina3' element={<Pagina3 />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
