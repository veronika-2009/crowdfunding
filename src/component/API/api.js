import * as axios from 'axios';

// const instance = axios.create({
//     withCredentials: true,
//     baseURL: 'http://localhost:4000/',
    // headers: {'API-KEY': ''}
// })

// export const myCompanyAPI = {
// newCompanyAPI(nameCompany, description,tag) {
//         return instance.post('createCompany/', {nameCompany, description,tag})
//     }
// }
const instance = axios.create({
    baseURL: 'http://localhost:4000/',
    // withCredentials: true,
    // headers: {
    //     'X-Mashape-Key': 'required',
    //     'Content-Type': 'application/x-www-form-urlencoded',
    //     'Accept': 'application/json'
    // }
})

export const getCompanyAPI = () => {
    return instance.get('myCabinet')
}
