import React, { Component } from 'react'
import Navbar from '../components/Navbar'
import styles from '../styles/homepage.module.css'
import BottomBar from '../components/BottomBar'

import { connect } from 'react-redux'
import Spinner from '../components/Spinner'
import RecipesList from '../components/RecipesList'
import image from '../images/homepage.jpg'
import image1 from '../images/homepage-1.jpg'
import image2 from '../images/homepage-2.jpg'



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
                                    <h1 className={styles.homeTitle}>Look through many vegetarian recipes!</h1>
                                    <div className={styles.images}>
                                        <img src={image} alt="" />
                                        <div className={styles.rightCol}>
                                            <img src={image1} alt="" />
                                            <img src={image2} alt="" />
                                        </div>
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
