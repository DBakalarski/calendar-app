import { combineReducers } from "redux";
import tasksReducer from "./tasks.reducer";
import modalReducer from "./modal.reducer";

const rootReducers = combineReducers({
    tasks: tasksReducer,
    modal: modalReducer
})

export default rootReducers;