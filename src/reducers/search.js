import { initData } from "../initData";

const searchReducer = (state = initData, action) => {
    switch(action.type) {
        case 'SEARCH_MOVIE':
            return {
                ...state,
                text: action.payload
            }
        default:
            return state
    }
}

export default searchReducer;