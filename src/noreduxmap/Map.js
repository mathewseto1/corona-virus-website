import React, { useState,Component } from 'react';
import ReactMapGL from 'react-map-gl';
import {NavigationControl,Marker, Popup, Feature, SVGOverlay} from 'react-map-gl';


const MAPBOX_TOKEN = 'pk.eyJ1IjoibWF0aGV3MjMxIiwiYSI6ImNrOHlmNHhncjAzemUzZ2xodzlncmMyd3UifQ.xou-UcjaiM_05U0qD2aQkA';
const SvgUrl = 'https://upload.wikimedia.org/wikipedia/commons/3/3e/Flag_of_New_Zealand.svg'


export class Map extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showPopup:true,
            selectedPoint:false,
            viewport: {
            latitude: -41.838875,
            longitude: 171.7799,
              zoom: 4.5,
              bearing: 0,
              pitch: 0
            }

          };

        //   this.crap = this.crap.bind(this);
          this.pleaseHelp = this.pleaseHelp.bind(this);
          this.removedPoint = this.removedPoint.bind(this);
        //   this.pleaseHelp1 = this.pleaseHelp1.bind(this);
        }

        // crap = (themouse) => {
        //     console.log(themouse.lngLat === [174.7,-36.8])
        // }

        pleaseHelp = (e) =>{
            console.log("hello")
            this.setState({selectedPoint:true})
        }

        removedPoint= (e) =>{
            this.setState({selectedPoint:false})
        }

        // pleaseHelp1 =() =>{
        //     console.log("if off it")
            
        // }

    render() {



        return (
            <div>
        <ReactMapGL
        {...this.state.viewport}
        width="100vw"
        height="100vh"
        mapStyle="mapbox://styles/mapbox/dark-v9"
        onViewportChange={viewport => this.setState({viewport})}
        mapboxApiAccessToken={MAPBOX_TOKEN}
        // onHover = {themouse => themouse === }
        // onHover = {themouse => this.crap(themouse)}
        >
        
        {/* {36.8485° S, 174.7633° E} */}
        {/* <Marker latitude={-36.8485} longitude={174.76667}/> */}
        {/* <Marker longitude={174.7633} latitude={-36.8485}>
        <div style={{ color: "white" }}>You are here</div>
        </Marker> */}

        {/* {this.state.showPopup && <Popup
          latitude={-36.848}
          longitude={174.7633}
          tipSize = {10}
          closeButton={true}
          closeOnClick={false}
          onClose={() => this.setState({showPopup: false})}
          anchor="top" >
          <div>You are here</div>
        </Popup>} */}

        {/* <div onMouseEnter={() => this.pleaseHelp()}>
        <Marker longitude={174.7633} latitude={-36.8485} >
        <div><img src="../../src/svg/apple.svg"></img></div>
        </Marker>
        </div> */}

{/* idea 1 is to use classnames to show and hide the popups. */}
        {/* <div onMouseEnter={() => this.pleaseHelp()} onMouseOut ={() => this.pleaseHelp1()}>
        <Popup longitude={174.7633} latitude={-36.8485}
        //className = {console.log(Popup)}
        tipSize = {10}
        closeButton={false}
        closeOnClick={false}
        onClose={() => this.setState({showPopup: false})}
        anchor="top">
        <div>You are here</div>
        </Popup>


        </div> */}

        <Marker longitude={174.7633} latitude={-36.8485}>
        <button onMouseEnter = {(e) => this.pleaseHelp()}
        onMouseLeave = {(e) => this.removedPoint()}>
            <img src={SvgUrl} height ={18} width ={20}></img>
        </button>
        </Marker>
        {this.state.selectedPoint&&(<Popup longitude={174.7633} latitude={-36.8485}><div>Auckland</div></Popup>)}

        {/* {null && <Popup longitude={174.7633} latitude={-36.8485}><div>Auckland</div></Popup>} */}


        </ReactMapGL>
            </div>
        )
    }
}

export default Map