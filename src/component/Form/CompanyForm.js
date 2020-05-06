import React from 'react';
import {  Field } from 'redux-form';


const CompanyForm = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div className="form-group">
                <label >Name company</label>
                <Field  className="form-control" name={'nameCompany'}
                    component={'input'} placeholder={"Enter name company"}  />
            </div>
            <div className="form-group">
                <label >Short description</label>
                <Field  className="form-control" name={'shortDescription'}
                    component={'textarea'} placeholder={"Short description"}  />
            </div>
          
            <button className="btn btn-primary" >Submit</button>
        </form>
    );
}

export default CompanyForm;