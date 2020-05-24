import React from "react";
import { Link } from "react-router-dom";
import style from "./PersonalCabinet.module.css";
import { FormattedMessage } from "react-intl";


const PersonalCabinet = (props) => {
    const myCompany = Object.values(props.state.data)
    if(myCompany.length===0){
        return <h2 className={style.noHaveCompany}><FormattedMessage id="navigation.noHave" /></h2>
    }else{
    return (<>
        <h2><FormattedMessage id="navigation.myCompanies" /></h2>
        <div className="row" >
            {
                myCompany.map((company) =>
                    <div key={company.id} className="col-xl-6" >
                        <div className={style.container} >
                            <div className="card" style={{ height: "650px" }}>
                                {company.image_links.map(home =>
                                 <div className={style.ramka}>
                                     <img style={{ height: "220px" }} src={home.link_image} className="card-img-top" alt="campaignPhoto" />
                                     </div>
                                )}
                                <div className="card-body">
                                    <h5 className="card-title">{company.nameCompany}</h5>
                                    <div className={"tag"}>{company.tag}</div>
                                    <p className="card-text" style={{ textTransform: "none" }}>{company.short_description}</p>
                                </div>
                                <div className="card-footer">
                                    <small className="text-muted">{company.many}<span><FormattedMessage id="navigation.usa" /></span> </small>
                                    <br />
                                    <small className="text-muted">{company.days}<span><FormattedMessage id="navigation.daysLeft" /></span></small>
                                    <br />
                                    <br />
                                    <Link to={{ pathname: `/lookCompany/${company.id}` }}
                                        className={style.myCompanyLink}><FormattedMessage id="navigation.look" /></Link>
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
}
export default PersonalCabinet;
