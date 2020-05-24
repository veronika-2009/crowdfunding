import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import companyReducer from "./companyReducer";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from "redux-form";
import { routerReducer } from "react-router-redux";


let reducers = combineReducers({
    routing: routerReducer,
    companyPage: companyReducer,
    form: formReducer
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));
window.store = store;
export default store;