import axios from 'axios';


import Toast from 'react-native-simple-toast';
import { OTP_ATTEPT, OTP_SUCCESS, OTP_FAILED } from './type';
import { OTP_URL } from '../../utility/AppConstant';


export function isLoading(bool:Boolean){
    return{
        type : OTP_ATTEPT,
        isLoading:bool
    }

}


export function otpSuccess(userData : Object){
return{
    type :OTP_SUCCESS,
     userData
}
}

export function otpFailed(error : Object){
    return{
        type:OTP_FAILED,
        error,
    }
}

export function otp(data:Object){
  console.log("Otp========>",data)
    return dispatch => {
      dispatch(isLoading(true));
    return  axios.get(OTP_URL+'user_id='+data.user.id+'&veri_code='+data.veri_code)
      .then(res => {
        if (res.status == 200) {
          if(res.data.status == '1'){
            dispatch(isLoading(false))
            dispatch(otpSuccess(JSON.stringify(res.data)))  
          }else{
            dispatch(isLoading(false))
                        dispatch(otpFailed(res.data.message))
          }
  
        } else {
            dispatch(isLoading(false))
                    dispatch(otpFailed(res.data.message))
        }


      })
          }
  }