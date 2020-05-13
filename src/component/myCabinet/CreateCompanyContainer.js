import React from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import CreateCompany from "./CreateCompany";
import { reduxForm } from "redux-form";


const CreateCompanyContainer = (props) => {
    const CreateCompanyFormRedux = reduxForm({ form: "CreateCompany" })(CreateCompany)
    const onSubmit = (values) => {
        axios.post("http://localhost:4000/saveNewCompany/", { values }, {
        }).then(response => {
            if (response) {
                let id = response.data.id
                return props.history.push(`/description/${id}`);
            }
        })
    }
    return (
        <div >
            <CreateCompanyFormRedux onSubmit={onSubmit} />
        </div>
    )
}
export default withRouter(CreateCompanyContainer);