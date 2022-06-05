import { getArticlesAPI } from "./article-reducer";
import { getUserAuth } from "./user-reducer";

const SET_INITIALIZED = 'app/SET_INITIALIZED ';

const initialState = {
   initialized: false
}

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case  SET_INITIALIZED: 
            return {
                ...state,
                initialized: true
            }
        default:
            return state
    }
}



export const setInitialized = () => ({type: SET_INITIALIZED});


  
export const initializedApp = () => (dispatch) => {
    const auth = dispatch(getUserAuth());
    const articles =  dispatch(getArticlesAPI());
    const delay = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve();
        }, 1000);
      });

    Promise.all([delay,auth,articles])
    .then(() =>{
        dispatch(setInitialized())
    }).catch(error => alert(error))
}


