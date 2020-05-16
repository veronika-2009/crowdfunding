import React from 'react';
import styles from "./Register.module.css";
import git from "../../img/git.png";
import { Field } from "redux-form";
import { Input } from "../FormsControl/FormsControls";
import { required } from "../validation/Validation";

const Register = (props) => {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-6 mt-5 mx-auto'>
                    <form noValidate onSubmit={props.handleSubmit}>
                        <h1 className='h3 mb-3 font-weight-normal'>Please sign in</h1>
                        <div className='form-group'>
                            <label htmlform='login'>Login</label>
                            <Field type='text'
                                className='form-control'
                                name='login'
                                placeholder='Enter Login'
                                component={Input}
                                validate={[required]}
                            />
                        </div>
                        <div className='form-group'>
                            <label htmlform='password'>Password</label>
                            <Field type='password'
                                className='form-control'
                                name='password'
                                placeholder='Enter Password'
                                component={Input}
                                validate={[required]}
                            />
                        </div>
                        <div className='form-group'>
                            <label htmlform='email'>Email address</label>
                            <Field type='email'
                                className='form-control'
                                name='email'
                                placeholder='Enter Email'
                                component={Input}
                                validate={[required]}
                            />
                        </div>
                        <img className="mb-4" src={git} alt="git" />
                        <div className={styles.button}>
                            <button type='submit'
                                className='btn btn-lg btn-danger btn-block'>Sign in</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default Register;