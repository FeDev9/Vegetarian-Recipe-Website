import React, { Component } from 'react'
import loading from '../images/loading.gif'
import styles from '../styles/loading.module.css'

export default class Spinner extends Component {
    render() {
        return (
            <div className={styles.loadingContainer}>
                <h2>Loading...</h2>
                <img src={loading} alt="" />

            </div>
        )
    }
}
