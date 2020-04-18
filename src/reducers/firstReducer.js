import {FETCH_DATA,COUNTRY_DATA} from '../Actions/types'


const intialState = {
    items: [],
    items1: [],
    item: {}
}

export default function(state = intialState, action){
    switch(action.type){
        case FETCH_DATA:
        return{
          ...state,
          items: action.payload
        }
        case COUNTRY_DATA:
            return{
                ...state,
                items1: action.payload
            }
        default:
            return state;
    }

}