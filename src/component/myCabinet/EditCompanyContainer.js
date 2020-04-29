import React from 'react';
import PersonalCabinet from './PersonalCabinet';
import { getCompanyAPI } from '../API/api';
import Cookies from 'universal-cookie';
import * as axios from 'axios';
import { withRouter } from 'react-router-dom';
import EditCompany from './EditCompany';


class EditCompanyContainer extends React.Component {
    constructor() {
        super()
        this.state = {
            data: []
        }
    }
    componentDidMount() {
        let url = this.props.location.search
        let id = Number(url.split('?').slice(1))
        axios.get('http://localhost:4000/editCompany/' + id)
            .then(response => {
                let data = response.data;
                this.setState({
                    data: data
                });
            })
            .catch(error => {
                console.error();
            })
    }
    render() {
        return (
            <div >
                <EditCompany state={this.state} />
            </div>
        )
    }
}
export default withRouter(EditCompanyContainer);