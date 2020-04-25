const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';
const SET_NEW_POST = 'SET_NEW_POST';
const SET_POST = 'SET_POST';
const SET_NEW_COMMENT = 'SET_NEW_COMMENT';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const TOGGLE_IS_FETCHING = 'TODDLE_IS_FETCHING ';
const SET_COUNTER = 'SET_COUNTER';


let initialState = {
    posts: [
        { id:'', title: '', text: '', data:''},
        { id:'', title: '', text: '', data:'' }
    ],
    pageSize: 9,
    totalUsersCount: 20,
    currentPage: 1,
    isFetching: false,
    newPost: null,
    post: null,
    counter: 0,
    comments: null
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SAVE_PHOTO_SUCCESS: {
                return {...state, profile: {...state.profile, photos: action.photos}}      
        }
        case SET_NEW_POST: {
            return {
                ...state,
                newPost: {...state, newPost: action.newPost}
            };
        }
        case SET_POST: {
            return {...state, posts: action.posts}
            
        }
        case SET_COUNTER: {
            return {...state, counter: action.counter}
            
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
            
        }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
            
        }
        case SET_NEW_COMMENT: {
            return {...state, posts: action.posts}
            
        }
        default:
            return state;
    }
}

export const dateToFormat= (data) => ({ type: SET_POST, data })
export const setComment = (comment) => ({ type: SET_NEW_COMMENT, comment })
export const setPost = (posts) => ({ type: SET_POST, posts })
export const setCounterAC = (counter) => ({ type: SET_COUNTER, counter })
export const toggleIsFetchingAC = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching })
export const setCurrentPageAC = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })
export const setNewPost = (newPost) => ({ type: SET_NEW_POST, newPost })
export const savePhotoSuccess = (photos) => ({ type: SAVE_PHOTO_SUCCESS, photos })
// export const savePhoto = (file) => async (dispatch) => {
//     let response = await profileAPI.savePhoto(file);
//          if (response.data.resultCode === 0) {
//              dispatch(savePhotoSuccess(response.data.data.photos));
//          }
//  }
 export const savePosts = (saveModifiedPosts) => async (dispatch) => {
    // let response = await profileAPI.savePosts(saveModifiedPosts);
 }

export default profileReducer;