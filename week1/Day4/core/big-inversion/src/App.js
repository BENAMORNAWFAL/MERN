import PersonCard from './Components/PersonCard';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <PersonCard firstName="Jane" lastName="Doe" age={ 8 } hairColor="Black" /> 
        <PersonCard firstName="John" lastName="Smith" age={ 8 } hairColor="Brown" /> 
        <PersonCard firstName="Fillmore" lastName="Millard" age={ 8 } hairColor="Brown" /> 
        <PersonCard firstName="Maria" lastName="Smith" age={ 8 } hairColor="Brown" /> 
      </header>
    </div>
  );
}

export default App;
