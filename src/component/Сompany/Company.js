import React from 'react';
import hand from '../../img/hand.jpg';
import { reduxForm } from 'redux-form';
import CompanyForm from '../Form/CompanyForm';
import axios from 'axios';
import { withRouter } from 'react-router-dom';


const Company = (props) => {
    const CreateCompanyFormRedux = reduxForm({ form: 'createCompany' })(CompanyForm)
    const onSubmit = (values) => {
        // const newCompany = {
            
        // }
        axios.post('http://localhost:4000/createCompany', {values}).then(response => {
            if (response) {
                return props.history.push("/myCabinet");
            }
        })
    }

    return (
        <div >
            <img style={{ width: "60%", marginLeft: "10%" }} src={hand} alt='hand'></img>
            <h1>CLet’s get ready to start your campaign!</h1>
            <span>We want to create the best onboarding for you – please fill out the information below.</span>
            <span>Your answers will be locked for this campaign and can’t be changed later.</span>
            <CreateCompanyFormRedux onSubmit={onSubmit} />
        </div>
    );
}

export default withRouter(Company);