import { myCompanyAPI } from '../component/API/api';
const SET_NEW_COMPANY = 'SET_NEW_COMPANY';


let initialState = {
    nameCompany: null,
    description: null,
    tag: null
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_NEW_COMPANY: {
            return {
                ...state, 
                ...action.payload
            }
        }
        default:
            return state;
    }
}
export const addCompanyActionCreator = (nameCompany, description, tag) => ({ type: SET_NEW_COMPANY, payload: { nameCompany, description, tag } })
// export const newCompany = (nameCompany, description, tag) => async (dispatch) => {
//     myCompanyAPI.newCompanyAPI(nameCompany, description, tag)
//         .then(response => {
//             if (response.data.resultCode === 0) {
//                 let { nameCompany, description, tag } = response.data.payload
//                 dispatch(addCompanyActionCreator(nameCompany, description, tag))
//             }
//         })
// }

export default profileReducer;