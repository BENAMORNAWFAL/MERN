import './App.css';
import { useState } from 'react';
import {useNavigate,Routes,Route,Link} from 'react-router-dom';
import Starwars from './components/Starwars';




function App() {

  const [data,setData]=useState("people");
  const [id,setId]=useState(1);
  const navigate=useNavigate();
  
  const submitting=(e)=>{
    e.preventDefault();
    navigate("/"+data+"/"+id)
  }

  return (
    <div className="App">
      <div>
        <form onSubmit={submitting}>
          <label>Search for: </label>
          <select name="type" id="" onChange={(e)=>{setData(e.target.value)}} value={data}>
            <option value="people">people</option>
            <option value="planets">planets</option>
          </select>
          <label >ID: </label>
          <input type="text" onChange={(e)=>{setId(e.target.value)}} value={id}/>
          <button>Search</button>
        </form>
      </div>
      <div>
        <Routes>
          <Route path='/' element={<h1>Hello Put an Star</h1>}/>
          <Route path='/:data/:id' element={<Starwars />}/>
          <Route path='/error' element={<h1>Page Not Found</h1>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
