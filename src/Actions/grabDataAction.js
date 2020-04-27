import {FETCH_DATA,COUNTRY_DATA} from './types'

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


//this is not needed as the fetch is in the other mapdataaction     .
// export function coronaVirusCountryData(){
//     return function(){
//         fetch('http://localhost:5001/corona-data-project/us-central1/helloWorld')
//         .then(res => res.json())
//         .then(data => {console.log(data)})

//     }
// }


// export function coronaVirusCountryData(){
//     return function(dispatch){
//         fetch('http://localhost:5001/corona-data-project/us-central1/helloWorld')
//         .then(res => res.json())
//         .then(data => dispatch({
//             type: COUNTRY_DATA,
//             payload: data
//             //this dispatches fetch post to the reducer.
//         }))

//     }
// }

// export function coronaVirusCountryData(){
//     return function(dispatch){
//         fetch('http://localhost:5001/corona-data-project/us-central1/helloWorld')
//         .then(res => res.json())
//         .then(data => console.log(data.Auckland.Number_of_Cases)
//         )

//     }
// }