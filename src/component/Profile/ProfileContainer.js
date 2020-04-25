import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';


class ProfileContainer extends React.Component {
    render() {
        return (
            <Profile {...this.props} 
            isOwner={this.props.match.params}
            savePhoto={this.props.savePhoto} />
        );
    }
}
let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
})
let WithUrlDataContainerComponent = withRouter(ProfileContainer);
export default connect(mapStateToProps)(WithUrlDataContainerComponent);