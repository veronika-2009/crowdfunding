import React from "react";
import { withRouter } from "react-router-dom";
import CardsCampaign from "./CardsCampaign";
import axios from "axios";


class CardsCampaignContainer extends React.Component {
    constructor() {
        super()
        this.state = {
            data: []
        }
    }
    componentDidMount() {
        axios.get("http://localhost:4000/myCabinet").then((response) => {
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
                <CardsCampaign state={this.state} />
            </div>
        )
    }
}
export default withRouter(CardsCampaignContainer);

