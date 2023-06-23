import React from 'react';
import './App.css';
import Header from './Components/Headder';
import Navigation from './Components/Navigation';
import Main from './Components/Main';

 
                
function App() {
  return (
    <div className="app">
        <Header />
        <div className='block1'><Navigation />
          <Main/>
        </div>
        
        
    </div>
  );
}
                
export default App;


