import React from "react";
import styles from "./CreateCompany.module.css";
import "react-autocomplete-input/dist/bundle.css";
import AutoCompleteFilter from "./InputAutocomplete/AutocompleteFilter";
import { Field } from "redux-form";


const CreateCompany = (props) => {
    return (
        <div >
            <div className={styles.header}>
                <h1>Draft project</h1>
                <h4>Consistently fill in all the fields of the project.</h4>
                <form onSubmit={props.handleSubmit}>
                    <nav>
                        <div className="nav nav-tabs" id="nav-tab" role="tablist">
                            <a className="nav-item nav-link active" id="nav-home-tab"
                                data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home"
                                aria-selected="true">General information</a>
                            <button type="submit" style={{ marginLeft: "40%" }}
                                className="btn btn-danger">Save changes</button>
                        </div>
                    </nav>
                    <div className="tab-content" id="nav-tabContent">
                        <div className="tab-pane fade show active" id="nav-home" role="tabpanel"
                            aria-labelledby="nav-home-tab">
                            <div className={styles.container}>
                                <h5>Name Company</h5>
                                <Field name={"nameCompany"} onChange={props.onChange}
                                    className="form-control form-control-lg" component={"input"}
                                    type={"text"} placeholder={"Enter company name"} />
                                <p>The name should be concise, unique and memorable.
                                    Be sure that the name of the project reflects its essence.</p>
                            </div>
                            <div className={styles.container}>
                                <h5>Short Company Description</h5>
                                <Field name={"shortDescription"}
                                    component={"textarea"}
                                    className="form-control form-control-lg" type={"text"}
                                    placeholder={"Tell us briefly about the project"} />
                                <p>Describe the purpose of your company in one sentence.</p>
                            </div>
                            <div className={styles.container}>
                                <h5>Company tag</h5>
                                <div className="form-row">
                                    <div className="col">
                                        {/* <AutoCompleteFilter /> */}
                                        <Field  name={"tag"} 
                                            className="form-control form-control-lg" component={"input"}
                                            type={"text"} placeholder={"Enter company tag" }/>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.container}>
                                <h5>Budget and Campaign Duration</h5>
                                <div className="form-row">
                                    <div className="col">
                                        <Field name={"money"} component={"input"}
                                            type={"number"} min="1" className="form-control" 
                                            placeholder={"Enter the amount of money in USA"} />
                                    </div>
                                    <div className="col">
                                        <input name={"days"} component={"input"}
                                            type={"number"} min="1" max="180" className="form-control" placeholder={"Days"} />
                                    </div>
                                    <p>from 1 to 180 days</p>
                                </div>
                                <p>We draw your attention to the fact that INDIEQOQO
                                    takes a commission only from successful projects.</p>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default CreateCompany;