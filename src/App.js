import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import DailyStatistics from './Components/DailyStatistics';
import VirusMap from './Components/VirusMap';
import store from './store';
import {NavigationBar} from './Components/NavigationBar';
//import Map from './noreduxmap/Map'
//import CoronaVirusMap from './Components/CoronaVirusMap';


// const MAPBOX_TOKEN = 'pk.eyJ1IjoibWF0aGV3MjMxIiwiYSI6ImNrOHlmNHhncjAzemUzZ2xodzlncmMyd3UifQ.xou-UcjaiM_05U0qD2aQkA';
// const latitude = 37.7577;
// const longitude = -122.4376;
// const ZOOM = 14.26;
// const styleId = 'dark-v9'

class App extends React.Component{
  
render(){
  return (
    <Provider store = {store}>
    <NavigationBar/>
    <div className="App">
      <DailyStatistics/>
      {/* <VirusMap/> */}
      {/* <Map/> */}
      {/* <CoronaVirusMap/> */}

    </div>
    </Provider> 
  );
}
}

export default App;
