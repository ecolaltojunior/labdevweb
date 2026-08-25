import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Form from './pages/Form'
function App() {
  
  return (
    <>
      <BrowserRouter>
        <Header />
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contato' element={<Form />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
