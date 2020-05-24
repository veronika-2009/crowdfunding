import React from "react";
import { withRouter } from "react-router-dom";
import LookCompany from "./LookCompany";
import axios from "axios";
import {
    setCompany, saveCompany, saveImage, saveVideo, saveTextMarkdown, setGeneralImage,
    setgeneralVideo
} from "../../../Redux/companyReducer";
import { connect } from "react-redux";


class LookCompanyContainer extends React.Component {
    constructor() {
        super()
        this.state = {
            data: [],
            image: []
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
        axios.get("http://localhost:4000/lookCompany/" + id, {
        }).then((data) => {
            this.props.setCompany(data.data[0]);
        }).catch(error => {
            console.log(error);
        });
        axios.get("http://localhost:4000/lookImage/" + id, {
        }).then((image) => {
            this.props.setGeneralImage(image.data[0]);
        }).catch(error => {
            console.log(error);
        });
        axios.get("http://localhost:4000/lookVideo/" + id, {
        }).then((video) => {
            this.props.setgeneralVideo(video.data[0]);
        }).catch(error => {
            console.log(error);
        });
    }
    render() {
        return (
            <div >
                <LookCompany {...this.props} company={this.props.company} state={this.state}
                    image={this.props.image} video={this.props.video} newTextMarkdown={this.props.newTextMarkdown}
                    handleClick={this.handleClick} removeCompany={this.removeCompany}
                    generalImage={this.props.generalImage} generalVideo={this.props.generalVideo} />
            </div>
        )
    }

}
let mapStateToProps = (state) => ({
    company: state.companyPage.company,
    image: state.companyPage.image,
    video: state.companyPage.company.videos,
    newTextMarkdown: state.companyPage.textMarkdown,
    generalImage: state.companyPage.generalImage,
    generalVideo: state.companyPage.generalVideo
})
let WithUrlData = withRouter(LookCompanyContainer);
export default connect(mapStateToProps, {
    setCompany, saveCompany, saveImage, setgeneralVideo,
    saveVideo, saveTextMarkdown, setGeneralImage
})(WithUrlData);