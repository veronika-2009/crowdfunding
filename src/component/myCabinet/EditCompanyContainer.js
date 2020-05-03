import axios from 'axios';
import { withRouter } from 'react-router-dom';
import EditCompany from './EditCompany';
import React from "react";

class EditCompanyContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [],
            inputValue: "",
            url: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange = (event) => {
        this.setState({ inputValue: event.target.value })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState({ url: this.state.inputValue })
        const videoUrl = this.state.inputValue 
        axios.post('http://localhost:4000/uploadVideo/', {videoUrl}, {
        }).then(res => {
            console.log(res.statusText)
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
                <EditCompany state={this.state} onChange={this.handleChange} onClick={this.handleSubmit}/>
          </div>
           
        )
    }
}
export default withRouter(EditCompanyContainer);