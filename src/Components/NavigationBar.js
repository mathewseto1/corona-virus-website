import React, { Component } from 'react';
import styles from '../styles/NavigationBar.module.css';
import { Link } from 'react-router-dom';

export class NavigationBar extends Component {
    render() {
        return (
            <div className = {styles.Join}>
                <ul className = {styles.Navbar}>
                    <Link to = '/Statistics'>
                    <li className = {styles.item}>Covid-19 Statistics</li>
                    </Link>
                    
                    <Link to = '/Map'>
                    <li className = {styles.item}>Covid-19 Map</li>
                    </Link>
                    

                    {/* <li className = {styles.item}>Covid-19 News</li> */}
                </ul>
            </div>
        )
    }
}

export default NavigationBar
