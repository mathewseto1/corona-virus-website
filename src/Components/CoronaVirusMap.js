// import React, { Component } from 'react';
// import {connect} from 'react-redux';
// import {coronaVirusCountryData} from '../Actions/grabDataAction';
// import {mapBoxData} from '../Actions/mapDataAction'
// import ReactMapGL from 'react-map-gl';

// export class CoronaVirusMap extends Component{


//     componentDidMount(){

//         const { token, longitude, latitude, zoom, styleID } = this.props;
//         const mapConfig = {
//             container: 'map',
//             style: `mapbox://styles/${ styleID }`,
//             center: [longitude, latitude],
//             zoom: zoom,
//           };
//           mapboxgl.accessToken = token
//           this.map = new mapboxgl.Map(mapConfig);

//           this.map.on('load', () => {console.log("hello there")});
//         }
    


//     render() {

//         return (
//             <div id ='map'>
//                 {this.map}
//             </div>
            
//         )}
// }

// const mapStateToProps = state => ({
// })

// export default connect(mapStateToProps, {})(CoronaVirusMap)
