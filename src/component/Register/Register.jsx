import React from 'react';
import styles from "./Register.module.css";
import { Field } from "redux-form";
import { Input } from "../FormsControl/FormsControls";
import { required } from "../validation/Validation";
import GoogleRegister from './GoogleLogin';
import { FormattedMessage,  useIntl } from 'react-intl';

const Register = (props) => {
    const intl = useIntl();
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 mt-5 mx-auto'>
                    <form noValidate onSubmit={props.handleSubmit}>
                        <h1 className='h3 mb-3 font-weight-normal'><FormattedMessage id="navigation.pleaseSignIn" /></h1>
                        <div className='form-group'>
                            <label htmlform='login'><FormattedMessage id="navigation.login" /></label>
                            <Field type='text'
                                className='form-control'
                                name='login'
                                placeholder={intl.formatMessage({id: 'navigation.enterLogin'})}
                                component={Input}
                                validate={[required]}
                            />
                        </div>
                        <div className='form-group'>
                            <label htmlform='name'><FormattedMessage id="navigation.name" /></label>
                            <Field type='text'
                                className='form-control'
                                name='name'
                                placeholder={intl.formatMessage({id: 'navigation.enterName'})}
                                component={Input}
                                validate={[required]}
                            />
                        </div>
                        <div className='form-group'>
                            <label htmlform='password'><FormattedMessage id="navigation.password" /></label>
                            <Field type='password'
                                className='form-control'
                                name='password'
                                placeholder={intl.formatMessage({id: 'navigation.enterPassword'})}
                                component={Input}
                                validate={[required]}
                            />
                        </div>
                        <div className='form-group'>
                            <label htmlform='email'><FormattedMessage id="navigation.email" /></label>
                            <Field type='email'
                                className='form-control'
                                name='email'
                                placeholder={intl.formatMessage({id: 'navigation.enterEmail'})}
                                component={Input}
                                validate={[required]}
                            />
                        </div>
                        <div className={styles.google}>
                        <GoogleRegister/>
                        </div>
                        <div className={styles.button}>
                            <button type='submit'
                                className='btn btn-lg btn-danger btn-block'><FormattedMessage id="navigation.signIn" /></button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Register;