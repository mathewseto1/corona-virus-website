import {MAP_BOX_VIEWPORT} from './types'

export function mapBoxData(){
    return function(dispatch){
        const viewport = {
            latitude: -41.838875,
            longitude: 171.7799,
            zoom: 4.2,
            bearing: 0,
            pitch: 0
        }
         dispatch({
            type: MAP_BOX_VIEWPORT,
            payload: viewport
            //this dispatches fetch post to the reducer.
        })

    }
}