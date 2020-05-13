import axios from "axios";
import { withRouter } from "react-router-dom";
import React from "react";
import Description from "./Description";


class DescriptionContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            inputValue: "",
            url: "",
            description: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onGetInfo = this.onGetInfo.bind(this);
    }
    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({ url: this.state.inputValue })
        const videoUrl = this.state.inputValue
        const idCompany = this.props.match.params.id;
        axios.post("http://localhost:4000/uploadVideo/" + idCompany, { videoUrl }, {
        }).then(res => {
            console.log(res.statusText)
        })
    }
    onGetInfo(e) {
        this.setState({ [e.target.name]: e.target.value })
    }
    render() {
        return (
            <div >
                <Description state={this.state}
                    onClick={this.handleSubmit}
                    onChange={this.onGetInfo}  idCompany={this.props.match.params.id}/>
            </div>
        )
    }
}
export default withRouter(DescriptionContainer);