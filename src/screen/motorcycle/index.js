import React  from 'react';
import { StatusBar, Image, TouchableOpacity, View, FormLabel, FormInput, FormValidationMessage,TextInput} from 'react-native';
import { Container, Content, Footer ,Text, Card, CardItem, Body} from 'native-base';
import { Button } from 'react-native-elements';
import styles from './styles';
import ImagePicker from 'react-native-image-picker';

import { Dropdown } from 'react-native-material-dropdown';


class MotorCyclePage extends React.Component{
  constructor(props){
      super(props)
      this.state = {
          license_plate:"",
          brand_name:"",
          model_name:"",
          license_engine:"",
          flue_type:"",
          color:"",
          insurance_num:"",
          insurance_expiry_num:"",
          filePath: {},
          filePath1: {},
          filePath2: {},
          filePath3: {},

      }
  }

  chooseFile = (name) => {
    var options = {
      title: 'Select Image',
      customButtons: [
        { name: 'customOptionKey', title: 'Choose Photo from Custom Option' },
      ],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    ImagePicker.showImagePicker(options, response => {
      console.log('Response = ', response);
 
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
        alert(response.customButton);
      } else {
        let source = response;
        console.log('Data===================>',source);
        // You can also display the image using data:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data };
       if(name == "1"){
        this.setState({
            filePath: source,
          });
       }else if(name == "2"){
        this.setState({
            filePath1: source,
          });
       }else if(name == "3"){
        this.setState({
            filePath2: source,
          });
       }else if(name == "4"){
        this.setState({
            filePath3: source,
          });
       }    

     
      }
    });
  };


    render(){
        let color = [{
            value: 'red',
          }, {
            value: 'green',
          }, {
            value: 'yellow',
          },, {
            value: 'black',
          }];

          
          let itsown = [{
            value: 'test1',
          }, {
            value: 'test1',
          }, {
            value: 'demo',
          },, {
            value: 'jams',
          }];
            
          let brand = [{
            value: 'Yamaha',
          }, {
            value: 'Honda',
          }, {
            value: 'BMW',
          },, {
            value: 'Victory',
          }];

    
          let flut_type = [{
            value: 'petrol',
          }, {
            value: 'diesel',
          }]

    return(

            <Container>
      <View style={{flexDirection:'row', width:"100%",height:57}}>
            <View style={{flexDirection:"column",width:"20%"}}>
            <TouchableOpacity  onPress={() => { this.props.navigation.goBack(null) }} >
 <Image source={require("../../assets/backk.png")} resizeMode='contain' style={{width:50,height:50, padding:10,marginTop:10,marginLeft:10}}/>
 </TouchableOpacity>
 </View>

 <View style={{width:"80%",flexDirection:"column",marginTop:20}}>
 <Text style={{fontSize:22,fontWeight:'bold',color:'#1f4b70'}}> MotorCycle </Text>

 </View>
 </View>
{/* <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:10}}>
 <Image source={require("../../assets/pending.png")} style={{width:"33%",height:40}} resizeMode='contain'></Image>
 <Image source={require("../../assets/booking.png")} style={{width:"33%",height:40}} resizeMode='contain'></Image>
 <Image source={require("../../assets/completed.png")} style={{width:"33%",height:40}} resizeMode='contain'></Image>

</View> */}
 <Content padder>


 <TextInput
            style={{height:45,width: "95%",borderColor: "grey",borderWidth: .5,marginTop:5,alignSelf:'center',paddingLeft:10,borderRadius:5}}
            // Adding hint in TextInput using Placeholder option.
            placeholder="License Plate"
            returnKeyType='next'
            keyboardType='numeric'
            onChangeText={(text) => this.setState({ license_plate:text})}
            //set the value in state.
            // onChangeText={TextInputValue => this.onEnterText(TextInputValue)}
            // Making the Under line Transparent.
            underlineColorAndroid="transparent"
          />
            <View style={styles.SectionStyle}>
      
      <Dropdown
      
         containerStyle={{width:'100%',padding:10}}
            label='Brand'
            data={brand}
            onChangeText ={(value) => this.setState({brand_name :value} )}
          />   
          </View>
    
          <View style={styles.SectionStyle}>
          <Dropdown
      
      containerStyle={{width:'100%',padding:10}}
         label='Model'
         data={brand}
         onChangeText ={(value) => this.setState({model_name : value} )}
       />   
       </View>



<TextInput
            style={{height:45,width: "95%",borderColor: "grey",borderWidth: .5,marginTop:5,alignSelf:'center',paddingLeft:10,borderRadius:5}}
            // Adding hint in TextInput using Placeholder option.
            placeholder="Number of engine"
            returnKeyType='next'
            keyboardType='numeric'
            onChangeText={(text) => this.setState({ license_engine:text})}
            //set the value in state.
            // onChangeText={TextInputValue => this.onEnterText(TextInputValue)}
            // Making the Under line Transparent.
            underlineColorAndroid="transparent"
          />
          
          <View style={styles.SectionStyle}>
          <Dropdown
      
      containerStyle={{width:'100%',padding:10}}
         label='Fule type'
         data={flut_type}
         onChangeText ={(value) => this.setState({flue_type :value} )}
       />   
       </View>





       <View style={styles.SectionStyle}>
          <Dropdown
      
      containerStyle={{width:'100%',padding:10}}
         label='Color'
         data={color}
         onChangeText ={(value) => this.setState({color : value} )}
       />   
       </View>

       <View style={styles.SectionStyle}>
          <Dropdown
      
      containerStyle={{width:'100%',padding:10}}
         label="It's Own"
         data={itsown}
         onChangeText ={(value) => this.setState({its_own : value} )}
       />   
       </View>


   <View style={styles.SectionStyle}>
  <TextInput
       style={{flex:1,paddingLeft:10}}
       placeholder="Insurance Number"
       underlineColorAndroid="transparent"
       returnKeyType='next'
       keyboardType='default'
       onChangeText={(text) => this.setState({ insurance_num:text})}
   />
    <Image source={require('../../assets/drop.png')} style={styles.ImageStyle} resizeMode='contain' />
   </View>

   <View style={styles.SectionStyle}>
  <TextInput
       style={{flex:1,paddingLeft:10}}
       placeholder="Insurance Expiry Number"
       underlineColorAndroid="transparent"
       returnKeyType='next'
       keyboardType='default'
       onChangeText={(text) => this.setState({ insurance_expiry_num:text})}
   />
    <Image source={require('../../assets/drop.png')} style={styles.ImageStyle} resizeMode='contain' />
   </View>

  {/* </Card> */}

      <View style={{alignSelf:'center'}}>
          <Text style={{alignSelf:'center',fontSize:12,marginTop:20}}>Add Image</Text>
      </View>
      <View style={{justifyContent:'center',marginTop:10,flex:1,marginLeft:15}}>
<View style={{ alignSelf:'center', flexDirection: 'row'}}>
        <View style={{ flex: 1, alignSelf: 'stretch' }} >
            <View style={{flexDirection:"column"}}>
         
                <View style={{flexDirection:'row',flex:1}}>

                    <TouchableOpacity onPress={() =>  this.chooseFile("1")} >
      
                <View style={{flexDirection:'column',alignSelf:'center'}}>

                {Object.values(this.state.filePath).length == 0 ? (

                    <Image source={require("../../assets/add_img.png")} style={{width:60,height:60}} resizeMode='contain'></Image>
                     
                    ) : (
                   
                   <Image source={{uri: 'data:image/jpeg;base64,' + this.state.filePath.data,}} style={{width:60,height:60}} resizeMode='contain'></Image>

                   ) } 
                   
                </View>
              </TouchableOpacity>
              
                </View>
    
           
            </View> 

            
            </View> 
        <View style={{ flex: 1, alignSelf: 'stretch' }} >
                                <View style={{flexDirection:"column"}}>
                            
                <View style={{flexDirection:'row',flex:1}}>
                <TouchableOpacity onPress={() =>  this.chooseFile("2")} >
                    <View style={{flexDirection:'column',alignSelf:'center'}}>
                    {Object.values(this.state.filePath1).length == 0 ? (
                    <Image source={require("../../assets/add_img.png")} style={{width:60,height:60}} resizeMode='contain'></Image>
                       ) : (
                   
                   <Image source={{uri: 'data:image/jpeg;base64,' + this.state.filePath1.data,}} style={{width:60,height:60}} resizeMode='contain'></Image>

                   ) }                
                </View>
                </TouchableOpacity>
              
                </View>
        

            </View>
</View>
        <View style={{ flex: 1, alignSelf: 'stretch' }} >
        <View style={{flexDirection:"column"}}>
  
                <View style={{flexDirection:'row',flex:1}}>
                <TouchableOpacity onPress={() => this.chooseFile("3")} >
                <View style={{flexDirection:'column',alignSelf:'center'}}>
                {Object.values(this.state.filePath2).length == 0 ? (
                    <Image source={require("../../assets/add_img.png")} style={{width:60,height:60}} resizeMode='contain'></Image>
                       ) : (
                   
                   <Image source={{uri: 'data:image/jpeg;base64,' + this.state.filePath2.data,}} style={{width:60,height:60}} resizeMode='contain'></Image>

                   ) } 
                </View>
              </TouchableOpacity>
                </View>
      
</View>
        </View>
        <View style={{ flex: 1, alignSelf: 'stretch' }} >
        <View style={{flexDirection:"column"}}>

                <View style={{flexDirection:'row',flex:1}}>
                <TouchableOpacity onPress={() => this.chooseFile("4")} >
                <View style={{flexDirection:'column',alignSelf:'center'}}>
                {Object.values(this.state.filePath3).length == 0 ? (
                    <Image source={require("../../assets/add_img.png")} style={{width:60,height:60}} resizeMode='contain'></Image>
                       ) : (
                   
                   <Image source={{uri: 'data:image/jpeg;base64,' + this.state.filePath3.data,}}style={{width:60,height:60}} resizeMode='contain'></Image>

                   ) }  

                </View>
              </TouchableOpacity>
                </View>
  
      

</View>
        </View>

    </View>
    </View>

 </Content>

        <View style={[{width:"80%", alignSelf:'center', marginTop:20,marginBottom:30}]}>


<Button
   title="Done"
   titleStyle={{color:"white"}}
   type="clear"
   onPress={() => { this.props.navigation.navigate('MainPageOrder') }} 

  containerStyle={{backgroundColor:"#1F4B70",borderRadius:5}}

/>
 </View>


            </Container>
        )
    }

}

export default MotorCyclePage;