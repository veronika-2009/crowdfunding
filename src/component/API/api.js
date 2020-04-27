import * as axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'http://localhost:4000/',
    // headers: {'API-KEY': ''}
})

export const myCompanyAPI = {
newCompanyAPI(nameCompany, description,tag) {
        return instance.post('createCompany/', {nameCompany, description,tag})
    }
}
