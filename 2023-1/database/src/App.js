import './App.css';
import { useState } from 'react'
import { db } from './firebase/config';
import { collection, addDoc } from 'firebase/firestore';
function App() {
    const [nome, setNome] = useState("")
    const [preco, setPreco] = useState("")

    const handleSubmit = async (e)=>{
      e.preventDefault()
      try {
        const docRef = await addDoc(collection(db, "produtos"), {
          name: nome,
          price: preco,
          
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
      setNome("")
      setPreco("")
    }
  return (
    <div className="App">
     <div className="App_form">
        <form onSubmit={handleSubmit}>
          <label>
            <span>Nome Produto</span>
            <input type='text' name='nome' id='nome' required value={nome} onChange={(e) => setNome(e.target.value)}/>
          </label>
          <label>
            <span>Preço</span>
            <input type='text' name='preco' id='preco' required value={preco} onChange={(e) => setPreco(e.target.value)}/>
          </label>
          <button type='submit'>Cadastrar</button>
        </form>
    </div>
    </div>
  );
}

export default App;
