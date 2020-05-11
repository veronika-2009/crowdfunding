import React from "react";
import startImage from "../../img/nophoto.png";
import { Link } from "react-router-dom";
import style from "./CardCampaign.module.css";
import tagImage from "../../img/tag.png";


const CardsCampaign = (props) => {
    const campaign = Object.values(props.state.data)
    return (
        <div className="row" >
            {
                campaign.map((company) =>
                    <div key={company.id} className="col-xl-4" >
                        <div className={style.container} >
                            <div className="card" style={{ height: "670px" }}>
                                <img src={startImage} className="card-img-top" alt="campaignPhoto" />
                                <div className="card-body">
                                    <h5 className="card-title">{company.nameCompany}</h5>
                                    <Link to='/' className={style.tag}>
                                        <img src={tagImage} alt="tag" />
                                        {company.tag}</Link>
                                    <p className="card-text">{company.short_description}</p>
                                </div>
                                <div className="card-footer">
                                    <small className="text-muted">{company.many}<span> USA gather</span> </small>
                                    <br />
                                    <small className="text-muted">{company.days}<span> days left</span></small>
                                    <br />
                                    <br />
                                    <Link to={{ pathname: `/lookCompany/${company.id }` }}
                                        className={style.cardsLink} >Look company</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </div >
    );
}
export default CardsCampaign;
















