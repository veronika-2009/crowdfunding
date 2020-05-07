import React from 'react';
import startImage from '../../img/nophoto.png';
import { Link } from 'react-router-dom';
import style from './CardCampaign.module.css';

const CardsCampaign = (props) => {
    const campaign = Object.values(props.state.data)
    return (
        <div className='row' >
            {
                campaign.map((company) =>
                    <div key={company.id} className=" col-xl-4" >
                                <div className="card" style={{height: '800px'}}>
                                    <img src={startImage} className="card-img-top" alt="campaignPhoto" />
                                    <div className="card-body">
                                        <h5 className="card-title">{company.nameCompany}</h5>
                                        <div className={'tag'}>{company.tag}</div>
                                        <p className="card-text">{company.short_description}</p>
                                        <Link to={{ pathname: '/lookCompany', state: { data: company.id } }} className="ml-3">Look company</Link>
                                    </div>
                                    <div className="card-footer">
                                        <small className="text-muted">{company.many}</small>
                                        <small className="text-muted">{company.days}</small>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                    </div >
    );
}

export default CardsCampaign;
















