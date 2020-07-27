import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import DailyStatistics from './Components/DailyStatistics';
import VirusMap from './Components/VirusMap';
import store from './store';
import {NavigationBar} from './Components/NavigationBar';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';


class App extends React.Component{
  
render(){
  return (
    <Provider store = {store}>
    
    <Router>
    <NavigationBar/>
    <div className="App">
      <Switch>
    <Route exact path="/" render={() => (
    <Redirect to= "/Statistics"/>
    )}/>
      <Route path = "/Statistics" component = {DailyStatistics}></Route>
      <Route path = "/Map" component = {VirusMap}></Route>
      </Switch>

      
    </div>
    </Router>
    </Provider> 
  );
}
}

export default App;
