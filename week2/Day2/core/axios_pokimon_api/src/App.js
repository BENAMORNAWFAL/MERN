import './App.css';
import {useState} from "react"
import axios from 'axios'

function App() {

  const [allpokimon,setAllPokimon] = useState([])
    
  const fetchPokimon=()=>{
      
    axios.get('https://pokeapi.co/api/v2/pokemon/?limit=807')
    .then((pokimonResponse)=>{return pokimonResponse.data})
    .then((pokimonRes)=>{console.log(pokimonRes);setAllPokimon(pokimonRes.results);})
    .catch((error)=>{console.log("Error ✖✖✖✖",error)})    
  }



  return (
    <div className="App">
      <h1>Pokimon API</h1>

      <button onClick={()=>{fetchPokimon()}}>Pokimon</button>
      <br />
      
        {console.log(allpokimon)}
        {allpokimon.map((p,idx)=>{return(<li key={idx}>{p.name}</li>)})}
        
      
      
    </div>
  );
}

export default App;
