import React from 'react';
import PersonalCabinet from './PersonalCabinet';
import { getCompanyAPI } from '../API/api';
import Cookies from 'universal-cookie';
import * as axios from 'axios';
import { withRouter } from 'react-router-dom';
import EditCompanyContainer from './EditCompanyContainer';

const cookies = new Cookies();
cookies.set('nameCompany', 'name', { path: '/' });
console.log(cookies.get('nameCompany'));
class PersonalCabinetContainer extends React.Component {
    constructor() {
        super()
        this.state = {
            data: [],
            // nameCompany: cookies.get('nameCompany') 
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick = (id) => {
        this.setState({ id: id })
        this.props.history.push('/editCompany/?'+id);
    }
    componentDidMount() {
        getCompanyAPI().then((response) => {
            let data = response.data;
            this.setState({
                data: data
            });
            // cookies.set('nameCompany', 'hhhhh', { path: '/' });
        })
            .catch(error => {
                console.log(error);
            });
    }
    render() {
        return (
            <div >
                <PersonalCabinet state={this.state} handleClick={this.handleClick} />
            </div>
        )
    }
}
export default withRouter(PersonalCabinetContainer);