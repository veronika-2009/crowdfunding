import axios, { post } from 'axios';
import { withRouter } from 'react-router-dom';
import EditCompany from './EditCompany';
import React from "react";
import ReactPlayer from "react-player";

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
                {/* <form onSubmit={this.handleSubmit}>
                <input onChange={this.handleChange} style={{margin:"20px"}} className="form-control" type="text" placeholder="Input the vidoe url" />
                <button style={{margin:"20px"}} className="btn btn-primary">PLAY VIDEO</button>
              </form> */}
          </div>
           
        )
    }
}
export default withRouter(EditCompanyContainer);