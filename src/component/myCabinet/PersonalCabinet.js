import React from 'react';

const PersonalCabinet = (props) => {
    const myCompany = Object.values(props.state.data)
    return (<div>
        {myCompany.map((company) =>
            <div key={company.id}>
                <h1>{company.nameCompany}</h1>
                <div className={'description'}>{company.description}</div>
                <div className={'tag'}>{company.tag}</div>
                    <button onClick={() => { props.handleClick(company.id) }}>Edit company</button>
            </div>
        )}
    </div>
    );
}

export default PersonalCabinet;