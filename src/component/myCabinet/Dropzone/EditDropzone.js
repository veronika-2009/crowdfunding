import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import FormData from "form-data";
import img from "../../../img/nophoto.png";
import styles from "./Dropzone.module.css";
import { connect } from "react-redux";
import { setImage } from "../../../Redux/companyReducer";
import { FormattedMessage } from "react-intl";


function EditDropzone(props) {
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
        const id = props.company.id;
        props.setImageCreator({ id: id, path: acceptedFiles[0] })
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
            <img id="imageUploadPreview" src={props.company.image_links[0].link_image} alt="yourImage" />
        </div>
    )
}
let mapStateToProps = (state) => ({
    company: state.companyPage.company
})
let mapDispatchToProps = (dispatch) => {
    return {
        setImageCreator: (payload) => {
            dispatch(setImage(payload))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(EditDropzone);