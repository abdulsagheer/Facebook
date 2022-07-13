// Importing Libraries
import { combineReducers } from "redux";
// Importing Reducer Component
import { userReducer } from "./userReducer";

const rootReducer = combineReducers({
    user: userReducer,
});

export default rootReducer;
