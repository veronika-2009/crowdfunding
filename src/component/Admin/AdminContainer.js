import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Admin from "./Admin";
import { usersList } from "../API/api";
import axios from "axios";


class AdminContainer extends Component {
    constructor() {
        super()
        this.state = { data: [] };
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.checkboxId = this.checkboxId.bind(this);
        this.assignAdmin = this.assignAdmin.bind(this);
        this.assignUser = this.assignUser.bind(this);
    }
    componentDidMount() {
        usersList().then((response) => {
            let data = response.data;
            this.setState({
                data: data
            });
        })
            .catch(error => {
                console.log(error);
            });
    }
    handleFormSubmit(id) {
        axios.post("http://localhost:4000/delete/" + id)
            .then(response => {
                if (response) {
                    console.log('ok')
                }
            }).catch(function(err) {
                console.log(err)
             })
    }
    assignAdmin(id) {
        axios.post("http://localhost:4000/assignAdmin/" + id)
            .then(response => {
                if (response) {
                    console.log('ok')
                }
            }).catch(function(err) {
                console.log(err)
             })
    }
    assignUser(id) {
        axios.post("http://localhost:4000/assignUser/" + id)
            .then(response => {
                if (response) {
                    console.log('ok')
                }
            }).catch(function(err) {
                console.log(err)
             })
    }
    checkboxId = (id) => {
        this.setState({ checkboxId: id })
    }
    render() {
        return (
            <div>
                <Admin state={this.state} handleFormSubmit={this.handleFormSubmit}
                    checkboxId={this.checkboxId} assignAdmin={this.assignAdmin} assignUser={this.assignUser} />
            </div>
        )
    }
}
export default withRouter(AdminContainer);