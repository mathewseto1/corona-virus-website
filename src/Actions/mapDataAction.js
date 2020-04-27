import {SELECTED_NZ_DHB} from './types'

export function DhbRegionSelected(NzDhbObject,booleanReturned){
    return function(dispatch){
        fetch('http://localhost:5001/corona-data-project/us-central1/helloWorld')
        .then(res => res.json())
        .then(data =>
         dispatch({
            type: SELECTED_NZ_DHB,
            payload: {NzDhbObject,booleanReturned, data}
            //this dispatches fetch post to the reducer.
        }))

    }
}