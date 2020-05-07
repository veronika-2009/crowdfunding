import { myCompanyAPI } from '../component/API/api';
const SET_NEW_COMPANY = 'SET_NEW_COMPANY';
const SET_DESCRIPTION = 'SET_DESCRIPTION';
const SET_COUNTER = 'SET_COUNTER';

let initialState = {
    nameCompany: null,
    description: null,
    tag: null,
    counter: 0
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_NEW_COMPANY: {
            return {
                ...state, 
                ...action.payload
            }
        }
        case SET_DESCRIPTION: {
            return {
                ...state, 
                ...action.payload
            }
        }
        case SET_COUNTER: {
            return {
                ...state,
            }
        }
        default:
            return state;
    }
}
export const addCompanyActionCreator = (nameCompany, tag) => ({ type: SET_NEW_COMPANY, payload: { nameCompany,  tag } });
export const counterActionCreator = (counter) => ({ type: SET_COUNTER, counter});
export const addDescriptionActionCreator = (description) => ({type: SET_DESCRIPTION, payload:{description}});
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