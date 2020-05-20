import React from "react";
import { useState } from "react";
import CompanyDataForm from "./CompanyDataForm";
import EditCompany from "./EditCompany";
import styles from "./LookCompany.module.css";


const LookCompany = (props) => {
    const textUpdate = props.newTextMarkdown;
    const image = props.image;
    const onSubmit = (formData) => {
        props.saveCompany(formData);
        props.saveImage(image);
        props.saveVideo(formData);
        props.saveTextMarkdown(textUpdate);
        props.history.push("/myCabinet")
    }
    let [editMode, setEditMode] = useState(false);
    return (
        <div >
            {editMode
                ? <CompanyDataForm company={props.company} onSubmit={onSubmit} initialValues={props.company}
                    image={props.image} video={props.video} />
                : <EditCompany goToEditMode={() => { setEditMode(true) }} {...props} company={props.company}
                    image={props.company.image_links} />}
        </div>
    )
}
export default LookCompany;