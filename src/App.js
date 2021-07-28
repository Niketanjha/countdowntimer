import { useState } from 'react';
import './App.css';
import Clock from './Components/Clock';

function App() {
  const [getCounterNumber,setCounterNumber]=useState(0);
  const [getGlobalCounterNumber,setGlobalCounterNumber]=useState(0);
  function getData(){
    let temp=[...Array(getCounterNumber).keys()]
    return temp; 
  }
  function addCounter(){
    setCounterNumber((getCounterNumber)=>getCounterNumber+1); 
    console.log(getCounterNumber);
  }
  return (
    <div className="mainClass">
      <div className="topBar">
        <button 
        onClick={addCounter}
        className="btn btn-lg btn-block btn-dark">Add Counter</button>
        <button className="btn btn-lg btn-block btn-dark">{getGlobalCounterNumber}</button>
      </div>
      <div className="widgets">
        {getData().map((o)=>{
          return(
          <div key={o}><Clock 
            getGlobalCounterNumber={getGlobalCounterNumber}
            setGlobalCounterNumber={setGlobalCounterNumber}
            />
          </div>
          );
        })}
      </div>
    </div>    
  );
}

export default App;
