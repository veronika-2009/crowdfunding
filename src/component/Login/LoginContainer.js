import React from "react";
import { login } from "../API/api";
import { withRouter } from "react-router-dom";
import Login from "./Login";
import { reduxForm } from "redux-form";


const LoginContainer = (props) => {
    const CreateLoginFormRedux = reduxForm({ form: "Login" })(Login)
    const onSubmit = (values) => {
        const data = {
            email: values.email,
            password: values.password
        }
        login(data).then(res => {
            if (res) {
                props.history.push("/")
            }
        })
    }
    return (
        <div >
            <CreateLoginFormRedux onSubmit={onSubmit} />
        </div>
    )

}
export default withRouter(LoginContainer);
