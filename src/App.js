import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import DailyStatistics from './Components/DailyStatistics';
import VirusMap from './Components/VirusMap';
import store from './store';
import {NavigationBar} from './Components/NavigationBar';
import Map from './noreduxmap/Map'


class App extends React.Component{
  
render(){
  return (
    <Provider store = {store}>
    <NavigationBar/>
    <div className="App">
      {/* <DailyStatistics/> */}
      {/* <VirusMap/> */}
      <Map/>

    </div>
    </Provider> 
  );
}
}

export default App;
