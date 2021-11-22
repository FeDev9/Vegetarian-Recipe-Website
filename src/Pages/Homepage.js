import React, { Component, useEffect } from 'react'
import Navbar from '../components/Navbar'
import styles from '../styles/homepage.module.css'
import BottomBar from '../components/BottomBar'

import { connect, useSelector } from 'react-redux'
import Spinner from '../components/Spinner'
import RecipesList from '../components/RecipesList'



export class Homepage extends Component {



    render() {


        const { loading, loaded } = this.props


        return (
            <>
                <Navbar />

                {
                    loading ? <Spinner /> : (
                        loaded ?
                            <section className={styles.homeContainer}>
                                <div className={styles.recipesContainer}>
                                    <RecipesList />
                                </div>
                            </section>
                            :
                            <>
                                <section className={styles.homeContainer}>
                                    <div className={styles.recipesContainer}>
                                        <h1 className={styles.homeTitle}>Search a recipe</h1>
                                    </div>

                                </section>
                            </>
                    )
                }

                <BottomBar />

            </>
        )
    }
}

const mapStateToProps = state => ({
    loading: state.searchReducer.loading,
    loaded: state.searchReducer.loaded
});

export default connect(mapStateToProps)(Homepage)
