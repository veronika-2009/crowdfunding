import React from 'react';
import { connect } from 'react-redux';
import CountP from './CountP';
import { asyncGetTracks, update } from '../../Redux/actions';
import { sendAddTrack, getAddTrack } from '../../Redux/companyReducer';

class Count extends React.Component {
    onNewMessageChange = (e) => {
        let body = e.target.value
        this.props.sendAddTrackAC(body)
    }
    onGetTracks = () => {
        this.props.onGetTracks()
    }
    addTrack = () => {
        this.props.getAddTrackAC()
        //     this.props.onAddTrack(this.trackInput.value)
        //     this.trackInput.value = '';
    }
    render() {
        console.log(this.props.companyPage)
        return (
            <div>
                <CountP companyPage={this.props.companyPage}
                    addTrack={this.addTrack}
                    onNewMessageChange={this.onNewMessageChange}
                    onGetTracks={this.onGetTracks}
                />
                {/* <input ref={(input) => { this.trackInput = input }} />
                 <button onClick={this.addTrack.bind(this)} >add</button>
                 <ul>{this.props.companyPage.body.map((track, i) =>
                     <li key={i}>{track.name}</li>
                 )}</ul>
                 <div>
                     <button onClick={this.props.onGetTracks}>async</button>
                 </div> */}
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        companyPage: state.companyPage
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        onAddTrack: () => {
            // const payload = {
            //     id: Date.now().toString(),
            //     name
            // }
            dispatch(update())
        },
        onGetTracks: () => {
            dispatch(asyncGetTracks())
        },
        sendAddTrackAC: (payload) => {
            dispatch(sendAddTrack(payload))
        },
        getAddTrackAC: () => {
            dispatch(getAddTrack())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Count);
