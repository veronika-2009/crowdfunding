import React from 'react';
import { Link } from 'react-router-dom';

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
                    <button onClick={() => { props.handleClick(company.id) }}>Edit company</button>
              <Link to={{pathname: '/lookCompany', state: { data: company.id }}} className="ml-3"> Look company</Link>
                    
            </div>
        )}
    </div>
    );
}

export default PersonalCabinet;