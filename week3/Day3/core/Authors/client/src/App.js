import './App.css';
import Main from './components/Main';
import {Routes,Route} from 'react-router-dom'
import Update from './components/Update';
import AddNew from './components/AddNew';
import 'bootstrap/dist/css/bootstrap.css';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/api/Author/new' element={<AddNew/>}/>
        <Route path='/' element={<Main/>}/>
        <Route path='/api/Author/:id' element={<Update/>}/>
      </Routes>
    </div>
  );
}

export default App;
