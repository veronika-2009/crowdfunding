import { myCompanyAPI } from "../component/API/api";
const SET_NEW_COMPANY = 'SET_NEW_COMPANY';
const SET_DESCRIPTION = 'SET_DESCRIPTION';
const FETCH_TRACKS_SUCCESS = 'FETCH_TRACKS_SUCCESS';
const SET_NEW_MESSAGE = 'SET_NEW_MESSAGE';
const GET_NEW_MESSAGE = 'GET_NEW_MESSAGE';
const SET_COMPANY = "SET_COMPANY";
const SET_IMAGE = "SET_IMAGE";
const SET_MARKDOWN = "SET_MARKDOWN";


let initialState = {
    body: [
        'bhh',
        'njbjj'
    ],
    newBody: [],
    object: [
        { id: 'kkf', name: 'lfl' },
        { id: 'kkf2', name: 'lfl' },
    ],
    company: [
        {
            id: "",
            nameCompany: "",
            short_description: "",
            tag: "",
            days: "",
            many: "",
            path: "",
            video:"",
            description:""
        }
    ],
    image: [
        { id: "", path: "" }
    ],
    textMarkdown: [
        { id: "", description: "" }
    ]
};
const companyReducer = (state = initialState, action) => {
    // debugger
    switch (action.type) {
        case SET_NEW_COMPANY: {
            return {
                ...state,
                body: [...state.body, action.payload]
            }
        }
        case FETCH_TRACKS_SUCCESS: {
            return {
                ...state,
                body: [...state.body, action.payload]
            }
        }
        case SET_NEW_MESSAGE: {
            let mybody = state.newBody;
            return {
                ...state,
                newBody: '',
                body: [...state.body, mybody]
            }
        }
        case GET_NEW_MESSAGE: {
            return {
                ...state,
                newBody: action.payload
            }
        }
        case SET_COMPANY: {
            return {
                ...state,
                company: action.company
            }
        }
        case SET_IMAGE: {
            return {
                ...state,
                image: action.image
            }
        }
        case SET_MARKDOWN: {
            return {
                ...state,
                textMarkdown: action.textMarkdown
            }
        }
        default:
            return state;
    }
}

export const setImage = (image) => ({ type: SET_IMAGE, image})
export const setMarkdown = (textMarkdown) => ({ type: SET_MARKDOWN, textMarkdown})
export const setCompany = (company) => ({ type: SET_COMPANY, company })
export const dateToFormat = (data) => ({ type: SET_COMPANY, data })
export const getAddTrack = () => ({ type: SET_NEW_MESSAGE });
export const sendAddTrack = (payload) => ({ type: GET_NEW_MESSAGE, payload });
// export const updateNewMessageBodyCreator = ( body) => ({ type: UPDATE_NEW_MESSAGE_BODY, body: body});
// export const sendMessageCreator = ( ) => ({ type: SET_NEW_COMPANY});
export const addCompanyActionCreator = (nameCompany, tag) => ({ type: SET_NEW_COMPANY, payload: { nameCompany, tag } });
export const addDescriptionActionCreator = (description) => ({ type: SET_DESCRIPTION, payload: { description } });
// export const newCompany = (nameCompany, description, tag) => async (dispatch) => {
//     myCompanyAPI.newCompanyAPI(nameCompany, description, tag)
//         .then(response => {
//             if (response.data.resultCode === 0) {
//                 let { nameCompany, description, tag } = response.data.payload
//                 dispatch(addCompanyActionCreator(nameCompany, description, tag))
//             }
//         })
// }
export const saveCompany = (saveModifiedCompany) => async (dispatch) => {
    let response = await myCompanyAPI.saveCompany(saveModifiedCompany);
}
export const saveImage = (saveModifiedImage) => async (dispatch) => {
    let newImage = await myCompanyAPI.saveImageAPI(saveModifiedImage);
}
export const saveVideo = (saveModifiedVideo) => async (dispatch) => {
    let newVideo = await myCompanyAPI.saveVideoAPI(saveModifiedVideo);
}
export const saveTextMarkdown = (saveModifiedText) => async (dispatch) => {
    let newText = await myCompanyAPI.saveTextMarkdownAPI(saveModifiedText);
}
export default companyReducer;