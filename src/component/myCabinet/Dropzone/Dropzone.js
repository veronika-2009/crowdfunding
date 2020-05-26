import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import axios from "axios";
import FormData from "form-data";
import img from "../../../img/nophoto.png";
import styles from "./Dropzone.module.css";
import { FormattedMessage } from "react-intl";


function MyDropzone(props) {
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
        const idCompany = props.idCompany;
        axios.post("http://localhost:4000/upload/" + idCompany, formData, {
        }).then(res => {
            console.log('ok')
        }).catch(function(err) {
            console.log(err)
         })
    }, [])
    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })
    return (
        <div {...getRootProps()} className={styles.dropzone}>
            <input  {...getInputProps()} />
            {
                isDragActive ?
                    <p><FormattedMessage id="navigation.dropFiles" /></p> :
                    <p><FormattedMessage id="navigation.dragnDrop" /></p>
            }
            <img id="imageUploadPreview" src={img} alt="yourImage" />
        </div>
    )
}
export default MyDropzone;




