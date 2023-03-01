import { SET_FULL } from "../actions/movieAction";

const initialState = {
    recommend: null,
    newDisney: null,
    original: null,
    trending: null
}

const movieReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FULL:
            return action.payload;
        default:
            break
    }
    return state
}

export default movieReducer