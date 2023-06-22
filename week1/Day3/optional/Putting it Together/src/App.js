
import './App.css';
import PersonCard from "./components/PersonCard"

const Arr=[
  {firstName:"Jane", lastName:"Doe",age:25,hairColor:"Black"},
  {firstName:"John", lastName:"Smith",age:88,hairColor:"Brown"},
  {firstName:"Millard", lastName:"Fillmore",age:50,hairColor:"Brown"},
  {firstName:"Maria", lastName:"Smith",age:62,hairColor:"Brown"}
]


function App() {
  return (
    <div className="App">
      <header className="App-header">
        {Arr.map((person)=>{return<PersonCard person={person}  />})
        
        }
        
      </header>
    </div>
  );
}

export default App;
