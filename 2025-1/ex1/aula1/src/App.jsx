import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Form from './pages/Form'
import Header from './components/Header'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Footer from './components/Footer'
function App() {
  

  return (
    <>
      <BrowserRouter>
        <Header />
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/form' element={<Form />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
