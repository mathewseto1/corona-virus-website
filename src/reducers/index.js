import {combineReducers} from 'redux';
import firstReducer from './firstReducer'
import mapReducer from './mapReducer'
// import {createViewportReducer} from 'redux-map-gl';

export default combineReducers({
    Areducer: firstReducer,
    MapReducer: mapReducer
    
});