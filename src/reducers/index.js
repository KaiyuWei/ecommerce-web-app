// reducer for managing users
// redux can combine many reducers in this App into one reducer, which is the "rootReducer" we use in this App
import { combineReducers } from "redux";
import { userReducer } from "./userReducer";

const rootReducer = combineReducers({
    user: userReducer,
});

export default rootReducer;