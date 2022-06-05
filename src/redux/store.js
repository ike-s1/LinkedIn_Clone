import { applyMiddleware, combineReducers, createStore} from "redux";
import { userReducer } from "./reducers/user-reducer";
import thunkMiddleware  from "redux-thunk";
import { articleReducer } from "./reducers/article-reducer";
import { appReducer } from "./reducers/app-reduces";




const reducers = combineReducers( {
    user: userReducer,
    articles: articleReducer,
    app: appReducer
});


export const store = createStore(reducers,applyMiddleware(thunkMiddleware));


