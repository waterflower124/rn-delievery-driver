import { combineReducers } from "redux";
import auth from '../login/reducer';
import authSignup from '../signup/reducer';
import authOtp from '../otp/reducer';


const rootReducer = combineReducers({
    auth,
    authSignup,
    authOtp
  })

  export default rootReducer;
