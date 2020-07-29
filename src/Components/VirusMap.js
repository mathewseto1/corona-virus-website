import React from 'react';
import {Component} from 'react';
import {connect} from 'react-redux';

import {DhbRegionSelected} from '../Actions/mapDataAction'
import ReactMapGL from 'react-map-gl';
import {Marker, Popup} from 'react-map-gl';
import {HealthBoardData,SelectedDhbRegion} from '../Json files/NzDhb'



const MAPBOX_TOKEN = process.env.REACT_APP_API_KEY

const SvgUrl = 'https://upload.wikimedia.org/wikipedia/commons/3/3e/Flag_of_New_Zealand.svg'


export class VirusMap extends Component{
    state = {
        viewport: {
          longitude: 174.4376,
          latitude: -37.7577,
          zoom: 5,
          width:"100vw",
          height:"100vh"
        },
        mounted: false
      }
    
    componentDidMount(){
        this.setState({ mounted: true })
        this.props.DhbRegionSelected(this.InitialLoad(HealthBoardData),false)


        
    }

    InitialLoad(HealthBoardData){
        const NZDistrictHealthRegions = (HealthBoardData["NZ DHB"].map((item,index) =>(
            Object.keys(item)[0]
            )))
        var IntialListOfDhbSelected = [];

        NZDistrictHealthRegions.forEach(function(DhbRegion) {
            var singleObj = {};
            singleObj[DhbRegion] = false 
            IntialListOfDhbSelected.push(singleObj);
            });
            SelectedDhbRegion.DhbSelected = IntialListOfDhbSelected
        return SelectedDhbRegion
    }
 
    mouseSelected = (DistrictHealthBoardObject,RegionindexSelected,DhbRegion) =>{
        DistrictHealthBoardObject.DhbSelected[RegionindexSelected][DhbRegion] = true
        this.props.DhbRegionSelected(DistrictHealthBoardObject)
    }

    mouseUnselected = (DistrictHealthBoardObject,RegionindexSelected,DhbRegion) =>{
        DistrictHealthBoardObject.DhbSelected[RegionindexSelected][DhbRegion] = false
        this.props.DhbRegionSelected(DistrictHealthBoardObject,false)
    }


    render() {
        
        const { mounted } = this.state

        //var DhbRegionObject = {"DhbSelected":[]}




//the bellow code is used to setup this object {"DhbSelected":[]} to this {"DhbSelected":[{"Auckland":false},{"Bay of Plenty":false}...]}


        const content = this.props.loading ? '....loading' : 

            HealthBoardData["NZ DHB"].map((item,index) =>(
            <div>



            <Marker longitude={item[Object.keys(item)[0]].longitude} latitude={item[Object.keys(item)[0]].latitude}>

            <button onMouseEnter = {(e) => this.mouseSelected(this.props.NzDhbRegion,index,Object.keys(item)[0])}
            onMouseLeave ={(e)=>this.mouseUnselected(this.props.NzDhbRegion,index,Object.keys(item)[0])}>
                <img alt = "" src={SvgUrl} height ={18} width ={20}></img>
            </button>
            </Marker>

            {this.props.NzDhbRegion.DhbSelected[index][Object.keys(item)[0]] ? <Popup longitude={item[Object.keys(item)[0]].longitude} latitude={item[Object.keys(item)[0]].latitude}><div>{Object.keys(item)}</div>
            <div>{"Number of Cases: "+ this.props.CoronaVirusDataInNZ[0][Object.keys(item)].Number_of_Cases}</div></Popup>:null}
            </div>
        ))
        
        

        return (
            
            <div>

            <ReactMapGL {...this.state.viewport} mapStyle="mapbox://styles/mapbox/dark-v9" mapboxApiAccessToken={MAPBOX_TOKEN} onViewportChange={(viewport) => {if (mounted) { this.setState({ viewport })}}}>
            {content}   
            </ReactMapGL>

            </div>
        )
    }


}

const mapStateToProps = state => ({

    CoronaVirusDataInNZ: state.MapReducer.CoronaVirusCasesFetch,
    loading: state.MapReducer.loading,
    NzDhbRegion : state.MapReducer.SelectedNzDhbObject

})

export default connect(mapStateToProps, {DhbRegionSelected})(VirusMap)
