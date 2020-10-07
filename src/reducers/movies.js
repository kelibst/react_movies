import { initData } from "../initData";

const moviesReducer = (state = initData, action) => {
    switch (action.type){
        case "GET_MOVIES":
            return state
        default:
            return state
    }
}

export default moviesReducer;