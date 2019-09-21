import React  from 'react';
import { StatusBar, Image, TouchableOpacity, View, FormLabel, FormInput, FormValidationMessage,TextInput} from 'react-native';
import styles from './styles';
import { Container, Content, Footer ,Text} from 'native-base';
import { Button } from 'react-native-elements';

import ImageOverlay from "react-native-image-overlay";

import { DrawerNavigator, DrawerActions } from 'react-navigation';

import { StackNavigator } from 'react-navigation'
class HomePage extends React.Component{
  
  toggleDrawer = () => {

    console.log(this.props.navigationProps);

    if (this.props.navigation.state.index === 0) {
      this.props.navigation.openDrawer()
            } else {
              this.props.navigation.closeDrawer()
            }

  }

render(){
return(
<Container style={styles.container}>

<TouchableOpacity  onPress={() => { this.props.navigation.toggleDrawer() }} >
  <View style={{width:"100%",height:250}}>
 {/* <TouchableOpacity onPress={this.props.navigation.goBack(null)}>

   <Image source={require("../../assets/menu.png")} resizeMode='contain' style={{width:50,height:50, padding:10,marginTop:10,marginLeft:10}}/>
   </TouchableOpacity>  */}
  

<ImageOverlay
  source={require("../../assets/img.png")}
  height={250} 
  
  contentPosition="top">
    <View style={{alignSelf:'flex-start'}}>
    <TouchableOpacity  onPress={() => { this.props.navigation.toggleDrawer() }} >

<Image source={require("../../assets/menu.png")} resizeMode='contain' style={{width:50,height:50, padding:10,marginTop:10,marginLeft:10}}/>
</TouchableOpacity>
</View>

  </ImageOverlay>
  
{/* <Image source={require("../../assets/banner.png")} style={{width:"100%",height:250,resizeMode:'cover'}}/> */}
</View>
</TouchableOpacity>
<Content padder >



 <Text style={{marginTop:10,textAlign:'center',color:'#1F4B70',padding:10,fontSize:20,fontWeight:'bold'}}> Select Option </Text>
 <TouchableOpacity 
   onPress={() => this.props.navigation.navigate('PicandsendPage')}
 >
   <View style={{flexDirection:'row'}}>  
 <Image source={require("../../assets/pickup.png")} resizeMode='contain'  style={{padding:10,margin:10,alignSelf:'center'}}></Image>
 <Text style={{padding:10,marginLeft:10,alignSelf:'center'}}>Pic & Send</Text>
 </View>
 </TouchableOpacity>
 
 <TouchableOpacity 
   onPress={() => this.props.navigation.navigate('BuyandsendPage')}
 >
      <View style={{flexDirection:'row'}}>  
 <Image source={require("../../assets/shop.png")} resizeMode='contain' style={{padding:10,margin:10,alignSelf:'center'}}></Image>
 <Text style={{padding:10,marginLeft:10,alignSelf:'center'}}> Buy & Send</Text>
 </View>
 </TouchableOpacity>
<TouchableOpacity 
   onPress={() => this.props.navigation.navigate('GiftandparentPage')}
 >
         <View style={{flexDirection:'row'}}>  
 <Image source={require("../../assets/gift.png")} resizeMode='contain'  style={{padding:10,margin:10,alignSelf:'center'}}></Image>
 <Text style={{padding:10,marginLeft:10,alignSelf:'center'}}> Gift and Presents</Text>
 </View>
 </TouchableOpacity>
 <Button
  title="Select"
  titleStyle={{color:"white"}}
  type="clear"
  containerStyle={{backgroundColor:'#1f4b70',margin:10}}
 />
</Content>

</Container>

)

};



}


export default HomePage;


