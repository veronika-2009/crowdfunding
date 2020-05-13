import React from 'react';
import { withRouter } from 'react-router-dom';
import LookCompany from './LookCompany';
import axios from 'axios';
import { setCompany, saveCompany, saveImage} from "../../../Redux/companyReducer";
import { connect } from "react-redux";


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
        // const id = this.props.match.params.id
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
        }).then((data) => {
            this.props.setCompany(data.data[0]);
            // let data = response.data;
            // this.setState({
            //     data: data
            // });
        }).catch(error => {
            console.log(error);
        });
    }
    render() {
        return (
            <div >
                <LookCompany {...this.props} company={this.props.company} 
                image={this.props.image} video={this.props.video}
                handleClick={this.handleClick} removeCompany={this.removeCompany} />
            </div>
        )
    }
}
let mapStateToProps = (state) => ({
    company: state.companyPage.company,
    image: state.companyPage.image,
    video: state.companyPage.company.videos
})
let WithUrlData = withRouter(LookCompanyContainer);
export default connect(mapStateToProps, { setCompany, saveCompany, saveImage})(WithUrlData);