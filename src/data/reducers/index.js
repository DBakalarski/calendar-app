import { combineReducers } from "redux";
import viewReducer from "./view.reducer";

const rootReducers = combineReducers({
    view: viewReducer
})

export default rootReducers;