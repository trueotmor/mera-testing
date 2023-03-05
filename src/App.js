import React, {useCallback, useState} from 'react';
import Header from './components/Header/Header';
import MyChart from './components/Chart/Chart';
import './App.css';

function App() {
  const [stData, setStData] = useState([])
  
  const getStrategy = useCallback((strategy) => {
    setStData(strategy)
  },[]);

  console.log(stData)
  
  return (
    <div className="app">
      <div className="app__container">
        <Header getStrategy = {getStrategy}/>
        <MyChart strategy = {stData}/>
      </div>
    </div>
  );
}

export default App;
