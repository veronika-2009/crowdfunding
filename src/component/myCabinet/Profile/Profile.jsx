import React, { useState } from "react";
import styles from "./Profile.module.css";
import ProfileForm from "./ProfileForm";
import ProfileInfo from "./ProfileInfo";
import axios from "axios";


const Profile = (props) => {
    const onSubmit = (values) => {
        let token = JSON.parse(localStorage.getItem("usertoken"));
        let id = token.id
        axios.post("http://localhost:4000/saveNewProfile/" + id, { values }, {
        }).then(response => {
            setEditProfile(false)
        })
    }
    let [editProfile, setEditProfile] = useState(false);
    return (
        <div className={styles.container}>
            {editProfile
                ? <ProfileForm initialValues={props.state.data}
                    imgProfile={props.state.data} onSubmit={onSubmit} />
                : <ProfileInfo goToEditProfile={() => { setEditProfile(true) }} {...props}
                />}
        </div>
    );
}
export default Profile;