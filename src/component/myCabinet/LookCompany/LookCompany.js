import React from "react";
import styles from "./LookCompany.module.css";
import tag from "../../../img/tag.png";
import { NavLink } from "react-router-dom";
import ReactPlayer from "react-player";
import { useState } from "react";
import CompanyDataForm from "./CompanyDataForm";
import ReactMarkdown from "react-markdown";


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
        <div>
            {editMode
                ? <CompanyDataForm company={props.company} onSubmit={onSubmit} initialValues={props.company}
                    image={props.image} video={props.video} />
                : <EditCompany goToEditMode={() => { setEditMode(true) }} {...props} company={props.company}
                    image={props.company.image_links} />}
        </div>
    )
}
const EditCompany = (props) => {
    let token = JSON.parse(localStorage.getItem('usertoken'));

    const user = (
        <div>
        </div>
    )
    const creator = (
        <div className={styles.logOut}>
            <button to="/myCabinet"
                onClick={() => props.removeCompany(props.company.id)}
                className="btn btn-danger">Remove company</button>
            <button type="submit" onClick={props.goToEditMode}
                className="btn btn-danger">Edit company</button>
        </div>
    )

    const sourse = props.company.description
    return (<div>
        <div className={styles.container}>
            <div className={styles.general}>
                <span className={styles.nameCompany}>{props.company.nameCompany}</span>
                <div>
                    <NavLink to="/" className={"tag"}>
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
                            <div className={styles.text}>sponsors</div>
                            <div className={styles.data}>300<span>$</span></div>
                            <div className={styles.text}><div>is necessary</div>{props.company.many}</div>
                            <div className={styles.data}>{props.company.days}</div>
                            <span className={styles.text}>days left</span>
                            <br />
                        </div>
                        <div className={styles.editButton}>

                            {token === null ? user : token.role === "admin" || token.id === props.company.newUserId ? creator : user}
                        </div>
                    </div>
                </div>
                <p className={styles.headingDescription}>Short description project</p>
                <div className={styles.shortDescription}>{props.company.short_description}</div>
            </div>
            <div className={styles.navigationСontent}>
                <nav>
                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                        <a className="nav-item nav-link active" id="nav-home-tab"
                            data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home"
                            aria-selected="true">About</a>
                        <a className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab"
                            href="#nav-profile" role="tab" aria-controls="nav-profile"
                            aria-selected="false">News</a>
                    </div>
                </nav>
                <div className="tab-content" id="nav-tabContent">
                    <div className="tab-pane fade show active" id="nav-home" role="tabpanel"
                        aria-labelledby="nav-home-tab">
                        <div className={styles.description}>
                            <div className={"description"}>
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
export default LookCompany;