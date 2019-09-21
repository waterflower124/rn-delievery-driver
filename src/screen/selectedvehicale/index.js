import React  from 'react';
import { StatusBar, Image, TouchableOpacity, View, FormLabel, FormInput, FormValidationMessage,TextInput} from 'react-native';
import { Container, Content, Footer ,Text, Card, CardItem, Body} from 'native-base';
import { Button } from 'react-native-elements';
import styles from './styles';
import axios from 'axios';
import ImagePicker from 'react-native-image-picker';
import {connect} from 'react-redux';
import * as actions from './action'
import { Dropdown } from 'react-native-material-dropdown';

import Toast from 'react-native-simple-toast';
import { BIKE_DATA_URL, GET_DRIVER_VEHCLE_TYPE_URL, BIKE_TYPE_URL } from '../../utility/AppConstant';

class SelectedVehicle extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          filePath: {},
          filePath1: {},
          filePath2: {},
          filePath3: {},
          type_vehicle : '',
          color:'',
          itsown:'',
          bike_Type:[],
          };
      }



      typeofVech(){
      axios.get(BIKE_TYPE_URL).then((res) =>{
       console.log("GetVehhicle_response==========>",res.data.re);
       this.setState({bike_Type:res.data.result})

      }).catch((error) => {
console.log("GetVehhicle_error==========>",error);
       
      })   
      } 

      componentWillMount(){
             this.typeofVech()
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

    // submitBike(navigate ,user){
    //   if(this.state.type_vehicle == ''){
    //     Toast.show("please select you type vehicle",Toast.LONG)
    //   }else if(this.state.color == ''){
    //     Toast.show("please select you bike colr",Toast.LONG)

    //   }else if(this.state.itsown == ''){
    //     Toast.show("please select you its own",Toast.LONG)
    //   }else{
    //     axios.get(BIKE_DATA_URL+'vehical='+this.state.type_vehicle+'&color='+this.state.color+'e&it_own='+this.state.itsown)
    //         .then(res => {
    //           if (res.status == 200) {
    
    //             if(res.data.status == '1'){
    
    //               let arr = res.data.result  
    //               this.setState({bike_Type :arr})
    //               navigate('MainPageOrder',{
    //                 user:user
    //               })
               
    //                 // res.data.result.forEach(element => {
                        
    //                 // });
                     
    //                             }else{
    //             }
    //       } else {
    //             Toast.show(JSON.stringify(res.data.message), Toast.LONG)
      
    //           }
      
      
    //         })
    //   }
    // }

    render(){
      //  // const user  = this.props.navigation.state.params.user;
        // let bike_Type = [{
        //     value: 'Commuting Bike',
        //   }, {
        //     value: 'Cyclocross Bike',
        //   }, {
        //     value: 'Track  Bike',
        //   },, {
        //     value: 'Fixed Gear',
        //   }];

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

          
        return(

            <Container style={{marginTop:30}}>
      <View style={{flexDirection:'row', width:"100%",height:57}}>
            <View style={{flexDirection:"column",width:"20%"}}>
            <TouchableOpacity  onPress={() => { this.props.navigation.goBack(null) }} >
 <Image source={require("../../assets/backk.png")} resizeMode='contain' style={{width:50,height:50, padding:10,marginTop:10,marginLeft:10}}/>
 </TouchableOpacity>
 </View>

 <View style={{width:"80%",flexDirection:"column",marginTop:20}}>
 <Text style={{fontSize:22,fontWeight:'bold',color:'#1f4b70'}}> Bike </Text>

 </View>
 </View>

 <Content padder>

  <View style={styles.SectionStyle}>
      
  <Dropdown
  
     containerStyle={{width:'100%',padding:10}}
        label='Type Vehichle'
        data={this.state.bike_Type}
        onChangeText ={(name) => this.setState({type_vehicle : {name}} )}
      />   
      </View>

 
     <View style={styles.SectionStyle}>
      
      <Dropdown
      
         containerStyle={{width:'100%',padding:10}}
            label='Color'
            data={color}
            onChangeText ={(value) => this.setState({color : {value}} )}

          />   
          </View>

<View style={styles.SectionStyle}>
   <Dropdown
      
         containerStyle={{width:'100%',padding:10}}
            label='It is own'
            data={itsown}
            onChangeText ={(value) => this.setState({itsown : {value}} )}

          />   
          </View>
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
    // onPress={() => { this.submitBike(navigate,user) }} 
    containerStyle={{backgroundColor:"#1F4B70",borderRadius:5}}

/>
 </View>


            </Container>
        )
    }

}

// const mapStateToProps = state => ({
//   isLoggedIn:state.bike.isLoggedIn,
//   isLoading:state.bike.isLoading,
//   userData:state.bike.userData,
//   error:state.bike.error
// })

// const mapDispatchToProps = dispatch => ({
//   bike:(user_id,type_vehicle,color,it_own) => dispatch(actions.bike({user_id,type_vehicle,color,it_own}))
// })

// export default connect(mapStateToProps,mapDispatchToProps)(SelectedVehicle)

export default SelectedVehicle;