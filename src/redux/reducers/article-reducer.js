import {db , storage} from "../../firebase";

const SET_LOADING_STATUS = 'article/SET_LOADING_STATUS';
const GET_ARTICLES = 'article/GET_ARTICLES';
const DELETE_ARTICLE = 'article/DELETE_ARTICLE'

const initialState = {
    loading: false,
    articles: [

    ]
   
}

export const articleReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LOADING_STATUS: 
            return {
                ...state,
                loading: action.status
            }
        case GET_ARTICLES: 
            return {
                ...state,
                articles: action.payload
            }
            case DELETE_ARTICLE: 
            return {
                ...state,
                articles: state.articles.filter(article => article.description!== action.description)
            }
        default:
            return state
    }
}


const setLoading = (status) => ({type: SET_LOADING_STATUS, status});
const getArticles = (payload) => ({type: GET_ARTICLES, payload});
export const deleteArticles = (description) => ({type: DELETE_ARTICLE , description});


export const getArticlesAPI = (payload) =>  {
    return  (dispatch) => {
        let payload;
        db.collection('articles').orderBy('actor.date', 'desc')
        .onSnapshot(   (snapshot) => {
            payload =  snapshot.docs.map((doc) => doc.data());
            dispatch(getArticles(payload));
        })
    }
}


export const postArticleAPI = (payload) => {
    return  async (dispatch) => {
        dispatch(setLoading(true));

            if(payload.image != '') {
                const upload = storage.
                 ref( `images/${payload.image.name}`)
                .put(payload.image);
                upload.on('state_changed',
                snapshot =>  {
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                },
                error => alert(error),
                async () => {
                    const downloadURL = await upload.snapshot.ref.getDownloadURL();
                    await db.collection('articles').add(
                        {
                            actor: {
                                description: payload.user.email,
                                title: payload.user.displayName,
                                date: payload.timestamp,
                                image: payload.user.photoURL
                            },
                            video: payload.video,
                            sharedImg: downloadURL,
                            comments: 0,
                            description: payload.description
                    });
                    dispatch(setLoading(false));
                }
        )} else if (payload.video) {
            await db.collection('articles').add (
                {
                    actor: {
                        description: payload.user.email,
                        title: payload.user.displayName,
                        date: payload.timestamp,
                        image: payload.user.photoURL
                    },
                    video: payload.video,
                    sharedImg: '',
                    comments: 0,
                    description: payload.description
            });
            
            dispatch(setLoading(false));
        } else  {
            await db.collection('articles').add (
                    {
                        actor: {
                            description: payload.user.email,
                            title: payload.user.displayName,
                            date: payload.timestamp,
                            image: payload.user.photoURL
                        },
                        video: payload.video,
                        sharedImg: '',
                        comments: 0,
                        description: payload.description
                });
                dispatch(setLoading(false))
    }

                
    }
}





