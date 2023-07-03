import './App.css';
import {Routes,Route} from 'react-router-dom';
import Home from './components/Home';
import Number from './components/Number';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<Home/>} />
        <Route path="/:id" element={<Number/>} />
        <Route path="/:id/:colortext/:colorback" element={<Number/>} />
      </Routes>
    </div>
  );
}

export default App;
