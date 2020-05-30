import React from "react";
import axios from "axios";
import Profile from "./Profile";


class ProfileContainer extends React.Component {
    constructor() {
        super()
        this.state = {
            data: []
        }
        this.updateState = this.updateState.bind(this);
    }
    updateState() {
        let myTokenId = JSON.parse(localStorage.getItem("usertoken"));
        let id = myTokenId.id;
        axios.get("http://localhost:4000/lookImageProfile/" + id, {
        }).then((image) => {
            let profile = image.data[0];
            this.setState({
                data: profile
            });
        }).catch(error => {
            console.log(error);
        });
    }
    componentDidMount() {
        let userTokenId = JSON.parse(localStorage.getItem("usertoken"));
        let id = userTokenId.id;
        axios.get("http://localhost:4000/lookImageProfile/" + id, {
        }).then((image) => {
            let profile = image.data[0];
            this.setState({
                data: profile
            });
        }).catch(error => {
            console.log(error);
        });
    }
    render() {
        return (
            <div >
                <Profile state={this.state} updateState={this.updateState}
                />
            </div>
        )
    }

}
export default ProfileContainer;
