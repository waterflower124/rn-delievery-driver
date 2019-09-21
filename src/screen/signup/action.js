import axios from 'axios';


import Toast from 'react-native-simple-toast';
import { SIGNUP_ATTEPT, SIGNUP_SUCCESS, SIGNUP_FAILED } from './type';
import { SIGNUP_URL } from '../../utility/AppConstant';


export function isLoading(bool:Boolean){
    return{
        type : SIGNUP_ATTEPT,
        isLoading:bool
    }

}


export function signupSuccess(userData : Object){
return{
    type :SIGNUP_SUCCESS,
     userData
}
}

export function signupFailed(error : Object){
    return{
        type:SIGNUP_FAILED,
        error,
    }
}

export function signup(data:Object){
  console.log("USERDATA========>",data)
    return dispatch => {
      dispatch(isLoading(true));
    return  axios.get(SIGNUP_URL+'first_name='+data.full_name+'&dni='+data.dni+'&address=indore&email='+data.email+'&password='+data.password+'&mobile='+data.phone_number+'&varification_code=5656&licence_number='+data.licence_number+'&licence_category='+data.licence_category+'&licence_exp_date='+data.txt_date+'&type=DRIVER&register_id=212212&ios_register_id=')
      .then(res => {
        if (res.status == 200) {
          if(res.data.status == '1'){
            dispatch(isLoading(false))
            dispatch(signupSuccess(JSON.stringify(res.data)))  
          }else{
            dispatch(isLoading(false))
                        dispatch(signupFailed(res.data.message))
          }
  
        } else {
            dispatch(isLoading(false))
                    dispatch(signupFailed(res.data.message))
        }


      })
          }
  }