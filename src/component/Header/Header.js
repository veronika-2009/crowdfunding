import React from 'react';
import styles from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    return (
        <div className={styles.header}>
            <nav class="navbar fixed-top navbar-expand-md bg-dark navbar-dark">
                <NavLink to='/profile' className={styles.logo} >INDIEGOGO</NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-item nav-link" to='/newCompany' > Start a Campaign</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-item nav-link" to='/logIn' >Log In</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-item nav-link" to='/signUp' >Sign Up</NavLink>
                        </li>
                        <form className="form-inline">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </ul>
                </div>
            </nav>
            {/* <nav className="navbar fixed-top navbar-light bg-light ">
                <NavLink to='/profile' className={styles.logo} >INDIEGOGO</NavLink>
                <NavLink className="nav-item nav-link" to='/newCompany' > Start a Campaign</NavLink>
                <NavLink className="nav-item nav-link" to='/logIn' >Log In</NavLink>
                <NavLink className="nav-item nav-link" to='/signUp' >Sign Up</NavLink>

                <form className="form-inline">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </nav> */}
        </div>
    );
}

export default Header;