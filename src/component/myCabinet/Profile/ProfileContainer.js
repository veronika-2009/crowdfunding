import React from "react";
import axios from "axios";
import Profile from "./Profile";


class ProfileContainer extends React.Component {
    constructor() {
        super()
        this.state = {
            data: []
        }
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
                <Profile state={this.state}
                />
            </div>
        )
    }

}
export default ProfileContainer;
