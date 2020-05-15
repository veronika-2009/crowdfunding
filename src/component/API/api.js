import * as axios from 'axios';
import FormData from "form-data";

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
  
export const myCompanyAPI = {
    saveCompany(saveModifiedCompany) {
      let id = saveModifiedCompany.id
      return instance.put(`editCompany/${id}` , saveModifiedCompany)
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
      return instance.post(`editVideo/${id}`, {videoNewURL})
      .then(response => {
                return response.data;
              });
    },
    saveTextMarkdownAPI(saveModifiedText) {
      debugger
      let id = saveModifiedText.id;
      let updateTextMarkdown = saveModifiedText.value;
      return instance.post(`saveDescription/${id}`, {updateTextMarkdown})
      .then(response => {
                return response.data;
              });
    }
  }
 