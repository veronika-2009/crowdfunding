import React from 'react';
import styles from './EditCompany.module.css';
import youtube from '../../img/youtube2.png'
import Markdown from '../Markdown/Markdown';
import 'react-autocomplete-input/dist/bundle.css';
import AutoCompleteFilter from './InputAutocomplete/AutocompleteFilter';
import MyDropzone from './Dropzone';
import ReactPlayer from "react-player";



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
                            <button type="button" style={{ marginLeft: '150px' }} className="btn btn-danger">Save changes</button>
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
                                <h5>Company tag</h5>
                                <div className="form-row">
                                    <div className="col">
                                        <AutoCompleteFilter />
                                    </div>
                                </div>
                            </div>
                            <div className={styles.container}>
                                <h5> Project cover and video</h5>
                                <button type="button" className="btn btn-danger">Add cover</button>
                                <p>This is the main image of your project.JPG, PNG, GIF, BMP / Format: 16x9 / Limit: 5 Mb</p>
                                <MyDropzone />
                                <div className="form-row">
                                    <div className="col" >
                                        <input type="text"  style={{ marginTop: '10px'}} name='link' value={props.state.inputValue} onChange={props.onChange} className="form-control" placeholder="Specify link with YouTube"/>
                                        
                                        <ReactPlayer url={props.state.url}  controls={true} 
                                        width='80%'
                                        height='80%'
                                        className={styles.reactPlayer}
                                        />
                                    </div>
                                    <div className="col">
                                    <button  onClick={ props.onClick} value={props.state.url} style={{ marginTop: '170px', marginLeft:'20px' }} type="button" className="btn btn-danger">Add video</button>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.container}>
                                <h5>Budget and Campaign Duration</h5>
                                <div className="form-row">
                                    <div className="col">
                                        <input type="number" min="1"  className="form-control" placeholder="Enter the amount of money in USA" />
                                    </div>
                                    <div className="col">
                                        <input type="number" min="1"  className="form-control" placeholder="Days" />
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