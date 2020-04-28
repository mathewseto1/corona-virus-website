import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {grabData} from '../Actions/grabDataAction';
import {coronaVirusCountryData} from '../Actions/grabDataAction';
import styles from '../styles/CoronaData.module.css'

class DailyStatistics extends Component{
    componentDidMount(){
        this.props.grabData()


    }
    render(){
        console.log(this.props.coronadata)
        const SvgUrl = 'https://upload.wikimedia.org/wikipedia/commons/3/3e/Flag_of_New_Zealand.svg'
        const seperator = ' / '
        let newDate = new Date();
        let date = newDate.getDate();
        let month = newDate.getMonth() + 1;
        let year = newDate.getFullYear();

        const postItems = this.props.coronadata.map(post => (

        <div>    
            <div>
                <h2>Total CoronaVirus cases</h2>
                <span>{post.total_cases}</span>
            </div>

            <div>
                <h2>New Corona Viruses cases at {`${date}${seperator}${month<10?`0${month}`:`${month}`}${seperator}${year}`}</h2>
                <span>{post.total_new_cases_today}</span>
            </div>    

            <div>    
                <h2>Total Deaths</h2>
                <span>{post.total_deaths}</span>
            </div>

            <div>    
                <h2>Total Recovered</h2>
                <span>{post.total_recovered}</span>
            </div>    

            <div>    
                <h2>Active Coronavirus cases</h2>
                <span>{post.total_active_cases}</span>
            </div>

        </div>    
        ))
            // const postItems = this.props.testing.map(post =>(
            //     <div><h1>{post.Auckland.Number_of_Cases}</h1></div>
            // ))

        return(
            <div className = {styles.Container}>
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

export default connect(mapStateToProps, {grabData})(DailyStatistics)

//the 'connect' is bascially used to connect the component to the redux store.

