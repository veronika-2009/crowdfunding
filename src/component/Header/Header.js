import React from 'react';
import styles from './Header.module.css';
import { NavLink } from 'react-router-dom';
import { withRouter } from "react-router-dom";
import { locales } from "../shared/locales";
import { Select, MenuItem } from "@material-ui/core";
import storageKeys from "../shared/storageKeys";
import { FormattedMessage } from 'react-intl';


const Header = (props) => {
    const logOut = (e) => {
        e.preventDefault()
        localStorage.removeItem('usertoken')
        props.history.push('/')
    }
    const onLocaleChange = (e) => {
        props.setLocale(e.target.value);
        localStorage.setItem(storageKeys.LOCALE, e.target.value);
    };
    let token = JSON.parse(localStorage.getItem('usertoken'));
    const userLink = (
        <ul className='navbar-nav'>
            <div className={styles.name}>
                <li className="nav-item">
                    <NavLink className="nav-item nav-link" to='/'>{token === null ? 'anonim' : token.name} </NavLink>
                </li>
            </div>
            <div className={styles.logOut}>
                <li className="nav-item">
                    <NavLink className="nav-item nav-link" to='/login' onClick={logOut}>Log Out</NavLink>
                </li>
            </div>
            <li className="nav-item">
                <NavLink className="nav-item nav-link" to='/createCompany'> Start a Campaign</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-item nav-link" to='/myCabinet'> My cabinet</NavLink>
            </li>
        </ul>
    )
    const loginRegLink = (
        <div className={styles.login}>
            <ul className='navbar-nav'>
                <li className="nav-item">
                    <NavLink className="nav-item nav-link" to='/login' >Log In</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-item nav-link" to='/register' >Sign Up</NavLink>
                </li>
            </ul>
        </div>
    )
    return (
        <div className={styles.header}>
            <nav className="navbar fixed-top navbar-expand-md bg-light navbar-light">
                <NavLink to='/' className={styles.logo} >INDIEGOGO</NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="navbar-nav">
                        {localStorage.usertoken ? userLink : loginRegLink}
                        <form className="form-inline">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </ul>
                </div>
                <div>
                    <Select
                        value={props.locale}
                        onChange={onLocaleChange}
                    >
                        <MenuItem value={locales.RU}>
                            <FormattedMessage id="language.russian" />
                        </MenuItem>
                        <MenuItem value={locales.EN}>
                            <FormattedMessage id="language.english" />
                        </MenuItem>
                    </Select>
                </div>
            </nav>
        </div>
    );
}
export default withRouter(Header);