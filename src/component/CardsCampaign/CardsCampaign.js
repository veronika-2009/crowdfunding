import React from "react";
import { Link } from "react-router-dom";
import style from "./CardCampaign.module.css";
import tagImage from "../../img/tag.png";
import { FormattedMessage } from 'react-intl';


const CardsCampaign = (props) => {
    const campaign = Object.values(props.state.data)
    return (
        <div className="row" >
            {
                campaign.map((company) =>
                    <div key={company.id} className="col-xl-4" >
                        <div className={style.container} >
                            <div className="card" style={{ height: "570px" }}>
                                {company.image_links.map(home =>
                                    <div className={style.ramka} key={home.id}>
                                        <img src={home.link_image} style={{ height: "180px" }} className="card-img-top" alt="campaignPhoto" />
                                    </div>
                                )}
                                <div className="card-body">
                                    <h5 className="card-title">{company.nameCompany}</h5>
                                    <Link to='/' className={style.tag}>
                                        <img src={tagImage} alt="tag" />
                                        {company.tag}</Link>
                                    <p className="card-text">{company.short_description}</p>
                                </div>
                                <div className="card-footer">
                                    <small className="text-muted">{company.many}<span><FormattedMessage id="navigation.usa"/> </span> </small>
                                    <br />
                                    <small className="text-muted">{company.days}<span><FormattedMessage id="navigation.daysLeft"/></span></small>
                                    <br />
                                    <br />
                                    <Link to={{ pathname: `/lookCompany/${company.id}` }}
                                        className={style.cardsLink} ><FormattedMessage id="navigation.look" /></Link>
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
















