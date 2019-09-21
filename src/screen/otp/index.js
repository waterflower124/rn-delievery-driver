import React ,{Component} from 'react';
import { Container, Content, Text, View } from 'native-base';
import { Image, Button } from 'react-native-elements';
import { StatusBar, TouchableOpacity,FormLabel, FormInput, FormValidationMessage,TextInput,Alert } from 'react-native';
import OTPTextView from 'react-native-otp-textinput';
import axios from 'axios';
import Toast from 'react-native-simple-toast';
import {connect} from 'react-redux';
import * as actions from './action'
import { OTP_URL } from '../../utility/AppConstant';
import ProgressDialog from '../../utility/progessdialog';


class OtpVerification extends Component{
  constructor(props){
    super(props)
    this.state = {
      text1:'',
            
    }
  }

  //http://aveoperu.com/Gadeli/webservice/get_verified_code?user_id=1&varification_code=9999
    completeSignup(navigate,user,veri_code){
      this.props.otp(user.id,veri_code).then(() => {
        if(this.props.error){
          Toast.show(this.props.error,Toast.LONG)
          this.setState({isLoading :false})    

        }else{
          this.setState({isLoading :false})    

          var userJObject = JSON.parse(this.props.userData)

          Toast.show(userJObject.message,Toast.LONG)

          navigate('SelectVehicle',
          { user:userJObject.result})
          
        }
      })    
   
    }
render(){
    const { navigate } = this.props.navigation;
    const user_id  = this.props.navigation.state.params.user;
    const otp  = this.props.navigation.state.params.otp;
    

 return(
  
  <Container style={{marginTop:30}}>
      <TouchableOpacity onPress={() => {this.props.navigation.goBack(null)}}>
   <Image source={require("../../assets/backk.png")} resizeMode='contain' style={{width:50,height:50, padding:10,marginTop:10,marginLeft:10}}/>
   </TouchableOpacity>
   <Content padder>
     
     <Text style={{fontSize:20,marginLeft:20}}> Phone Verification</Text>
     <Text style={{fontSize:15,marginLeft:20}}> Enter your Otp code here</Text>

      <View style={{alignSelf:'center' ,marginTop:20}}>
      <OTPTextView
          containerStyle={styles.textInputContainer}
          handleTextChange={text => this.setState({ text1: text })}
          defaultValue ={otp }
          inputCount={4}
          keyboardType="numeric"
        />
  
  <ProgressDialog visible={this.state.isLoading} />

    </View>


<View style={{alignSelf:'center',marginTop:30}}>
    <Button
        onPress={() => this.completeSignup(navigate,user_id,otp)}
           title="Verify Now"
     titleStyle={{color:"white"}}
     type="clear"
     containerStyle={{backgroundColor:"#1f4b70",borderRadius:5}}


/>
</View>
   </Content>

  </Container> 

 );

}


}



const mapStateToProps = state => ({
  isLoggedIn:state.authOtp.isLoggedIn,
  isLoading:state.authOtp.isLoading,
  userData:state.authOtp.userData,
  error:state.authOtp.error
})

const mapDispatchToProps = dispatch => ({
  otp:(user_id,veri_code) => dispatch(actions.otp({user_id,veri_code}))
})

export default connect(mapStateToProps,mapDispatchToProps)(OtpVerification)