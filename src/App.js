import React, {useCallback, useState, useEffect} from 'react';
import Header from './components/Header/Header';
import MyChart from './components/Chart/Chart';
import { getStrategies } from './components/api/api';
import { adaptData } from './utils/adapt';
import './App.css';

function App() {
  const [stData, setStData] = useState([])
  const [fullStData, setFullStData] = useState({})
  
  const getStrategy = useCallback((strategy) => {
    setStData(strategy)
  },[]);

  useEffect(() => {
    getStrategies(1).then(data => {
      setStData(adaptData(data).data_usd)
      setFullStData(adaptData(data))
    });
}, [])
  
  return (
    <div className="app">
      <div className="app__container">
        <Header getStrategy = {getStrategy} fullData = {fullStData}/>
        <MyChart strategy = {stData}/>
      </div>
    </div>
  );
}

export default App;
