import React from "react";
import styles from "./Profile.module.css";
import { FormattedMessage } from "react-intl";
import img from "../../../img/noProfilePhoto.png";
import { createField, Input } from "../../FormsControl/FormsControls";
import { reduxForm } from "redux-form";
import ProfileDropzone from "./ProfileDropzone";


const ProfileForm = (props) => {
    return (<form onSubmit={props.handleSubmit} className={styles.header}>
        <div className={styles.container}>
            <div className="row">
                <div className="col-12">
                    <div className="row">
                        <div className="col-sm-4">
                            <div className="image-container ">
                                <ProfileDropzone {...props}/>
                                <div className="middle mt-5 ml-2">
                                    <button type="submit"
                                        className="btn btn-danger"><FormattedMessage id="navigation.save" /></button>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-8 mt-5">
                            <div className="userData ml-3 ">
                                <h2 className="d-block" style={{ fontSize: "1.5rem", fontWeight: "bold" }}><FormattedMessage id="navigation.login" />:
                                <span>{createField("Login", "login", [], Input)}</span>
                                </h2>
                                <h6 className="d-block"><FormattedMessage id="navigation.myEmail" />:
                                <span>{createField("Email", "email", [], Input)}</span></h6>
                            </div>

                            <div className="ml-auto">
                                <input type="button" className="btn btn-primary d-none" id="btnDiscard" value="Discard Changes" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <ul className="nav nav-tabs mb-4 mt-4" id="myTab" role="tablist">
                                <li className="nav-item ">
                                    <a className="nav-link active" id="basicInfo-tab" data-toggle="tab" href="#basicInfo" role="tab" aria-controls="basicInfo" aria-selected="true">My campaigns</a>
                                </li>
                            </ul>
                            <div className="tab-content ml-1" id="myTabContent">
                                <div className="tab-pane fade show active" id="basicInfo" role="tabpanel" aria-labelledby="basicInfo-tab">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </form>
    );
}
const ProfileDataFormReduxForm = reduxForm({ form: "editProfile" })(ProfileForm)
export default ProfileDataFormReduxForm;