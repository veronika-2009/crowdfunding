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
    removeCompany = (id) => {
        axios.post("http://localhost:4000/remove/" + id).then((response) => {
            if (response) {
                return this.props.history.push("/myCabinet");
            }
            })
            .catch(error => {
                console.log(error);
            });
    } 
    componentDidMount() {
        const id = this.props.match.params.id
        axios.get('http://localhost:4000/lookCompany/'+id, {
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
                <LookCompany state={this.state} handleClick={this.handleClick} removeCompany={this.removeCompany} />
            </div>
        )
    }
}
export default withRouter(LookCompanyContainer);