import React from "react";
import styles from "./LookCompany.module.css";
import generalImage from "../../../img/hand.jpg";
import tag from "../../../img/tag.png";
import { NavLink } from "react-router-dom";
import ReactPlayer from "react-player";


const LookCompany = (props) => {
    const myCompany = Object.values(props.state.data);
    return (<div>
        {myCompany.map((company) =>
            <div key={company.id} className={styles.container}>
                <div className={styles.general}>
                    <span className={styles.nameCompany}>{company.nameCompany}</span>
                    <div>
                        <NavLink to="/" className={"tag"}>
                            <img src={tag} alt="tag" />
                            {company.tag}
                        </NavLink>
                    </div>
                    <div className="form-row">
                        <div className="col-9">
                            <img className={styles.generalImage} src={generalImage} alt="generalImage" />
                        </div>
                        <div className="xs-col ml-4">
                            <div className={styles.infoBar}>
                                <div className={styles.data}>0</div>
                                <div className={styles.text}>sponsors</div>
                                <div className={styles.data}>0<span>USA</span></div>
                                <div className={styles.text}><span>is necessary</span>{company.many}</div>
                                <div className={styles.data}>{company.days}</div>
                                <span className={styles.text}>days left</span>
                                <br />
                            </div>
                            <div className={styles.editButton}>
                                <button type="submit"
                                    className="btn btn-danger">Edit company</button>
                                <button to='/myCabinet'
                                    onClick={() => props.removeCompany(company.id)}
                                    className="btn btn-danger" >Remove</button>
                            </div>
                        </div>
                    </div>
                    <ReactPlayer url={`https://www.youtube.com/watch?v=_BXuxeuT8ms`} controls={true}
                        width="73%"
                        height="20em"
                        className={styles.reactPlayer}
                    />
                    <div className={styles.shortDescription}>{company.short_description}</div>
                    <hr className={styles.hrShadow} />
                </div>
                <div className={styles.topnav}>
                    <nav>
                        <div className="nav nav-tabs" id="nav-tab" role="tablist">
                            <a className="nav-item nav-link active" id="nav-home-tab"
                                data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home"
                                aria-selected="true">About</a>
                            <a className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab"
                                href="#nav-profile" role="tab" aria-controls="nav-profile"
                                aria-selected="false">News</a>
                            <a className="nav-item nav-link" id="nav-contact-tab" data-toggle="tab"
                                href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">
                                Gallery</a>
                        </div>
                    </nav>
                    <div className="tab-content" id="nav-tabContent">
                        <div className="tab-pane fade show active" id="nav-home" role="tabpanel"
                            aria-labelledby="nav-home-tab">
                            <div className={styles.container}>
                                <div className={"shortDescription"}>{company.short_description}</div>
                                <div className={"description"}>{company.description}</div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                            <p>page 2</p>
                        </div>
                        <div className="tab-pane fade" id="nav-contact"
                            role="tabpanel" aria-labelledby="nav-contact-tab">...</div>
                    </div>
                </div>
            </div>
        )}
    </div>
    );
}
export default LookCompany;