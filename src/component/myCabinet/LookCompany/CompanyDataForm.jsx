import React from "react";
import { createField, Input, Textarea } from "../../FormsControl/FormsControls";
import { reduxForm } from "redux-form";
import styles from "../../CreateCompany/CreateCompany.module.css";
import EditDropzone from "../Dropzone/EditDropzone";
import ReactPlayer from "react-player";
import EditMarkdown from "../../Markdown/EditMarkdown";
import { required } from "../../validation/Validation";
import { FormattedMessage, useIntl } from "react-intl";


const CompanyDataForm = (props) => {
    const intl = useIntl();
    return (
        <form onSubmit={props.handleSubmit} className={styles.header}>
            <nav>
                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    <a className="nav-item nav-link active" id="nav-home-tab"
                        data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home"
                        aria-selected="true"><FormattedMessage id="navigation.information" /></a>
                    <a className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab"
                        href="#nav-profile" role="tab" aria-controls="nav-profile"
                        aria-selected="false"><FormattedMessage id="navigation.campaignDescription" /></a>
                    <button type="submit" style={{ marginLeft: "40%" }}
                        className="btn btn-danger"><FormattedMessage id="navigation.save" /></button>
                </div>
            </nav>
            <div className="tab-content" id="nav-tabContent">
                <div className="tab-pane fade show active" id="nav-home" role="tabpanel"
                    aria-labelledby="nav-home-tab">
                    <div className={styles.container}>
                        <h5><FormattedMessage id="navigation.nameCompany" /></h5>
                        {createField("Enter company name", "nameCompany", [required], Input)}
                        <p><FormattedMessage id="navigation.uniqueName" /></p>
                    </div>
                    <div className={styles.container}>
                        <h5><FormattedMessage id="navigation.shortDescription" /></h5>
                        {createField("Tell us briefly about the project", "short_description", [required], Textarea)}
                        <p><FormattedMessage id="navigation.description" /></p>
                    </div>
                    <div className={styles.container}>
                        <h5><FormattedMessage id="navigation.tag" /></h5>
                        <div className="form-row">
                            <div className="col">
                                {createField("Enter company tag", "tag", [required], Input)}
                            </div>
                        </div>
                    </div>
                    <div className={styles.container}>
                        <h5><FormattedMessage id="navigation.buldet" /></h5>
                        <div className="form-row">
                            <div className="col">
                                {createField("Enter the amount of money in USA", "many", [required], Input)}
                            </div>
                            <div className="col">
                                {createField("days", "days", [], Input, { placeholder: "Days" })}
                            </div>
                            <p><FormattedMessage id="navigation.days" /></p>
                        </div>
                        <p><FormattedMessage id="navigation.commission" /></p>
                    </div>
                    <div className={styles.container}>
                        <h5> <FormattedMessage id="navigation.coverProject" /></h5>
                        <p><FormattedMessage id="navigation.formatIMG" /></p>
                        <EditDropzone image={props.image} />
                        <div className="form-row">
                            <div className="col" >
                                {createField(intl.formatMessage({ id: "navigation.youtube" }), "inputValue", [], Input)}
                                <ReactPlayer controls={true}
                                    url={props.video[0].video}
                                    width="85%"
                                    height="350px"
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