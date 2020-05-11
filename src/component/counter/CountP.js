import React from 'react';


const CountP = (props) => {
    return (
        <div>
            <input
                value={props.addInputValue}
                onChange={props.onNewMessageChange}
            />
            {/* <input ref={(input) => { props.trackInput = input }} /> */}
            {/* <button onClick={props.addTrack} >add</button>  */}
            <ul>{props.companyPage.body.map((track, i) =>
                <li key={i}>{track}</li>
            )}</ul>
            <button onClick={props.addTrack} >add</button>
            <button onClick={props.onGetTracks}>async</button>
        </div>
    )
}

export default CountP;