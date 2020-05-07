import React from 'react';
import { withRouter } from 'react-router-dom';
import CardsCampaign from './CardsCampaign';
import axios from 'axios';


class CardsCampaignContainer extends React.Component {
    constructor() {
        super()
        this.state = {
            data: []
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick = (id) => {
        this.setState({ id: id })
        this.props.history.push('/editCompany/?'+id);
    }
    componentDidMount() {
        axios.get('http://localhost:4000/myCabinet').then((response) => {
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
                <CardsCampaign state={this.state} handleClick={this.handleClick} />
            </div>
        )
    }
}
export default withRouter(CardsCampaignContainer);

