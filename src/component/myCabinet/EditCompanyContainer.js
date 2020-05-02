import axios, { post } from 'axios';
import { withRouter } from 'react-router-dom';
import EditCompany from './EditCompany';
import React from "react";
import FormData from 'form-data';

class EditCompanyContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            file: null,
        }
        this.onFormSubmit = this.onFormSubmit.bind(this)
        this.onChange = this.onChange.bind(this)
        this.fileUpload = this.fileUpload.bind(this)
    }
    onFormSubmit(e) {
        e.preventDefault() 
        this.fileUpload(this.state.file).then((response) => {
            console.log(response.data);
        })
    }
    onChange(e) {
        this.setState({ file: e.target.files[0] })
    }
    fileUpload(file) {
        debugger
        const url = 'http://localhost:4000/upload';
        const formData = new FormData();
        formData.append('file', file)
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        return post(url, formData, config)
    }
    // componentDidMount() {
    //     let url = this.props.location.search
    //     let id = Number(url.split('?').slice(1))
    //     axios.get('http://localhost:4000/editCompany/' + id)
    //         .then(response => {
    //             let data = response.data;
    //             this.setState({
    //                 data: data
    //             });
    //         })
    //         .catch(error => {
    //             console.error();
    //         })
    // }
    render() {
        return (
            <div >
                <EditCompany state={this.state} />
            </div>
        )
    }
}
export default withRouter(EditCompanyContainer);