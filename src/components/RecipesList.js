import React, { Component } from 'react'
import { connect } from 'react-redux';
import styles from '../styles/recipesList.module.css'
import { Link } from 'react-router-dom';

export class RecipesList extends Component {
    render() {

        const { recipes } = this.props;
        return (
            <>

                {
                    recipes.length > 0
                        ? <>
                            < div className={styles.recipesContainer} >
                                {recipes.map(recipe => (
                                    <Link to={`/recipes/${recipe.id}`} className={styles.recipe} key={recipe.id}>
                                        <img src={recipe.image} alt="" />
                                        <h5>{recipe.title}</h5>
                                    </Link>))}
                            </div>
                        </>
                        : < h1 className={styles.noRecipes} > There are no recipes with the specified name</ h1 >
                }
            </>
        )
    }
}

const mapStateToProps = state => ({
    recipes: state.searchReducer.recipes
})

export default connect(mapStateToProps)(RecipesList)