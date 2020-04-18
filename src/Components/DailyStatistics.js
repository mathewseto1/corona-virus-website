import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {grabData} from '../Actions/grabDataAction';
import {coronaVirusCountryData} from '../Actions/grabDataAction';

class DailyStatistics extends Component{
    componentDidMount(){
        this.props.grabData()


    }
    render(){
        const SvgUrl = 'https://upload.wikimedia.org/wikipedia/commons/3/3e/Flag_of_New_Zealand.svg'
        const seperator = ' / '
        let newDate = new Date();
        let date = newDate.getDate();
        let month = newDate.getMonth() + 1;
        let year = newDate.getFullYear();

        const postItems = this.props.coronadata.map(post => (
            <div>

                <h2>Total CoronaVirus cases</h2>
                <h3>{post.total_cases}</h3>
                <h2>New Corona Viruses cases at {`${date}${seperator}${month<10?`0${month}`:`${month}`}${seperator}${year}`}</h2>
                <h3>{post.total_new_cases_today}</h3>

                {/* <div>

                   <img styles ={{height: 53, width: 36}} src={SvgUrl} alt="Logo"/> The image will not resize!
                </div> */}
                
            </div>
            
            ))
            // const postItems = this.props.testing.map(post =>(
            //     <div><h1>{post.Auckland.Number_of_Cases}</h1></div>
            // ))

        return(
            <div>
                {postItems}

            </div>
        )
    }

}

DailyStatistics.proptype ={
    grabData:PropTypes.func.isRequired,
    coronadata:PropTypes.array.isRequired
}

const mapStateToProps = state => ({

    coronadata: state.Areducer.items,
})

export default connect(mapStateToProps, {grabData,coronaVirusCountryData})(DailyStatistics)

//the 'connect' is bascially used to connect the component to the redux store.

