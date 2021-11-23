
const initialState = {
    text: '',
    loading: false,
    recipe: [],
    recipes: {},
    loaded: false,
    id: ''
}

const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SEARCH_RECIPE':
            return {
                ...state,
                text: action.payload,
                loading: false
            };
        case 'FETCH_RECIPES':
            return {
                ...state,
                recipes: action.payload,
                loading: false
            };
        case 'FETCH_RECIPE':
            return {
                ...state,
                recipe: action.payload,
                loading: false
            };
        case 'LOADING':
            return {
                ...state,
                loading: true
            };

        case 'LOADED':
            return {
                ...state,
                loaded: action.payload
            }

        default:
            return state;
    }
}

export default searchReducer
