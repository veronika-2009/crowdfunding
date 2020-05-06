import React from 'react';
import { withRouter } from 'react-router-dom';
import LookCompany from './LookCompany';
import axios from 'axios';

class LookCompanyContainer extends React.Component {
    constructor() {
        super()
        this.state = {
            data: []
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick = (id) => {
        this.setState({ id: id })
    }
    componentDidMount() {
        const id = this.props.location.state.data
        axios.get('http://localhost:4000/lookCompany/', {
        }).then((response) => {
            let data = response.data;
            this.setState({
                data: data
            });
        }).catch(error => {
            console.log(error);
        });
    }
    render() {
        return (
            <div >
                <LookCompany state={this.state} handleClick={this.handleClick} />
            </div>
        )
    }
}
export default withRouter(LookCompanyContainer);