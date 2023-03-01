import { combineReducers } from "redux";
import movieReducer from "./movieReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({
    user: userReducer,
    movie: movieReducer
})

export default rootReducer