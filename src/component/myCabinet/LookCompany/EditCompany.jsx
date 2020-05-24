import React from "react";
import styles from "./LookCompany.module.css";
import tag from "../../../img/tag.png";
import { NavLink } from "react-router-dom";
import ReactPlayer from "react-player";
import ReactMarkdown from "react-markdown";
import { FormattedMessage } from "react-intl";


const EditCompany = (props) => {
    let token = JSON.parse(localStorage.getItem("usertoken"));
    const user = (
        <div>
        </div>
    )
    const creator = (
        <div >
            <button to="/myCabinet"
                onClick={() => props.removeCompany(props.company.id)}
                className="btn btn-danger"><FormattedMessage id="navigation.removeButton" /></button>
            <button type="submit" onClick={props.goToEditMode}
                className="btn btn-danger"><FormattedMessage id="navigation.editButton" /></button>
        </div>
    )
    const sourse = props.company.description
    return (<div>
        <div className={styles.container2}>
            <div className={styles.general}>
                <span className={styles.nameCompany}>{props.company.nameCompany}</span>
                <div className={styles.tag}>
                    <NavLink to="/" >
                        <img src={tag} alt="tag" />
                        {props.company.tag}
                    </NavLink>
                </div>
                <div className="form-row">
                    <div className="col-8">
                        <img className={styles.generalImage} src={props.generalImage.link_image} alt="generalImage" />
                        <ReactPlayer url={props.generalVideo.video} controls={true}
                            width="260px"
                            height="200px"
                            className={styles.reactPlayer}
                        />
                    </div>
                    <div className="xs-col ml-4">
                        <div className={styles.infoBar}>
                            <div className={styles.data}>155</div>
                            <div className={styles.text}><FormattedMessage id="navigation.sponsors" /></div>
                            <div className={styles.data}>300<span>$</span></div>
                            <div className={styles.text}><div><FormattedMessage id="navigation.isNecessary" /></div>{props.company.many}</div>
                            <div className={styles.data}>{props.company.days}</div>
                            <span className={styles.text}><FormattedMessage id="navigation.daysLeft" /></span>
                            <br />
                        </div>
                        <div className={styles.editButton}>
                            {token === null ? user : token.role === "admin" || token.id === props.company.newUserId ? creator : user}
                        </div>
                    </div>
                </div>
                <p className={styles.headingDescription}><FormattedMessage id="navigation.shortDescription" /></p>
                <div className={styles.shortDescription}>{props.company.short_description}</div>
            </div>
            <div className={styles.navigationСontent}>
                <nav>
                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                        <a className="nav-item nav-link active" id="nav-home-tab"
                            data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home"
                            aria-selected="true"><FormattedMessage id="navigation.about" /></a>
                        <a className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab"
                            href="#nav-profile" role="tab" aria-controls="nav-profile"
                            aria-selected="false"><FormattedMessage id="navigation.news" /></a>
                    </div>
                </nav>
                <div className="tab-content" id="nav-tabContent">
                    <div className="tab-pane fade show active" id="nav-home" role="tabpanel"
                        aria-labelledby="nav-home-tab">
                        <div className={styles.description}>
                            <div className="description">
                                <ReactMarkdown
                                    source={sourse}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                        <p>news</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}
export default EditCompany;