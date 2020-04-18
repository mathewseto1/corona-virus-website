import React, { Component } from 'react';
import {connect} from 'react-redux';
import {coronaVirusCountryData} from '../Actions/grabDataAction';
import {mapBoxData} from '../Actions/mapDataAction'
import ReactMapGL from 'react-map-gl';

const MAPBOX_TOKEN = 'pk.eyJ1IjoibWF0aGV3MjMxIiwiYSI6ImNrOHlmNHhncjAzemUzZ2xodzlncmMyd3UifQ.xou-UcjaiM_05U0qD2aQkA';

export class VirusMap extends Component{

    componentDidMount(){

        // this.props.coronaVirusCountryData()
        this.props.mapBoxData()
    }


    render() {
        
        // const postItems = this.props.testing.map(post =>(
        //     <div>
        //         <h1>{post.Auckland.Number_of_Cases}</h1>
        //     </div>
    
        // ))
        const onChangeViewport = {...this.props.hello} //allows you to scroll and stuff doesnt work

        return (
            
            <div>
                {/* <ReactMapGL mapboxApiAccessToken={'pk.eyJ1IjoibWF0aGV3MjMxIiwiYSI6ImNrOHlmNHhncjAzemUzZ2xodzlncmMyd3UifQ.xou-UcjaiM_05U0qD2aQkA'} width="100vw"
      height="100vh" mapStyle="mapbox://styles/mapbox/dark-v9" latitude = {37.7577} longitude = {-122.4376} zoom = {18}/> */}

                <ReactMapGL {...this.props.hello} width="100vw" height="100vh" mapStyle="mapbox://styles/mapbox/dark-v9" mapboxApiAccessToken={MAPBOX_TOKEN}/>
                {/* {postItems} */}
            </div>
        )
    }
}

const mapStateToProps = state => ({

    testing: state.Areducer.items1,
    hello : state.MapReducer.mapBoxViewPort
})

export default connect(mapStateToProps, {coronaVirusCountryData,mapBoxData})(VirusMap)
