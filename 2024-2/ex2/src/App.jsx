import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Header from './components/Header'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import Page2 from './pages/Page2'
import Page3 from './pages/Page3'
import Footer from './components/Footer'
function App() {
  
  return (
    <>
      <BrowserRouter>
        <Header />
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/page2' element={<Page2 />} />
          <Route path='/page3' element={<Page3 />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
