import { combineReducers } from "redux";
import AuthReducer from './auth'
import UtilityReducer from './utility'

export default combineReducers({
    auth: AuthReducer,
    utility: UtilityReducer
});
