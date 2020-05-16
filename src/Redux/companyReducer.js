import { myCompanyAPI } from "../component/API/api";
const SET_COMPANY = "SET_COMPANY";
const SET_IMAGE = "SET_IMAGE";
const SET_MARKDOWN = "SET_MARKDOWN";
const SET_GENERAL_IMAGE = "SET_GENERAL_IMAGE";
const SET_GENERAL_VIDEO = "SET_GENERAL_VIDEO";


let initialState = {
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
    ],
    generalImage: [
        {id_image:"", link_image:""}
    ],
    generalVideo: [
        {id_video:"", video:""}
    ]
};
const companyReducer = (state = initialState, action) => {
    switch (action.type) {
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
        case SET_GENERAL_IMAGE: {
            return {
                ...state,
                generalImage: action.generalImage
            }
        }
        case SET_GENERAL_VIDEO: {
            return {
                ...state,
                generalVideo: action.generalVideo
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
export const setGeneralImage = (generalImage) => ({ type: SET_GENERAL_IMAGE, generalImage})
export const setgeneralVideo = (generalVideo) => ({ type: SET_GENERAL_VIDEO, generalVideo})
export const setMarkdown = (textMarkdown) => ({ type: SET_MARKDOWN, textMarkdown})
export const setCompany = (company) => ({ type: SET_COMPANY, company })

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