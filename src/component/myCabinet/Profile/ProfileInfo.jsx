import React from "react";
import styles from "./Profile.module.css";
import { FormattedMessage } from "react-intl";
import img from "../../../img/noProfilePhoto.png";


const ProfileInfo = (props) => {
    const imgProfile = props.state.data.imageProfile;
    let userToken = JSON.parse(localStorage.getItem("usertoken"));
    return (<div>
        <div className={styles.container}>
            <div className="row">
                <div className="col-12">
                    <div className="row">
                        <div className="col-sm-4">
                            <div className="image-container ">
                                {imgProfile === null ? <img src={img} alt="frofilePhoto" style={{ width: "250px", height: "250px" }} /> :
                                    <img src={imgProfile} alt="frofilePhoto" style={{ width: "250px", height: "250px" }} />}
                                <div className="middle mt-5 ml-2">
                                    <button type="submit" onClick={props.goToEditProfile}
                                        className="btn btn-danger"><FormattedMessage id="navigation.edit" /></button>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-8 mt-5">
                            <div className="userData ml-3 ">
                                <h2 className="d-block" style={{ fontSize: "1.5rem", fontWeight: "bold" }}><FormattedMessage id="navigation.name" />:
                            <span>{userToken.name}</span>
                                </h2>
                                <h6 className="d-block"><FormattedMessage id="navigation.myEmail" />:{userToken.email}</h6>
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
    </div>
    );
}
export default ProfileInfo;