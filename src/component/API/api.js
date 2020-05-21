import * as axios from 'axios';
import FormData from "form-data";

const instance = axios.create({
  baseURL: 'http://localhost:4000/'
})

export const getCompanyAPI = () => {
  return instance.get('myCabinet')
}

export const myCompanyAPI = {
  saveCompany(saveModifiedCompany) {
    let id = saveModifiedCompany.id
    return instance.put(`editCompany/${id}`, saveModifiedCompany)
      .then(response => {
        return response.data;
      });
  },
  saveImageAPI(saveModifiedImage) {

    let id = saveModifiedImage.id;
    const formData = new FormData();
    const file = saveModifiedImage.path;
    formData.append("file", file)
    return instance.post(`editImage/${id}`, formData)
      .then(response => {
        return response.data;
      });
  },
  saveVideoAPI(saveModifiedVideo) {
    let id = saveModifiedVideo.id;
    let videoNewURL = saveModifiedVideo.inputValue;
    return instance.post(`editVideo/${id}`, { videoNewURL })
      .then(response => {
        return response.data;
      });
  },
  saveTextMarkdownAPI(saveModifiedText) {
    let id = saveModifiedText.id;
    let updateTextMarkdown = saveModifiedText.value;
    return instance.post(`saveEditDescription/${id}`, { updateTextMarkdown })
      .then(response => {
        return response.data;
      });
  }
}

export const login = (data) => {
  return instance.post('login/login', {
    email: data.email,
    password: data.password
  }).then(res => {
    let tokenObject = { 'token': res.data.token, 'role': res.data.role, 'id': res.data.newUserId, name: res.data.name};
    localStorage.setItem('usertoken', JSON.stringify(tokenObject));
    return res.data;
  }).catch(function (err) {
    console.log(err);
  })
}
export const register = (data) => {
  return instance.post('login/register', {
    login: data.login,
    email: data.email,
    password: data.password,
    name: data.name
  }).then(res => {
    console.log('Registred');
    return res.data;
  })
    .catch(function (err) {
      console.log(err);
    })
}
