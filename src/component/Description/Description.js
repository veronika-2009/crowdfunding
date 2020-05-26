import React from "react";
import styles from "./Description.module.css";
import Markdown from "../Markdown/Markdown";
import "react-autocomplete-input/dist/bundle.css";
import MyDropzone from "../myCabinet/Dropzone/Dropzone";
import ReactPlayer from "react-player";
import { FormattedMessage, useIntl } from "react-intl";


const Description = (props) => {
    const intl = useIntl();
    return (
        <div >
            <div className={styles.header}>
                <h1><FormattedMessage id="navigation.addDescription" /></h1>
                <h4><FormattedMessage id="navigation.fiilFields" /></h4>
                <form onSubmit={props.onSubmit}>
                    <nav>
                        <div className="nav nav-tabs" id="nav-tab" role="tablist">
                            <a className="nav-item nav-link active" id="nav-home-tab"
                                data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home"
                                aria-selected="true"><FormattedMessage id="navigation.photoVideo" /></a>
                            <a className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab"
                                href="#nav-profile" role="tab" aria-controls="nav-profile"
                                aria-selected="false"><FormattedMessage id="navigation.detailedInformation" /></a>
                        </div>
                    </nav>
                    <div className="tab-content" id="nav-tabContent">
                        <div className="tab-pane fade show active" id="nav-home" role="tabpanel"
                            aria-labelledby="nav-home-tab">
                            <div className={styles.container}>
                                <h5><FormattedMessage id="navigation.coverProject" /> </h5>
                                <p><FormattedMessage id="navigation.formatIMG" /></p>
                                <MyDropzone idCompany={props.idCompany} />
                                <div className="form-row">
                                    <div className="col" >
                                        <input type="text" style={{ marginTop: "10px" }} name="inputValue"
                                            value={props.state.inputValue}
                                            onChange={props.onChange} className="form-control"
                                            placeholder={intl.formatMessage({ id: "navigation.youtube" })} />
                                            <div className={styles.player}>

                                        <ReactPlayer url={props.state.url} controls={true}
                                            width="80%"
                                            height="80%"
                                            className={styles.reactPlayer}
                                        />
                                            </div>
                                    </div>
                                    <div className="col">

                                        <button onClick={props.onClick} value={props.state.url}
                                            style={{ marginTop: "70px", marginLeft: "20px" }} type="button"
                                            className="btn btn-danger"><FormattedMessage id="navigation.addVideo" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                            <Markdown idCompany={props.idCompany} />
                        </div>
                        <div className="tab-pane fade" id="nav-contact"
                            role="tabpanel" aria-labelledby="nav-contact-tab">...</div>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default Description;