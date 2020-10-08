import { GET_MOVIES } from "../components/actions/actionTypes";

const API_KEY = process.env.REACT_APP_MOVIEDB_API_KEY;

const moviesReducer = (state ={movies: []}, action) => {
    console.log(action)

    switch (action.type){
        case "GET_MOVIES":
            console.log('payload', action.payload)
            return {
                ...state, 
                movies: action.payload
            }
        case 'FETCH_MOVIES':
            return {
                ...state,
                movies: action.payload
            }
        default:
            console.log('passed')
            return state
    } 
   
}

export default moviesReducer;