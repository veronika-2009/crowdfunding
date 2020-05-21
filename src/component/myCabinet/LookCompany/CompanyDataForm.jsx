import React from "react";
import { createField, Input, Textarea } from "../../FormsControl/FormsControls";
import { reduxForm } from "redux-form";
import styles from "../../CreateCompany/CreateCompany.module.css";
import EditDropzone from "../Dropzone/EditDropzone";
import ReactPlayer from "react-player";
import EditMarkdown from "../../Markdown/EditMarkdown";
import { required } from "../../validation/Validation";


const CompanyDataForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={styles.header}>
            <nav>
                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <a className="nav-item nav-link active" id="nav-home-tab"
                        data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home"
                        aria-selected="true">General information</a>
                    <a className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab"
                        href="#nav-profile" role="tab" aria-controls="nav-profile"
                        aria-selected="false">Сampaign description</a>
                    <button type="submit" style={{ marginLeft: "40%" }}
                        className="btn btn-danger">Save</button>
                </div>
            </nav>
            <div className="tab-content" id="nav-tabContent">
                <div className="tab-pane fade show active" id="nav-home" role="tabpanel"
                    aria-labelledby="nav-home-tab">
                    <div className={styles.container}>
                        <h5>Name Company</h5>
                        {createField("Enter company name", "nameCompany", [required], Input)}
                        <p>The name should be concise, unique and memorable.
                                    Be sure that the name of the project reflects its essence.</p>
                    </div>
                    <div className={styles.container}>
                        <h5>Short Company Description</h5>
                        {createField("Tell us briefly about the project", "short_description", [required], Textarea)}
                        <p>Describe the purpose of your company in one sentence.</p>
                    </div>
                    <div className={styles.container}>
                        <h5>Company tag</h5>
                        <div className="form-row">
                            <div className="col">
                                {createField("Enter company tag", "tag", [required], Input)}
                            </div>
                        </div>
                    </div>
                    <div className={styles.container}>
                        <h5>Budget and Campaign Duration</h5>
                        <div className="form-row">
                            <div className="col">
                                {createField("Enter the amount of money in USA", "many", [required], Input)}
                            </div>
                            <div className="col">
                                {createField("days", "days", [], Input, { placeholder: "Days" })}
                            </div>
                            <p>from 1 to 180 days</p>
                        </div>
                        <p>We draw your attention to the fact that INDIEGOGO
                                    takes a commission only from successful projects.</p>
                    </div>
                    <div className={styles.container}>
                        <h5> Project cover and video</h5>
                        <p>This is the main image of your project.JPG, PNG, GIF, BMP / Format: 16x9 / Limit: 5 Mb</p>
                        <EditDropzone image={props.image} />
                        <div className="form-row">
                            <div className="col" >
                                {createField("Specify link with YouTube", "inputValue", [required], Input)}
                                <ReactPlayer controls={true}
                                    url={props.video[0].video}
                                    width='85%'
                                    height='350px'
                                    className={styles.reactPlayer}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                    <EditMarkdown startEdit={props.company.description}
                        id={props.company.id} />
                </div>
            </div>
        </form>
    )
}
const CompanyDataFormReduxForm = reduxForm({ form: "editCompany" })(CompanyDataForm)
export default CompanyDataFormReduxForm;