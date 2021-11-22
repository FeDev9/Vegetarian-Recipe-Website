import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import styles from '../styles/recipe.module.css'

import { fetchRecipe, setLoading } from '../actions'

import Spinner from '../components/Spinner'

export class Recipe extends Component {

    componentDidMount() {
        this.props.fetchRecipe(this.props.id);
        this.props.setLoading();
    }


    render() {

        console.log(this.props)
        const { loading, recipe } = this.props;

        console.log(recipe)
        let RecipeInfo = (
            <div className={styles.recipeContainer}>
                {/* <img src={recipe.image} alt="" />
                <h2>{recipe.title}</h2> */}
                <div className={styles.propertyGrid}>
                    <div className={styles.propertyComponent}>

                    </div>
                </div>
            </div>
        )


        return (
            <div>

            </div>
        )
    }
}

const mapStateToProps = state => ({
    loading: state.searchReducer.loading,
    recipe: state.searchReducer.recipe
});

export default connect(
    mapStateToProps,
    { fetchRecipe, setLoading }
)(Recipe);