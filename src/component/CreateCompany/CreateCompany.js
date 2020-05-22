import React from "react";
import styles from "./CreateCompany.module.css";
import "react-autocomplete-input/dist/bundle.css";
import { Field } from "redux-form";
import { required, maxLengthCreator, maxDaysCreator, minDaysCreator } from "../validation/Validation";
import { Input, Textarea } from "../FormsControl/FormsControls";
import { FormattedMessage,  useIntl } from 'react-intl';


let maxLength255 = maxLengthCreator(255);
let maxLength400 = maxLengthCreator(400);
let maxDays = maxDaysCreator(180);
let minDays = minDaysCreator(1);
const CreateCompany = (props) => {
    const intl = useIntl();
    return (
        <div >
            <div className={styles.header}>
                <h1><FormattedMessage id="navigation.draft" /></h1>
                <h4><FormattedMessage id="navigation.fiilFields" /></h4>
                <form onSubmit={props.handleSubmit}>
                    <nav>
                        <div className="nav nav-tabs" id="nav-tab" role="tablist">
                            <a className="nav-item nav-link active" id="nav-home-tab"
                                data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home"
                                aria-selected="true"><FormattedMessage id="navigation.information" /></a>
                            <button type="submit" style={{ marginLeft: "40%" }}
                                className="btn btn-danger"><FormattedMessage id="navigation.saveChanges" /></button>
                        </div>
                    </nav>
                    <div className="tab-content" id="nav-tabContent">
                        <div className="tab-pane fade show active" id="nav-home" role="tabpanel"
                            aria-labelledby="nav-home-tab">
                            <div className={styles.container}>
                                <h5><FormattedMessage id="navigation.nameCompany" /></h5>
                                <Field name={"nameCompany"} onChange={props.onChange}
                                    className="form-control form-control-lg" component={Input}
                                    type={"text"} placeholder={intl.formatMessage({id: "navigation.enterNameCompany"})} 
                                    validate={[required, maxLength255]} />
                                <p><FormattedMessage id="navigation.uniqueName" /></p>
                            </div>
                            <div className={styles.container}>
                                <h5><FormattedMessage id="navigation.shortDescription" /></h5>
                                <Field name={"shortDescription"}
                                    component={Textarea}
                                    className="form-control form-control-lg" type={"text"}
                                    placeholder={intl.formatMessage({id: "navigation.enterShortDescription"})} 
                                    validate={[required, maxLength400]}/>
                                <p><FormattedMessage id="navigation.description" /></p>
                            </div>
                            <div className={styles.container}>
                                <h5><FormattedMessage id="navigation.tag" /></h5>
                                <div className="form-row">
                                    <div className="col">
                                        <Field  name={"tag"} 
                                            className="form-control form-control-lg" component={Input}
                                            type={"text"} placeholder={intl.formatMessage({id: "navigation.enterTag"})}
                                            validate={[required, maxLength255]}/>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.container}>
                                <h5><FormattedMessage id="navigation.buldet" /></h5>
                                <div className="form-row">
                                    <div className="col">
                                        <Field name={"money"} component={Input}
                                            type={"number"} min="1" className="form-control" 
                                            placeholder={intl.formatMessage({id: "navigation.enterUSA"})} 
                                            validate={[required]}/>
                                    </div>
                                    <div className="col">
                                        <Field name={"days"} component={Input}
                                            type={"number"} min="1" max="180" className="form-control" 
                                            placeholder={intl.formatMessage({id: "navigation.enterDays"})} 
                                            validate={[required, maxDays, minDays]}/>
                                    </div>
                                    <p><FormattedMessage id="navigation.days" /></p>
                                </div>
                                <p><FormattedMessage id="navigation.commission" /></p>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default CreateCompany;