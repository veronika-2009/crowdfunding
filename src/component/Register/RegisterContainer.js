import React from 'react';
import { register } from '../API/api';
import { withRouter } from "react-router-dom";
import Register from './Register';
import { reduxForm } from "redux-form";

const RegisterContainer = (props) => {
    const CreateRegisterFormRedux = reduxForm({ form: "Register" })(Register)
    const onSubmit = (values) => {
        const data = {
            email: values.email,
            login: values.login,
            password: values.password
        }
        register(data).then(res => {
            props.history.push('/login')
        })
    }
    return (
        <div >
            <CreateRegisterFormRedux onSubmit={onSubmit} />
        </div>
    )
}
export default withRouter(RegisterContainer);