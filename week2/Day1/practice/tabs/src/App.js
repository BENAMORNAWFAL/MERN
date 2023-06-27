import './App.css';
import { useState } from  'react';
import 'bootstrap/dist/css/bootstrap.css';
import Tab1 from './components/Tab1';
import Tab2 from './components/Tab2';
import Tab3 from './components/Tab3';

function App() {
  
  const [datas, setDatas] = useState(["","",""]);

  const [x,setX] = useState(0)

  
  const setTab1 = (data) => {
  setDatas([data,datas[1],datas[2]])
  
  }

  const setTab2 = (data) => {
  setDatas([datas[0],data,datas[2]])
  
  }

  const setTab3 = (data) => {
  setDatas([datas[0],datas[1],data])
  
  }

const rendTabs = () => {
  if (x == 1){return <Tab1 setTab1={setTab1} datas={datas}/> }
  else if (x == 2){return <Tab2 setTab2={setTab2} datas={datas}/> }
  else {return <Tab3 setTab3={setTab3} datas={datas}/> }
}

  return (
    <div className="App">
      <button class="btn btn-warning" style={{margin:"5px", width:"100px"}} onClick={()=>setX(1)}>Tab 1</button>
      <button class="btn btn-warning" style={{margin:"5px", width:"100px"}} onClick={()=>setX(2)}>Tab 2</button>
      <button class="btn btn-warning"  style={{margin:"5px", width:"100px"}} onClick={()=>setX(3)}>Tab 3</button>
      <br />
      {rendTabs()}
      
    </div>
  );
}

export default App;