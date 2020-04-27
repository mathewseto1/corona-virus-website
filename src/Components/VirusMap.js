import React from 'react';
import {Component, useState} from 'react';
import {connect} from 'react-redux';
import {coronaVirusCountryData} from '../Actions/grabDataAction';
import {DhbRegionSelected} from '../Actions/mapDataAction'
import ReactMapGL from 'react-map-gl';
import {Marker, Popup} from 'react-map-gl';
import {HealthBoardData,SelectedDhbRegion} from '../Json files/NzDhb'

const MAPBOX_TOKEN = 'pk.eyJ1IjoibWF0aGV3MjMxIiwiYSI6ImNrOHlmNHhncjAzemUzZ2xodzlncmMyd3UifQ.xou-UcjaiM_05U0qD2aQkA';
const SvgUrl = 'https://upload.wikimedia.org/wikipedia/commons/3/3e/Flag_of_New_Zealand.svg'
//const obj = [{"Auckland":true},{"Bay of Plenty":false},{"Canterbury":false}]

//const [SelectedItem,setSelectedItem] = useState(null)


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
    // componentDidUpdate(){
    //     this.props.DhbRegionSelected(this.InitialLoad(HealthBoardData))
    // }
    // componentWillMount(){
    //     this.props.DhbRegionSelected(this.InitialLoad(HealthBoardData))
    // }

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

    // CreateIntialState(EmptyDhbObject,HealthBoardObject){
        // console.log(EmptyDhbObject)
        // var HealthBoard = Object.keys(item)[0]HealthBoardObject.

        // HealthBoardObject.forEach(element => {console.log("hello")})
        // })
        //console.log(HealthBoardObject)
        // HealthBoardObject.forEach(item =>console.log(item))






    //}


    render() {
        
        // {console.log(this.props.NzDhbRegion.DhbSelected)}
        const { mounted } = this.state

        var DhbRegionObject = {"DhbSelected":[]}

        // var IntialSelectedDhbRegion = () => this.CreateIntialState(DhbRegionObject,HealthBoardData["NZ DHB"])
        
            // DhbRegionObject.DhbSelected.push(EmptyObject["a"] =1)
            // DhbRegionObject.DhbSelected.push(EmptyObject["Auckland"] = false)
        

        // console.log(DhbRegionObject)


//the bellow code is used to setup this object {"DhbSelected":[]} to this {"DhbSelected":[{"Auckland":false},{"Bay of Plenty":false}...]}

        // const NZDistrictHealthRegions = (HealthBoardData["NZ DHB"].map((item,index) =>(
        //     Object.keys(item)[0]
        //     )))
        
        // var IntialListOfDhbSelected = [];

        // NZDistrictHealthRegions.forEach(function(DhbRegion) {
        //     var singleObj = {};
        //     singleObj[DhbRegion] = false 
        //     IntialListOfDhbSelected.push(singleObj);
        // });

// =========================================================================================================
// ==================================================

        const content = this.props.loading ? '....loading' : 
        // const content =(HealthBoardData["NZ DHB"].map((item,index) =>(
        // const NZDistrictHealthMarker = (HealthBoardData["NZ DHB"].map((item,index) =>(
            HealthBoardData["NZ DHB"].map((item,index) =>(
            <div>
            {/* {console.log(this.props.CoronaVirusDataInNZ)} */}
            {/* {item[Object.keys(item)[0]].coronavirusNumbers =} */}
            {/* {console.log(this.props.CoronaVirusDataInNZ[Object.keys(item)])} */}
            
            {/* {console.log(this.props.CoronaVirusDataInNZ[0][Object.keys(item)].Number_of_Cases)} */}

            {/* {console.log(Object.keys(item))} */}
            {/* {console.log(this.props.CoronaVirusDataInNZ[Object.keys(item)[0]])} */}


            {/* {console.log(Object.keys(item)[0])} */}
            {/* {console.log(obj[index][Object.keys(item)[0]])} */}
            <Marker longitude={item[Object.keys(item)[0]].longitude} latitude={item[Object.keys(item)[0]].latitude}>
            {/* <button onMouseEnter = {(e) => this.mouseSelected(item[Object.keys(item)[0]])}> */}
            <button onMouseEnter = {(e) => this.mouseSelected(this.props.NzDhbRegion,index,Object.keys(item)[0])}
            onMouseLeave ={(e)=>this.mouseUnselected(this.props.NzDhbRegion,index,Object.keys(item)[0])}>
                <img src={SvgUrl} height ={18} width ={20}></img>
            </button>
            </Marker>

            {/* {console.log([Object.keys(item)[0]])}
            {console.log(this.props.NzDhbRegion.DhbSelected[index])} */}

            {/* {<Popup longitude={item[Object.keys(item)[0]].longitude} latitude={item[Object.keys(item)[0]].latitude}><div>Auckland</div></Popup>} */}
            {this.props.NzDhbRegion.DhbSelected[index][Object.keys(item)[0]] ? <Popup longitude={item[Object.keys(item)[0]].longitude} latitude={item[Object.keys(item)[0]].latitude}><div>{Object.keys(item)}</div>
            <div>{"Number of Cases: "+ this.props.CoronaVirusDataInNZ[0][Object.keys(item)].Number_of_Cases}</div></Popup>:null}
            </div>
        ))
        
        

        // const NZDistrictHealthMarker = (HealthBoardData["NZ DHB"].map(item =>(
        //     (item[Object.keys(item)[0]].longitude))
            
        // ))

        return (
            
            <div>
            {/* {console.log(NZDistrictHealthMarker)} */}
            <ReactMapGL {...this.state.viewport} mapStyle="mapbox://styles/mapbox/dark-v9" mapboxApiAccessToken={MAPBOX_TOKEN} onViewportChange={(viewport) => {if (mounted) { this.setState({ viewport })}}}>
            {content}   
            </ReactMapGL>
            {/* <div>hello</div> */}
            </div>
        )
    }


// render(){

//     return(
//     <div>
//     <button><div>click me</div></button>
//     hello
//     </div>)

// }

}

const mapStateToProps = state => ({

    CoronaVirusDataInNZ: state.MapReducer.CoronaVirusCasesFetch,
    loading: state.MapReducer.loading,
    NzDhbRegion : state.MapReducer.SelectedNzDhbObject

})

export default connect(mapStateToProps, {DhbRegionSelected})(VirusMap)
