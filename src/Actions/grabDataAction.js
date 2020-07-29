import {FETCH_DATA} from './types'

export function grabData(){
    return function(dispatch){
        fetch('https://api.thevirustracker.com/free-api?countryTotal=NZ')
        .then(res => res.json())
        .then(data => dispatch({
            type: FETCH_DATA,
            payload: data.countrydata
            //this dispatches fetch post to the reducer.
        }))

    }
}