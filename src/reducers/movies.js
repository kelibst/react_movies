import { initData } from "../initData";

const moviesReducer = (state =initData, action) => {
    switch (action.type){
        case "GET_MOVIES":
            return state
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