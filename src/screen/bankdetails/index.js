import React  from 'react';
import { StatusBar, Image, TouchableOpacity, View, FormLabel, FormInput, FormValidationMessage,TextInput} from 'react-native';
import { Container, Content, Footer ,Text, Card, CardItem, Body} from 'native-base';
import { Button } from 'react-native-elements';
import styles from './styles';



class BankDetailPage extends React.Component{

    render(){

        return(

            <Container>
      <View style={{flexDirection:'row', width:"100%",height:57}}>
            <View style={{flexDirection:"column",width:"20%"}}>
            <TouchableOpacity  onPress={() => { this.props.navigation.goBack(null) }} >
 <Image source={require("../../assets/backk.png")} resizeMode='contain' style={{width:50,height:50, padding:10,marginTop:10,marginLeft:10}}/>
 </TouchableOpacity>
 </View>

 <View style={{width:"80%",flexDirection:"column",marginTop:20}}>
 <Text style={{fontSize:22,fontWeight:'bold',color:'#1f4b70'}}> Bank Details  </Text>

 </View>
 </View>

 <Content padder>



  {/* <Card> */}
  <View style={styles.SectionStyle}>
  <TextInput
       style={{flex:1,paddingLeft:10}}
       placeholder="Bank account holder name "
       underlineColorAndroid="transparent"
   />
    <Image source={require('../../assets/add.png')} style={styles.ImageStyle} resizeMode='contain' />
   </View>

   <View style={styles.SectionStyle}>
  <TextInput
       style={{flex:1,paddingLeft:10}}
       placeholder="Account Number"
       
       underlineColorAndroid="transparent"
   />
    <Image source={require('../../assets/add.png')} style={styles.ImageStyle} resizeMode='contain' />
   </View>

   <View style={styles.SectionStyle}>
  <TextInput
       style={{flex:1,paddingLeft:10}}
       placeholder="Bank Location"
       underlineColorAndroid="transparent"
   />
    <Image source={require('../../assets/add.png')} style={styles.ImageStyle} resizeMode='contain' />
   </View>


   <TextInput
            style={{height: 45,width: "95%",borderColor: "grey",borderWidth: .5,marginTop:20,alignSelf:'center',paddingLeft:10,borderRadius:5}}
            // Adding hint in TextInput using Placeholder option.
            placeholder="Bank Location"
            //set the value in state.
            // onChangeText={TextInputValue => this.onEnterText(TextInputValue)}
            // Making the Under line Transparent.
            underlineColorAndroid="transparent"
          />
          
  <TextInput
            style={{height: 45,width: "95%",borderColor: "grey",borderWidth: .5,marginTop:20,alignSelf:'center',paddingLeft:10,borderRadius:5}}
            // Adding hint in TextInput using Placeholder option.
            placeholder="BIC/SWIFT code"
            //set the value in state.
            // onChangeText={TextInputValue => this.onEnterText(TextInputValue)}
            // Making the Under line Transparent.
            underlineColorAndroid="transparent"
          />
  {/* </Card> */}

 </Content>

        <View style={[{width:"80%", alignSelf:'center', marginTop:20,marginBottom:30}]}>


<Button
   title="Submit"
   titleStyle={{color:"white"}}
   type="clear"
  containerStyle={{backgroundColor:"#1F4B70",borderRadius:5}}

/>
 </View>


            </Container>
        )
    }

}

export default BankDetailPage;