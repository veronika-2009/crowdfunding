import React, { useState } from "react";
import styles from "./Profile.module.css";
import ProfileForm from "./ProfileForm";
import ProfileInfo from "./ProfileInfo";


const Profile = (props) => {
    let [editProfile, setEditProfile] = useState(false);
    return (
        <div className={styles.container}>
             {editProfile
                ? <ProfileForm  initialValues={props.state.data}
                imgProfile={props.state.data}  />
                : <ProfileInfo goToEditProfile={() => { setEditProfile(true) }} {...props} 
                     />}
            </div>
    );
}
export default Profile;