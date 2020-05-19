import React from "react";
import PersonalCabinet from "./PersonalCabinet";
import { withRouter } from "react-router-dom";
import axios from "axios";


class PersonalCabinetContainer extends React.Component {
    constructor() {
        super()
        this.state = {
            data: []
        }
    } 
    componentDidMount() {
        let token = JSON.parse( localStorage.getItem('usertoken') );
        let id = token.id
        console.log('get')
        axios.get(`http://localhost:4000/myPersonalCabinet/${id}`).then((response) => {
            let data = response.data;
            console.log(response)
            this.setState({
                data: data
            });
        })
            .catch(error => {
                console.log(error);
            });
    }
    render() {
        return (
            <div >
                <PersonalCabinet state={this.state} />
            </div>
        )
    }
}
export default withRouter(PersonalCabinetContainer);