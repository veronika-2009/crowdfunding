import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import axios from "axios";
import FormData from "form-data";
import img from "../../../img/nophoto.png";
import styles from "./Profile.module.css";
import { FormattedMessage } from "react-intl";


function ProfileDropzone(props) {
    const onDrop = useCallback(acceptedFiles => {
        var preview = document.querySelector("img");
        var reader = new FileReader();
        reader.readAsDataURL(acceptedFiles[0]);
        reader.onloadend = function () {
            preview.src = reader.result;
        }
        const formData = new FormData();
        const file = acceptedFiles[0];
        formData.append("file", file)
        let userTokenId = JSON.parse(localStorage.getItem("usertoken"));
        const id = userTokenId.id;
        axios.post("http://localhost:4000/uploadProfileImg/" + id, formData, {
        }).then(res => {
            console.log('ok')
        }).catch(function(err) {
            console.log(err)
         })
    }, [])
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })
    return (
        <div {...getRootProps()} className={styles.profileDropzone}>
            <input  {...getInputProps()} />
    
            <img id="imageUploadPreview" src={img} alt="yourImage" className="img-thumbnail"/>
            {
                isDragActive ?
                    <p><FormattedMessage id="navigation.dropFiles" /></p> :
                    <p><FormattedMessage id="navigation.dragnDrop" /></p>
            }
        </div>
    )
}
export default ProfileDropzone;