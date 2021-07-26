import { combineReducers } from "redux";
import counterReducer from "./counter";
import loggedReducer from "./isLogged";
import navbarCounterReducer from "./navbarCounter";

const allReducers = combineReducers({
    counter: counterReducer,
    logged: loggedReducer,
    navbarCounter: navbarCounterReducer
});

export default allReducers;