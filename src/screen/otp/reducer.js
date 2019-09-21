const INITIAL_STATE={
    isLoggedIn:false,
    isLoading:false,
    userData:{},
    error:undefined
  }
  
  export default function authOtp(state=INITIAL_STATE,action){
    console.log(action.type);
    switch (action.type) {
      case 'OTP_ATTEPT':
        return{
          ...state,
          isLoading:true,
          isLoggedIn:false
        }
        break;
      case 'OTP_SUCCESS':
        return{
          ...state,
          isLoading:false,
          isLoggedIn:true,
          userData:action.userData,
          error:undefined
        }
        break;
      case 'OTP_FAILED':
        return{
          ...state,
          isLoading:false,
          isLoggedIn:false,
          error:action.error
        }
        break;
     
      default:
        return state
    }
  }