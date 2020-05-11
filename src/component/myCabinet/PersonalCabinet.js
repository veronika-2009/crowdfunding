import React from 'react';
import { Link } from 'react-router-dom';
import style from './PersonalCabinet.module.css';

const PersonalCabinet = (props) => {
    const myCompany = Object.values(props.state.data)
    return (<div>
        <h2>My Companies</h2>
        {myCompany.map((company) =>
            <div key={company.id}>
                <h1>{company.nameCompany}</h1>
                <div className={'description'}>{company.short_description}</div>
                <div className={'tag'}>{company.tag}</div>
                <div className={'money'}>{company.many}</div>
                <div className={'days'}>{company.days}</div>
              <Link to={{pathname: '/description', state: { data: company.id }}} className={style.remove}>Add description</Link>
              <Link to={{pathname: '/lookCompany', state: { data: company.id }}} className={style.remove}>Look company</Link>
              <Link to={{pathname: '/lookCompany', state: { data: company.id }}} className={style.remove}>Remove company</Link>
                    
            </div>
        )}
    </div>
    );
}

export default PersonalCabinet;