import React from "react";
import PersonalCabinet from "./PersonalCabinet";
import { getCompanyAPI } from "../API/api";
import Cookies from "universal-cookie";
import { withRouter } from "react-router-dom";


const cookies = new Cookies();
cookies.set("nameCompany", "name", { path: "/"});
console.log(cookies.get("nameCompany"));
class PersonalCabinetContainer extends React.Component {
    constructor() {
        super()
        this.state = {
            data: []
        }
    } 
    componentDidMount() {
        getCompanyAPI().then((response) => {
            let data = response.data;
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