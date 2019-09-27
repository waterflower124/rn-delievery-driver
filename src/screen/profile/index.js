



import React  from 'react';
import { StatusBar, Image, TouchableOpacity, View, FormLabel, FormInput, FormValidationMessage,TextInput } from 'react-native';
import styles from './styles';
import { Container, Content, Footer ,Text} from 'native-base';
import { Button, Icon, CheckBox } from 'react-native-elements';
import { TouchableHighlight } from 'react-native';
import ProgressDialog from '../../utility/progessdialog';
import AsyncStorage from "@react-native-community/async-storage";
import axios from 'axios';
import Toast from 'react-native-simple-toast';
// import firebase from 'react-native-firebase';

// import GetLocation from 'react-native-get-location'



class ProfilePage extends React.Component{
constructor(props){
  super(props)
this.state = {
  userData:{},
  isLoading : true,
  nombrecompleto:"",
  email:"",
  telefono:"",

}
}

componentDidMount(){
  this.Cargar_datos();
 // GetLocation.getCurrentPosition({
 //   enableHighAccuracy: true,
 //   timeout: 15000,
    
//})
//
//.then(location => {
//    console.log("Location========================>",location);
//    this.setState({isLoading:false})
//})
//.catch(error => {
//    const { code, message } = error;
//    console.warn(code, message);
//})
}
async ObtenerUsuario_id() {
  try {
    const usuario_id = await AsyncStorage.getItem('@gadelidriver:usuario_id');
    //alert(usuario_id);
      return usuario_id;
    }
   catch (error) {
     //alert(error);
     console.log("Error al buscar usuario_id");
   }
};
 
async Cargar_datos(){
  this.ObtenerUsuario_id()
    .then(user_id =>{
      //this.setState({usuario_id:user_id});
      fetch("https://aveoperu.com/gadeli11/repartidor_avatar.php", {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          repartidor_id:user_id
        })
      })
    .then((response) => response.json())
    .then((responseJson) => {
      if(responseJson!=""){
        this.setState({ 
          nombrecompleto:responseJson.Nombres,
          email:responseJson.email,
          telefono:responseJson.telefono,
          isLoading:false,
        });

      }
      //else{
        //alert(responseJson.mensaje);
      //}
    })
    .catch(error => {
      console.log(error);
      });
  }
  )
}




    render(){
   
      return(

            <Container  style={styles.container}>
                <View style={{flexDirection:'row', width:"100%",height:57}}>
            <View style={{flexDirection:"column",width:"20%"}}>
            <TouchableOpacity  onPress={() => { this.props.navigation.toggleDrawer() }} >
 <Image source={require("../../assets/menu.png")} resizeMode='contain' style={{width:50,height:50, padding:10,marginTop:10,marginLeft:10}}/>
 </TouchableOpacity>
 </View>

 <View style={{width:"80%",flexDirection:"column",marginTop:20}}>
 <Text style={{fontSize:22,fontWeight:'bold',color:'#1f4b70'}}> Profile </Text>

 </View>
 </View>
<Content padder>

<View style={{alignSelf:'center'}}>
  <TouchableHighlight
          style={[styles.profileImgContainer, { borderColor: 'white', borderWidth:1 }]}
        >
    <Image source={require("../../assets/logo2.jpg")} style={styles.profileImg} />
</TouchableHighlight>
</View>

<View style={{marginLeft:20,marginRight:20,marginTop:30}}> 

  <TextInput
            style={{height: 45,width: "95%",borderColor: "grey",borderWidth: .5,marginTop:30,alignSelf:'center',paddingLeft:10,borderRadius:5}}
            // Adding hint in TextInput using Placeholder option.
            placeholder="Nombre Completo"
            value={this.state.nombrecompleto}
            keyboardType='default'
            returnKeyType='done'
            //set the value in state.
            onChangeText={(text) => this.setState({ nombrecompleto:text})}
            
            // Making the Under line Transparent.
            underlineColorAndroid="transparent"
          />
   <ProgressDialog visible={this.state.isLoading} />

            <TextInput
            style={{height: 45,width: "95%",borderColor: "grey",borderWidth: .5,marginTop:10,alignSelf:'center',paddingLeft:10,borderRadius:5}}
            // Adding hint in TextInput using Placeholder option.
            placeholder="Teléfono"
            onChangeText={(text) => this.setState({ mobileNumber:text})}
            value={this.state.telefono}
            keyboardType='phone-pad'
            returnKeyType='done'
            //set the value in state.
            // onChangeText={TextInputValue => this.onEnterText(TextInputValue)}
            // Making the Under line Transparent.
            underlineColorAndroid="transparent"
          />
 <TouchableOpacity         onPress={() => this.props.navigation.navigate('ChangePassword')}
>
<TextInput
            style={{height: 45,width: "95%",borderColor: "grey",borderWidth: .5,marginTop:10,alignSelf:'center',paddingLeft:10,borderRadius:5}}
            // Adding hint in TextInput using Placeholder option.
            placeholder="Email"
            keyboardType='email-address'
            returnKeyType='done'
            onChangeText={(text) => this.setState({ email:text})}
            value={this.state.email}
            //set the value in state.
            // onChangeText={TextInputValue => this.onEnterText(TextInputValue)}
            // Making the Under line Transparent.
            underlineColorAndroid="transparent"
          />
          <TextInput
            style={{height: 45,width: "95%",borderColor: "grey",borderWidth: .5,marginTop:10,alignSelf:'center',paddingLeft:10,borderRadius:5}}
            // Adding hint in TextInput using Placeholder option.
            placeholder="Cambiar Password"
            //set the value in state.
            // onChangeText={TextInputValue => this.onEnterText(TextInputValue)}
            // Making the Under line Transparent.
            underlineColorAndroid="transparent"
          />
          </TouchableOpacity>
          </View>

</Content>

<Footer style={{backgroundColor:'white'}}>
<View style={[{width:"70%", alignSelf:'center', marginTop:30 ,marginBottom:10}]}>

<Button
        onPress={() => this.props.navigation.navigate('MainPageOrder')}
     
  title="Guardar"
  titleStyle={{color:"white"}}
  type="clear"
  containerStyle={{backgroundColor:"#1f4b70",borderRadius:5,marginBottom:10}}


/>
</View>
</Footer>

</Container>

        )

    };

}

export default ProfilePage;