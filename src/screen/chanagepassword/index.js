



import React  from 'react';
import { StatusBar, Image, TouchableOpacity, View, FormLabel, FormInput, FormValidationMessage,TextInput } from 'react-native';
import styles from './styles';
import { Container, Content, Footer ,Text} from 'native-base';
import { Button, Icon, CheckBox } from 'react-native-elements';
import { TouchableHighlight } from 'react-native';

class ChangePassword extends React.Component{



    render(){
        return(

            <Container  style={styles.container}>
                <View style={{flexDirection:'row', width:"100%",height:57}}>
            <View style={{flexDirection:"column",width:"20%"}}>
            <TouchableOpacity  onPress={() => { this.props.navigation.toggleDrawer() }} >
 <Image source={require("../../assets/backk.png")} resizeMode='contain' style={{width:50,height:50, padding:10,marginTop:10,marginLeft:10}}/>
 </TouchableOpacity>
 </View>

 <View style={{width:"80%",flexDirection:"column",marginTop:20}}>
 <Text style={{fontSize:22,fontWeight:'bold',color:'#1f4b70'}}> Change Password </Text>

 </View>
 </View>
<Content padder>
{/* 
<View style={{alignSelf:'center'}}>
   <TouchableHighlight
          style={[styles.profileImgContainer, { borderColor: 'white', borderWidth:1 }]}
        >
    <Image source={require("../../assets/pro.png")} style={styles.profileImg} />
</TouchableHighlight> 
</View> */}

<View style={{marginLeft:20,marginRight:20,marginTop:50}}> 

  <TextInput
            style={{height: 45,width: "95%",borderColor: "grey",borderWidth: .5,marginTop:30,alignSelf:'center',paddingLeft:10,borderRadius:5}}
            // Adding hint in TextInput using Placeholder option.
            placeholder="Current"
            //set the value in state.
            // onChangeText={TextInputValue => this.onEnterText(TextInputValue)}
            // Making the Under line Transparent.
            underlineColorAndroid="transparent"
          />
          


<TextInput

            style={{height: 45,width: "95%",borderColor: "grey",borderWidth: .5,marginTop:10,alignSelf:'center',paddingLeft:10,borderRadius:5}}
            // Adding hint in TextInput using Placeholder option.
            placeholder="New Password"
            //set the value in state.
            // onChangeText={TextInputValue => this.onEnterText(TextInputValue)}
            // Making the Under line Transparent.
            underlineColorAndroid="transparent"
          />
          <TextInput
            style={{height: 45,width: "95%",borderColor: "grey",borderWidth: .5,marginTop:10,alignSelf:'center',paddingLeft:10,borderRadius:5}}
            // Adding hint in TextInput using Placeholder option.
            placeholder="Confirm Paswword"
            //set the value in state.
            // onChangeText={TextInputValue => this.onEnterText(TextInputValue)}
            // Making the Under line Transparent.
            underlineColorAndroid="transparent"
          />
          </View>
{/* 
 <View style={{marginLeft:20,marginRight:20,marginTop:30}}> 

  <TextInput
            style={{height: 45,width: "95%",borderColor: "greys",borderWidth: .5,marginTop:50,alignSelf:'center',paddingLeft:10,borderRadius:5}}
            // Adding hint in TextInput using Placeholder option.
            placeholder="John Smith"
            //set the value in state.
            // onChangeText={TextInputValue => this.onEnterText(TextInputValue)}
            // Making the Under line Transparent.
            underlineColorAndroid="transparent"
          />

 <TextInput
            style={{height:45,width: "95%",borderColor: "grey",borderWidth: .5,marginTop:5,alignSelf:'center',paddingLeft:10,borderRadius:5}}
            // Adding hint in TextInput using Placeholder option.
            placeholder="+ 91 1234566789"
            //set the value in state.
            // onChangeText={TextInputValue => this.onEnterText(TextInputValue)}
            // Making the Under line Transparent.
            underlineColorAndroid="transparent"
          />
          
          <View style={styles.SectionStyle}>




<TextInput
            style={{height:45,width: "95%",borderColor: "grey",borderWidth: .5,marginTop:5,alignSelf:'center',paddingLeft:10,borderRadius:5}}
            // Adding hint in TextInput using Placeholder option.
            placeholder="Email"
            //set the value in state.
            // onChangeText={TextInputValue => this.onEnterText(TextInputValue)}
            // Making the Under line Transparent.
            underlineColorAndroid="transparent"
          />

<TextInput
            style={{height:45,width: "95%",borderColor: "grey",borderWidth: .5,marginTop:5,alignSelf:'center',paddingLeft:10,borderRadius:5}}
            // Adding hint in TextInput using Placeholder option.
            placeholder="Change Paswword"
            //set the value in state.
            // onChangeText={TextInputValue => this.onEnterText(TextInputValue)}
            // Making the Under line Transparent.
            underlineColorAndroid="transparent"
          />
          

</View>

</View> */}

</Content>

<Footer style={{backgroundColor:'white'}}>
<View style={[{width:"70%", alignSelf:'center', marginTop:30 ,marginBottom:10}]}>

<Button
        onPress={() => this.props.navigation.navigate('MainPageOrder')}
     
  title="Save"
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

export default ChangePassword;