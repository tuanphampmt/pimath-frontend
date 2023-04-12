import { combineReducers } from "redux";
import testOnlineReducer from "./test-online.js";
import authUserReducer from "./auth-user";
import adminReducer from "./admin";

const rootReducer = combineReducers({
    testOnline: testOnlineReducer,
    authUser: authUserReducer,
    admin: adminReducer
});

export default rootReducer;
