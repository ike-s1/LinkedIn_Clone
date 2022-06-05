import { auth, provider, storage } from "../../firebase"

const SET_USER = 'user/SET_USER';
const SET_LEFT_SIDE_PHOTO = 'user/SET_LEFT_SIDE_PHOTO'

const initialState = {
    user: null,
    leftSidePhotoURL: ''
}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER: 
            return {
            ...state,
            user: action.user
            }
            case SET_LEFT_SIDE_PHOTO: 
            return {
            ...state,
            leftSidePhotoURL:action.url
            }
        default:
            return state
    }
}

const setUser = (user) => ({type: SET_USER, user});

export const setLeftSidePhotoURL = (url) => ({type: SET_LEFT_SIDE_PHOTO, url});



export const signOutAPI = () => {
        return (dispatch) => {
            auth.signOut()
            .then(() => {
                dispatch(setUser(null));
            }).catch(error => alert(error))
    }
}

export const signInAPI = () => {
        return  (dispatch) => {
            auth.signInWithPopup(provider)
            .then((payload) => {
                dispatch(setUser(payload.user));
            }).catch(error => alert(error))
    }
}


export const getUserAuth =  () => {
    return async (dispatch) => {
           auth.onAuthStateChanged( (user) => {
            if(user) {
                dispatch(setUser(user));
            }
        })
      
}
}


