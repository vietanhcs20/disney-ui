import { SET_USER_NAME, SET_USER_EMAIL, SET_USER_PHOTO, SET_USER_INFO } from "../actions/userAction"

const initialState = {
    name: null,
    email: null,
    photo: null
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_INFO:
            return action.payload
        case SET_USER_NAME:
            return { ...state, name: action.payload }
        case SET_USER_EMAIL:
            return { ...state, email: action.payload }
        case SET_USER_PHOTO:
            return { ...state, photo: action.payload }
        default:
            break
    }
    return state
}

export default userReducer