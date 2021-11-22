import axios from "axios";

export const searchRecipe = text => dispatch => {
    dispatch({
        type: 'SEARCH_RECIPE',
        payload: text
    });
};

export const fetchRecipes = text => dispatch => {
    axios.get(`https://api.spoonacular.com/recipes/complexSearch/?query=${text}&diet=vegetarian&apiKey=${process.env.REACT_APP_API_KEY}&number=9`)
        .then(response => {
            dispatch({
                type: 'FETCH_RECIPES',
                payload: response.data.results
            })
            console.log(response)
        }
        )
        .catch(err => console.log(err));
};

export const fetchRecipe = id => dispatch => {
    axios
        .get(`https://api.spoonacular.com/recipes/${id}/information?includeNutrition=true&apiKey=${process.env.REACT_APP_API_KEY}`)
        .then(response =>
            dispatch({
                type: 'FETCH_RECIPE',
                payload: response.data
            })

        )
        .catch(err => console.log(err));
};

export const setLoading = () => {
    return {
        type: 'LOADING'
    };
};

export const setLoaded = bool => dispatch => {
    dispatch({
        type: 'LOADED',
        payload: bool
    });
}