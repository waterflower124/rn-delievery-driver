import { LOGIN_ATTEPT, LOGIN_SUCCESS, LOGIN_FAILED } from "./type";
import axios from 'axios';


import Toast from 'react-native-simple-toast';
import { LOGIN_URL } from "../../utility/AppConstant";


export function isLoading(bool:Boolean){
    return{
        type : LOGIN_ATTEPT,
        isLoading:bool
    }

}


export function loginSuccess(userData : Object){
return{
    type :LOGIN_SUCCESS,
     userData
}
}

export function loginFailed(error : Object){
    return{
        type:LOGIN_FAILED,
        error,
    }
}

export function login(data:Object){
    return dispatch => {
      dispatch(isLoading(true));
     return axios.get(LOGIN_URL+'email='+data.email+'&password='+data.password+'&register_id='+data.fcm_token+'&lat='+data.lat+'&lon='+data.long+'&type=USER')
      .then(res => {
        // this.setState({loginData : res.data.result })
       if (res.status == 200) {
         if(res.data.status == '1'){
          dispatch(isLoading(false))
          dispatch(loginSuccess(JSON.stringify(res.data)))  
          // Toast.show(JSON.stringify(res.data), Toast.LONG)

         }else{
          dispatch(isLoading(false))
                dispatch(loginFailed(res.data.message))

         }
        } else {
          // Toast.show(JSON.stringify(res.data.message), Toast.LONG)
          dispatch(isLoading(false))
            dispatch(loginFailed(res.data.message))
        }


      })

    // export function facebookLogin(data : Object){
    //   return dispatch => {

    //   }
    // }  


    // export function logout(data:Object){
    //   return dispatch =>{
        
    //   }
    // }
      // return axios('https://www.aveoperu.com/Gadeli/Webservice/login',{
      //   method:'POST',
      //   headers:{
      //     'Content-Type':'application/json'
      //   },
      //   body:JSON.stringify({
      //     "email":data.email,
      //     "password":data.password,
      //     "register_id":"",
      //     "lat":"",
      //     "lon":""
      //        })
      // })
      // .then((response) => {
      //   if(response.status < 300){
      //     dispatch(isLoading(false))
      //     response.json().then((responseJSON) => {
      //       console.log("responseJSON",responseJSON);
      //       dispatch(loginSuccess(responseJSON))
      //     })
      //   }
      //   else{
      //     response.json().then((responseJSON) => {
      //       console.log("responseJSON",responseJSON);
      //       dispatch(isLoading(false))
      //       dispatch(loginFailed(responseJSON.message))
      //     })
      //   }
      // })
      // .catch((error) => {
      //   console.log("error",error);
      //   dispatch(isLoading(false))
      //   dispatch(loginFailed(error))
      // })
    }
  }