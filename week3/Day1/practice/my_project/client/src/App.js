import './App.css';
import Detail from './components/Detail';
import Main from './components/Main';
import {Routes,Route} from 'react-router-dom'
import Update from './components/Update';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/product/:id' element={<Detail/>}/>
        <Route path="/product/:id/edit" element={<Update/>}/>
      </Routes>
    </div>
  );
}

export default App;
