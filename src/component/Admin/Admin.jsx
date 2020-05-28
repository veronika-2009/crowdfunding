import React from "react";
import { FormattedMessage } from "react-intl";
import styles from "./Admin.module.css";


const Admin = (props) => {
    const users = Object.values(props.state.data);
    return (
        <form className="form" >
            <div className={styles.container}>
                <div className="col-md-5 offset-md-7 mb-3 mt-5">
                    <button className="btn btn-danger" onClick={() => { props.handleFormSubmit(props.state.checkboxId) }}>
                        <FormattedMessage id="navigation.removeUser" /></button>
                    <button className="btn btn-danger" onClick={() => { props.assignAdmin(props.state.checkboxId) }}>
                        <FormattedMessage id="navigation.assignAdmin" /></button>
                    <button className="btn btn-danger" onClick={() => { props.assignUser(props.state.checkboxId) }}>
                        <FormattedMessage id="navigation.assignUser" /></button>
                </div>
                <div className="table-responsive">
                    <table className="table">
                        <thead>
                            <tr>
                                <th><input type="checkbox" /></th>
                                <th><FormattedMessage id="navigation.id" /></th>
                                <th><FormattedMessage id="navigation.name" /></th>
                                <th><FormattedMessage id="navigation.login" /></th>
                                <th><FormattedMessage id="navigation.myEmail" /></th>
                                <th><FormattedMessage id="navigation.role" /></th>
                                <th><FormattedMessage id="navigation.nameCompany" /></th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user) =>
                                <tr key={user.newUserId} >
                                    <th><input onClick={() => { props.checkboxId(user.newUserId) }}
                                        name="subscription[]" value={user.newUserId} type="checkbox" /></th>
                                    <td>{user.newUserId}</td>
                                    <td>{user.name}</td>
                                    <td>{user.login}</td>
                                    <td>{user.email}</td>
                                    <td>{user.roles.length === 0 ? null : user.roles[0].roles}</td>
                                    <td>{user.companies.length === 0 ? null : user.companies[0].nameCompany+';'}</td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </form>
    )
};
export default Admin;