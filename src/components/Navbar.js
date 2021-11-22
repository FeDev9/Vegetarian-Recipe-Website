import React, { Component } from 'react';
import styles from '../styles/navbar.module.css'
import { FaSistrix } from 'react-icons/fa'
import { searchRecipe, fetchRecipes, setLoading, setLoaded } from '../actions'
import { connect } from 'react-redux';

export class Navbar extends Component {

    render() {
        const onSubmit = e => {
            e.preventDefault();
            this.props.fetchRecipes(this.props.text)
            this.props.setLoading();
            this.props.setLoaded(true)
        }

        return (
            <form className={styles.nav} onSubmit={onSubmit} >

                <input className={styles.searchBar} type="text" placeholder='Search...' onChange={(e) => { this.props.searchRecipe(e.target.value)/*dispatch(searchRecipe(e.target.value)); setSearchInput(e.target.value) }}  */ }} />
                <button type='submit' className={styles.btn} > <FaSistrix /></button>

            </form >


        )
    }
}

const mapStateToProps = state => ({
    text: state.searchReducer.text
});

export default connect(
    mapStateToProps,
    { searchRecipe, fetchRecipes, setLoading, setLoaded }
)(Navbar)
