import axios from 'axios';
import { withRouter } from 'react-router-dom';
import CreateCompany from './CreateCompany';
import React from "react";

class CreateCompanyContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            inputValue: "",
            url: "",
            nameCompany: "",
            shortDescription: "",
            money: "",
            days: "",
            description: "",
            tag: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.onGetInfo = this.onGetInfo.bind(this);
        this.onSubmit = this.onSubmit.bind(this)
    }
    
    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({ url: this.state.inputValue })
        const videoUrl = this.state.inputValue
        axios.post('http://localhost:4000/uploadVideo/', { videoUrl }, {
        }).then(res => {
            console.log(res.statusText)
        })
    }
    onGetInfo(e) {
        this.setState({ [e.target.name]: e.target.value })
    }
    onSubmit(e) {
        e.preventDefault()
        const newCompany = {
            nameCompany: this.state.nameCompany,
            shortDescription: this.state.shortDescription,
            money: this.state.money,
            days: this.state.days,
            description: this.state.description,
            tag: this.state.tag
        }
        axios.post('http://localhost:4000/saveNewCompany/', { newCompany }, {
        }).then(response => {
            if (response) {
                return this.props.history.push("/myCabinet");
            }
        })
    }
    // componentDidMount() {
    //     let url = this.props.location.search
    //     let id = Number(url.split('?').slice(1))
    //     axios.get('http://localhost:4000/editCompany/' + id)
    //         .then(response => {
    //             let data = response.data;
    //             this.setState({
    //                 data: data
    //             });
    //         })
    //         .catch(error => {
    //             console.error();
    //         })
    // }
    render() {
        return (
            <div >
                <CreateCompany state={this.state} 
                onClick={this.handleSubmit} 
                onChange={this.onGetInfo} onSubmit={this.onSubmit} />
            </div>
        )
    }
}
export default withRouter(CreateCompanyContainer);