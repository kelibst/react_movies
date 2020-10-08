const { default: Axios } = require("axios")

const API_KEY = process.env.REACT_APP_MOVIEDB_API_KEY
const fetchMovies = text = dispatch => {
    Axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`)
        .then(res => dispatch({
            type: 'FETCH_MOVIES',
            payload: res.data
        }))
        .catch(err => console.log(err))
} 
const searchMovie = text => dispatch => {
    dispatch({
        type: SEARCH_MOVIE,
        payload: text
    })
}

export { fetchMovies, searchMovie }