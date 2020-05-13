import React from 'react';
import { connect } from 'react-redux';
import { counterActionCreator } from '../../Redux/profileReducer';


const Counter =(props) => {
   let handleClick = () =>{
        props.counterAction()
    }
  
        return (
            <div >
               Counter:{props.counter}
                <button onClick={handleClick}>add</button>
                <button>delite</button>
            </div>
        );
    }

let mapStateToProps = (state) => {
    return{
        counter: state.profilePage.counter
    }

    }
let mapDispatchToProps = (dispatch) => {
        return{
            counterAction: () => {
                dispatch(counterActionCreator())
            }
        }      

    }
export default connect(mapStateToProps, mapDispatchToProps)(Counter);