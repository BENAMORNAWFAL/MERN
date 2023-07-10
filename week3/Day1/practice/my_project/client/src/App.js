import './App.css';
import Detail from './components/Detail';
import Main from './components/Main';
import {Routes,Route} from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/product/:id' element={<Detail/>}/>
      </Routes>
    </div>
  );
}

export default App;
