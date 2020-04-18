import {MAP_BOX_VIEWPORT} from '../Actions/types'


const intialState = {
    mapBoxViewPort: {}
}

export default function(state = intialState, action){
    switch(action.type){
        case MAP_BOX_VIEWPORT:
        return{
          state,
          mapBoxViewPort: action.payload
        }
        default:
            return state;
    }

}