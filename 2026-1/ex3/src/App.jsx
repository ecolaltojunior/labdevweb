
import './App.css'
import Form from './pages/Form'
import { ThemeProvider } from './context/ThemeContext'
function App() {
  

  return (
    <>
    <ThemeProvider>
      <Form />
    </ThemeProvider>
    </>
  )
}

export default App
