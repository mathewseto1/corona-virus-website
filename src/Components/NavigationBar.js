import React, { Component } from 'react';
import styles from '../styles/NavigationBar.module.css';

export class NavigationBar extends Component {
    render() {
        return (
            <div>
                <ul className = {styles.Navbar}>
                    <li className = {styles.item}>Home Page</li>
                    <li className = {styles.item}>Covid-19 rules</li>
                    <li className = {styles.item}>Covid-19 News</li>
                </ul>
            </div>
        )
    }
}

export default NavigationBar
