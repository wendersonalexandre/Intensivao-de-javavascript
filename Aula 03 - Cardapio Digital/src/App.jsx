import './App.css';
import Banner from "./components/Banner"
import Categorias from "./components/Categorias";   
import Cards from './components/Cards';
import { useState } from 'react';
   

function App() {
    const [numCategoriaSelecionada,setNumCategoriaSelecionada] = useState(0);
 return (  
    <div className='container'>
        <Banner/>

        <Categorias 
            numCategoriaSelecionada = {numCategoriaSelecionada} 
            setNumCategoriaSelecionada={setNumCategoriaSelecionada}
        />

        <Cards numCategoriaSelecionada = {numCategoriaSelecionada} />
    </div>

 )
}

export default App
