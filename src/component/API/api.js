import * as axios from 'axios';

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
