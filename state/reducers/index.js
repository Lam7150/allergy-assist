import allergyReducer from "./allergyReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    restrictions: allergyReducer
})

export default rootReducer;