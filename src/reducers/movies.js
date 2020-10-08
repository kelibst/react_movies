import Axios from "axios";
import { initData } from "../initData";
const API_KEY = process.env.REACT_APP_MOVIEDB_API_KEY;

const moviesReducer = (state ={movies: []}, action) => {
    switch (action.type){
        case "GET_MOVIES":
            console.log('began action', action.payload)
            const getData = () => {
                let result;
                 Axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`)
                    .then(res => {
                        console.log('got here')
                        result =  res.data.results
                    }).catch(err => {
                        console.log(err)
                        result =  err
                    })
                    return result
            }
            const data = getData()
            console.log('new data',data)
            return {
                ...state, 
                movies: data
            }
        case 'FETCH_MOVIES':
            return {
                ...state,
                movies: action.payload
            }
        default:
            return state
    } 
   
}

export default moviesReducer;