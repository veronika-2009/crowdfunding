import {createStore, combineReducers, applyMiddleware, compose } from 'redux';
import profileReducer from './profileReducer';
import thunkMiddleware from 'redux-thunk';

let reducers = combineReducers({
    profilePage: profileReducer
});

 const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
 const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

window._store_ = store;

export default store;