import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './components/Header'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Page2 from './pages/Page2'
function App() {
  

  return (
    <>
      <BrowserRouter>
        <Header />
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/page2' element={<Page2 />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
