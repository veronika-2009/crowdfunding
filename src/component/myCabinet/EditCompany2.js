import React from 'react';
import { NavLink } from 'react-router-dom';

const EditCompany = (props) => {
    const myCompany = Object.values(props.state.data)
    return (<>
        {/* {myCompany.map((company) => */}
        {/* <div key={company.id}> */}
        <div className='nameCompany' >
            <h2>Hvermandag.dk</h2>
            {/* <h1>{company.nameCompany}</h1> */}
        </div>
        <NavLink to='/'>КОППЕНГАГЕН  </NavLink>
        <NavLink to='/'>МАТИАС БРАНДЕР СКОВСТЕД </NavLink>
        <NavLink to='/'>ЛИТЕРАТУРА</NavLink>
        {/* <div className={'tag'}>{company.tag}</div> */}
        <div >
            <div class="container">
                <div class="row">
                    <div class="col">Left column
                     <div className={'youtube'}>video</div>
                    </div>
                    <div class="col">Right column
                     <div className={'bonusList'}>
                            <div className={'manyTarget'}>Many</div>
                            <div className={'dateEnd'}></div>
                            <div className={'manyCollected'}></div>
                        </div>
                        <div className={'rating'}></div>
                    </div>
                </div>
            </div>
            <div>Description</div>
            <div className={'imgGallery'}>gallery img</div>
            <div className={'News'}>News
                {/* <div className={'description'}>{company.description}</div> */}
            </div>
        </div>
        
        {/* </div> */}
        {/* )} */}
    </>
    );
}

export default EditCompany;