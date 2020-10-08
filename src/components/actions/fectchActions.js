import { GET_MOVIES } from "./actionTypes";

const { default: Axios } = require("axios")
const API_KEY = process.env.REACT_APP_MOVIEDB_API_KEY;

const fetchMovies = (data) => {
            return {
                type: GET_MOVIES,
                payload: data
            }
} 
const searchMovie = text => {
    return({
        type: 'SEARCH_MOVIE',
        payload: text
    })
}

export { fetchMovies, searchMovie }