import React from 'react';
import styles from './LookCompany.module.css';
import generalImage from '../../../img/hand.jpg';
import youtube from '../../../img/youtube.png';
import tag from '../../../img/tag.png';
import { NavLink } from 'react-router-dom';
import ReactPlayer from "react-player";

const LookCompany = (props) => {
    const myCompany = Object.values(props.state.data);
    return (<div>
        {myCompany.map((company) =>
            <div key={company.id} className={styles.container}>
                <div className={styles.general}>
                    <span className={styles.nameCompany}>{company.nameCompany}</span>
                    <div>
                        <NavLink to='/' className={'tag'}>
                            <img src={tag} alt='tag' />
                            {company.tag}
                        </NavLink>
                    </div>
                    <div className="form-row">
                        <div className="col-9">
                            <img className={styles.generalImage} src={generalImage} alt='generalImage' />
                        </div>
                        <div className="xs-col ml-4 ">
                            <div className={styles.infoBar}>
                                <div className={styles.data}>0</div>
                                <div className={styles.text}>sponsors</div>
                                <div className={styles.data}>0<span>USA</span></div>
                                <div className={styles.text}><span>is necessary</span>{company.many}</div>
                                <div className={styles.data}>{company.days}</div>
                                <span className={styles.text}>days left</span>
                                <br />
                            </div>
                            <div className={styles.editButton}>
                                <button type="submit"
                                    className="btn btn-danger">Edit company</button>
                            </div>
                        </div>
                    </div>
                    {/* <img className={styles.youtube} src={youtube} alt='youtube' /> */}
                    <ReactPlayer url={`https://www.youtube.com/watch?v=_BXuxeuT8ms`} controls={true}
                                            width='73%'
                                            height='20em'
                                            className={styles.reactPlayer}
                                        />
                    <div className={styles.shortDescription}>{company.short_description}</div>
                    <hr className={styles.hrShadow} />
                </div>
                <div className={styles.topnav}>
                    <NavLink to='/lookCompany' className={styles.active}>About</NavLink>
                    <NavLink to='/lookCompany/news'>News</NavLink>
                    <NavLink to='/lookCompany/gallery'>Gallery</NavLink>
                </div>
                <div className={'shortDescription'}>{company.short_description}</div>
            </div>
        )}
    </div>
    );
}

export default LookCompany;