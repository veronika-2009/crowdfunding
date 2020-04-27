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
                <label >Description</label>
                <Field  className="form-control" name={'description'}
                    component={'input'} placeholder={"Description"}  />
            </div>
            <div className="form-group">
                <label >Tag</label>
                <Field  className="form-control" name={'tag'}
                    component={'input'} placeholder={"Tag"}  />
            </div>
            <button className="btn btn-primary" >Submit</button>
        </form>
    );
}

export default CompanyForm;