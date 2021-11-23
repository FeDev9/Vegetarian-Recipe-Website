import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styles from '../styles/recipe.module.css'
import { useParams } from 'react-router';
import { useEffect } from 'react';
import { AiFillHome } from 'react-icons/ai'



const Recipe = () => {

    const param = useParams()
    const [recipe, setRecipe] = useState({})



    useEffect(() => {

        async function fetchAPI() {
            const response = await fetch(`https://api.spoonacular.com/recipes/${param.id}/information?includeNutrition=true&apiKey=${process.env.REACT_APP_API_KEY}`)
            const data = await response.json()
            setRecipe(data)
        }
        fetchAPI()


    }, [])




    return (

        <div className={styles.recipeContainer}>
            <h1>{recipe.title}</h1>
            <div className={styles.summary}>
                <div className={styles.imgContainer}>
                    <img src={recipe.image} alt="Recipe Cover" />
                </div>
                <div className={styles.informationContainer}>
                    <div className={styles.recipeInformation}>
                        <p> Gluten Free: {recipe.glutenFree ? 'YES' : 'NO'}</p>
                        <p>Vegan: {recipe.vegan ? 'YES' : 'NO'}</p>
                        <p> Ready in: {recipe.readyInMinutes} min.</p>
                    </div>
                    <div className={styles.recipeScore}>
                        <p>Healthy Score</p>
                        <h5>{recipe.healthScore}</h5>
                    </div>
                </div>
            </div>
            <div className={styles.ingredientsSection}>
                <h3>Ingredients</h3>
                <div className={styles.ingredients}>
                    {
                        recipe.extendedIngredients === undefined ? null :
                            recipe.extendedIngredients.map((ingredient, index) => {
                                return (
                                    <p key={index}>{ingredient.original}</p>
                                )
                            })
                    }
                </div>
            </div>
            <div className={styles.instructionsSection}>
                <h3>Instructions</h3>
                <div dangerouslySetInnerHTML={{ __html: recipe.instructions }} />
            </div>
            <div className={styles.backHomeSection}>
                <Link to='/' className={styles.backHome}>
                    <h5>Back to Home</h5>
                    <AiFillHome className={styles.icon} />
                </Link>
            </div>
        </div>
    )
}

export default Recipe