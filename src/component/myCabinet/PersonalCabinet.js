import React from "react";
import { Link } from "react-router-dom";
import style from "./PersonalCabinet.module.css";


const PersonalCabinet = (props) => {
    const myCompany = Object.values(props.state.data)
    return (<>
        <h2>My Companies</h2>
        <div className="row" >
            {
                myCompany.map((company) =>
                    <div key={company.id} className="col-xl-6" >
                        <div className={style.container} >
                            <div className="card" style={{ height: "750px" }}>
                                {company.image_links.map(home =>
                                    <img style={{ height: "420px" }} src={home.link_image} className="card-img-top" alt="campaignPhoto" />
                                )}
                                <div className="card-body">
                                    <h5 className="card-title">{company.nameCompany}</h5>
                                    <div className={"tag"}>{company.tag}</div>
                                    <p className="card-text" style={{ textTransform: "none" }}>{company.short_description}</p>
                                </div>
                                <div className="card-footer">
                                    <small className="text-muted">{company.many}<span> USA gather</span> </small>
                                    <br />
                                    <small className="text-muted">{company.days}<span> days left</span></small>
                                    <br />
                                    <br />
                                    <Link to={{ pathname: `/lookCompany/${company.id}` }}
                                        className={style.myCompanyLink}>Look company</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </div >
    </>
    );
}
export default PersonalCabinet;
