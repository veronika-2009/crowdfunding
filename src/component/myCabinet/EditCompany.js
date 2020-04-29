import React from 'react';
import styles from './EditCompany.module.css';
import img from '../../img/nophoto.png'
import youtube from '../../img/youtube2.png'
import Markdown from '../Markdown/Markdown';


const EditCompany = (props) => {

    return (
        <div >
            <div className={styles.header}>
                <h1>Draft project</h1>
                <h4>Consistently fill in all the fields of the project.</h4>
                <form>
                    <nav>
                        <div className="nav nav-tabs" id="nav-tab" role="tablist">
                            <a className="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">General information</a>
                            <a className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Detailed information</a>
                            <a className="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">
                                Photo gallery</a>
                            <button type="button" style={{marginLeft: '150px'}} className="btn btn-danger">Save changes</button>
                        </div>
                    </nav>
                    <div className="tab-content" id="nav-tabContent">
                        <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                            <div className={styles.container}>
                                <h5>Name Company</h5>
                                <input className="form-control form-control-lg" type="text" placeholder="Enter company name" />
                                <p>The name should be concise, unique and memorable. Be sure that the name of the project reflects its essence.</p>
                            </div>
                            <div className={styles.container}>
                                <h5>Short Company Description</h5>
                                <textarea className="form-control form-control-lg" type="text" placeholder="Tell us briefly about the project" />
                                <p>Describe the purpose of your company in one sentence.</p>
                            </div>
                            <div className={styles.container}>
                                <h5>Company Category</h5>
                                <select className="form-control">
                                    <option>Select a category</option>
                                    <option>Design</option>
                                    <option>Food</option>
                                    <option>The science</option>
                                    <option>Games</option>
                                </select>
                            </div>
                            <div className={styles.container}>
                                <h5> Project cover and video</h5>
                                <button type="button" className="btn btn-danger">Add cover</button>
                                <p>This is the main image of your project.JPG, PNG, GIF, BMP / Format: 16x9 / Limit: 5 Mb</p>
                                <img className={styles.generalPhoto} src={img} alt='noPhoto' />
                                <div className="form-row">
                                <div className="col">
                                <img className={styles.video} src={youtube} alt='noVideo' />
                                </div>
                                <div className="col">
                                <button style={{marginTop:'40px', marginLeft:'250px'}} type="button" className="btn btn-danger">Add video</button>
                                </div>
                                </div>
                                <p>Projects with video are more likely to succeed! Add a link from YouTube.</p>
                            </div>
                            <div className={styles.container}>
                                <h5>Budget and Campaign Duration</h5>
                            <div className="form-row">
                                <div className="col">
                                    <input type="text" className="form-control" placeholder="Enter the amount of money in USA" />
                                </div>
                                <div className="col">
                                    <input type="text" className="form-control" placeholder="Days" />
                                </div>
                                <p>from 1 to 180 days</p>
                            </div>
                                <p>We draw your attention to the fact that INDIEQOQO takes a commission only from successful projects.</p>
                        </div>
                        </div>
                        <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                            <Markdown />
                        </div>
                        <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">...</div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default EditCompany;