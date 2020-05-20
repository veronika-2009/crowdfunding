import React, { useState } from 'react';
import GoogleLogin from 'react-google-login';
import axios from 'axios';
import { withRouter } from "react-router-dom";


const GoogleRegister = (props) => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const responseGoogle = (response) => {
        setName(response.profileObj.name);
        setEmail(response.profileObj.email);
        if (response) {
            axios.post('http://localhost:4000/login/register', {
                login: response.googleId,
                email: response.profileObj.email,
                name: response.profileObj.name
            }).then(res => {
                let tokenObject = { 'token': res.data.token, 'id': res.data.newUserId, 'name': res.data.name};
                localStorage.setItem('usertoken', JSON.stringify(tokenObject));
                console.log('Registred');
                return res.data;
            })
                .catch(function (err) {
                    console.log(err);
                })
            props.history.push('/')
        }
    }
    return (
        <div >
            <GoogleLogin
                clientId="58051511028-3avvt4ovho56p2ll4p9s57fhg99du3rp.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
            />
        </div>
    )
}
export default withRouter(GoogleRegister);