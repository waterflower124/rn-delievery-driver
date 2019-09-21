import axios from 'axios';


import Toast from 'react-native-simple-toast';
import { BIKE_ATTEPT, BIKE_SUCCESS, BIKE_FAILED } from './type';
import { SIGNUP_URL, BIKE_DATA_URL } from '../../utility/AppConstant';


export function isLoading(bool:Boolean){
    return{
        type : BIKE_ATTEPT,
        isLoading:bool
    }

}


export function bikeSuccess(userData : Object){
return{
    type :BIKE_SUCCESS,
     userData
}
}

export function bikeFailed(error : Object){
    return{
        type:BIKE_FAILED,
        error,
    }
}

export function bike(data:Object){
  console.log("USERDATA========>",data)
    return dispatch => {
      dispatch(isLoading(true));
    return  axios.get(BIKE_DATA_URL+'vehical='+data.type_vehicle+'&color='+data.color+'e&it_own='+data.itsown)
      .then(res => {
        if (res.status == 200) {
          if(res.data.status == '1'){
            dispatch(isLoading(false))
            dispatch(bikeSuccess(JSON.stringify(res.data)))  
          }else{
            dispatch(isLoading(false))
                        dispatch(bikeFailed(res.data.message))
          }
  
        } else {
            dispatch(isLoading(false))
                    dispatch(bikeFailed(res.data.message))
        }


      })
          }
  }