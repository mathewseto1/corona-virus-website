import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {grabData} from '../Actions/grabDataAction';

import styles from '../styles/CoronaData.module.css'


class DailyStatistics extends Component{
    componentDidMount(){
        this.props.grabData()


    }
    render(){
        //const SvgUrl = 'https://upload.wikimedia.org/wikipedia/commons/3/3e/Flag_of_New_Zealand.svg'
        const seperator = ' / '
        let newDate = new Date();
        let date = newDate.getDate();
        let month = newDate.getMonth() + 1;
        let year = newDate.getFullYear();

        const postItems = this.props.coronadata.map(post => (

        <div className ={styles.makegrid}>
            <div className ={styles.block}>
                <h2>Total CoronaVirus cases</h2>
                <span>{post.total_cases}</span>
            </div>

            <div className ={styles.block}>
                <h2>New Corona Viruses cases at {`${date}${seperator}${month<10?`0${month}`:`${month}`}${seperator}${year}`}</h2>
                <span>{post.total_new_cases_today}</span>
            </div>    

            <div className ={styles.block}>    
                <h2>Total Deaths</h2>
                <span>{post.total_deaths}</span>
            </div>

            <div className ={styles.block}>    
                <h2>Total Recovered</h2>
                <span>{post.total_recovered}</span>
            </div>    

            <div className ={styles.block}>    
                <h2>Active Coronavirus cases</h2>
                <span>{post.total_active_cases}</span>
            </div>

            <div className ={styles.block}>    
                <h2>Deaths Today</h2>
                <span>{post.total_new_deaths_today}</span>
            </div>

        </div>
            
        ))

        return(
            <div className = {styles.AContainer}>
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

