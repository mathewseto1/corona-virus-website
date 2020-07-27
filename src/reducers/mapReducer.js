import {SELECTED_NZ_DHB} from '../Actions/types'


const intialState = {
    InitialObject: {SelectedNzDhbObject:{},loading:true, CoronaVirusCasesFetch:{}}
}

export default function(state = intialState.InitialObject, action){
    switch(action.type){
        case SELECTED_NZ_DHB:

        return{
          ...state,
          SelectedNzDhbObject: action.payload.NzDhbObject,
          loading:action.payload.booleanReturned,
          CoronaVirusCasesFetch:action.payload.data

        }
        default:
            return state;
    }

}