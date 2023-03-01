export const SET_USER_INFO = 'SET_INFO'
export const SET_USER_NAME = 'SET_NAME'
export const SET_USER_EMAIL = 'SET_EMAIL'
export const SET_USER_PHOTO = 'SET_PHOTO'

export const userInfoCreator = (data) => ({
    type: SET_USER_INFO,
    payload: data
})
export const userNameCreator = (data) => ({
    type: SET_USER_NAME,
    payload: data
})
export const userEmailCreator = (data) => ({
    type: SET_USER_EMAIL,
    payload: data
})
export const userPhotoCreator = (data) => ({
    type: SET_USER_PHOTO,
    payload: data
})



