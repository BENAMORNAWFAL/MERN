import './App.css';
import {useState} from "react"


function App() {

    const [allpokimon,setAllPokimon] = useState([])
    
    const fetchPokimon=()=>{
    fetch("https://pokeapi.co/api/v2/pokemon/?limit=807")
    .then((pokimonResponse)=>{return pokimonResponse.json()})
    .then((pokimonRes)=>{console.log(pokimonRes);
      setAllPokimon(pokimonRes.results);
      })
    .catch((error)=>{console.log("Error ✖✖✖✖",error)})
    
  }



  return (
    <div className="App">
      <h1>Pokimon API</h1>

      <button onClick={()=>{fetchPokimon()}}>Pokimon</button>
      <br />
      
        {console.log(allpokimon)}
        {allpokimon.map((p,idx)=>{return(<li >{p.name}</li>)})}
        
      
      
    </div>
  );
}

export default App;
