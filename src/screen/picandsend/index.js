import React  from 'react';
import { StatusBar, Image, TouchableOpacity, View, FormLabel, FormInput, FormValidationMessage,TextInput } from 'react-native';
import styles from './styles';
import { Container, Content, Footer ,Text, Col, Row} from 'native-base';
import { Button, Icon, CheckBox } from 'react-native-elements';


class PicandsendPage extends React.Component{

    render(){
        return(

            <Container  style={styles.container}>
                                         <View style={{flexDirection:'row', width:"100%",height:57}}>
            <View style={{flexDirection:"column",width:"20%"}}>
    <TouchableOpacity onPress={() => this.props.navigation.goBack(null)}>
 <Image source={require("../../assets/backk.png")} resizeMode='contain' style={{width:50,height:50, padding:10,marginTop:10,marginLeft:10}}/>
 </TouchableOpacity>
 </View>

 <View style={{width:"80%",flexDirection:"column",marginTop:20}}>
 <Text style={{fontSize:22,fontWeight:'bold',color:'#1f4b70'}}> Pick & Send </Text>

 </View>
 </View>
<Content padder>

         
  <View>

  {/* <Text style={{textAlign:'center',fontSize:15,marginTop:50,color:'#000000'}}>Pick & Send</Text>  */}


 <View style={{marginLeft:20,marginRight:20}}>

 <View style={styles.SectionStyle}>
 

 <TextInput
     style={{flex:1}}
     placeholder="Collection Address"
     underlineColorAndroid="transparent"
 />
 
 <Image source={require('../../assets/add.png')} style={styles.ImageStyle} />

</View>

          <View style={styles.SectionStyle}>
 

 <TextInput
     style={{flex:1}}
     placeholder="Delivery Address"
     underlineColorAndroid="transparent"
 />
 

</View>
          
          <View style={styles.SectionStyle}>
 

   <TextInput
       style={{flex:1}}
       placeholder="To pick up or send"
       underlineColorAndroid="transparent"
   />   

 </View>

 <View style={styles.SectionStyle}>
 

 <TextInput
     style={{flex:1}}
     placeholder="Select Category"
     underlineColorAndroid="transparent"
 />
 
 <Image source={require('../../assets/sort-down.png')} style={styles.ImageStyle} />

</View>
<View>
<TextInput
            style={{height:75,width: "95%",borderColor: "grey",borderWidth: .5,marginTop:5,alignSelf:'center',paddingLeft:10,borderRadius:5}}
            // Adding hint in TextInput using Placeholder option.
            placeholder="Comment to consider"
            //set the value in state.
            // onChangeText={TextInputValue => this.onEnterText(TextInputValue)}
            // Making the Under line Transparent.
            underlineColorAndroid="transparent"
          />
</View>
<View style = { styles.MainContainer }>
<Text style={{marginTop:10,width: "100%",color:'#1F4B70',fontSize:14,fontWeight:'bold'}}> Select a means off transport </Text>
<Row>
  <Col xs="4">
    <Image source={require('../../assets/imgpsh_fullsize_anim.png')}
              style={{width: 50, height: 50, borderRadius: 150/2,flex: 1,justifyContent: 'center',alignItems: 'center',margin: 5}} />
  </Col>
  <Col xs="4">
    <Image source={require('../../assets/01.png')}
              style={{width: 50, height: 50, borderRadius: 150/2,flex: 1,justifyContent: 'center',alignItems: 'center',margin: 5}} />
  </Col>
  <Col xs="4">
    <Image source={require('../../assets/02.png')}
              style={{width: 50, height: 50,borderRadius: 150/2,flex: 1,justifyContent: 'center',alignItems: 'center',margin: 5}} />
  </Col>            
</Row>              
      </View>


<View>
<Text style={{marginTop:10,width: "100%",color:'#1F4B70',fontSize:14,fontWeight:'bold'}}> Do u want to select the nearest Messanger </Text>

<TextInput
            style={{height:45,width: "95%",borderColor: "grey",borderWidth: .5,marginTop:5,alignSelf:'center',paddingLeft:10,borderRadius:5}}
            placeholder="Search..."
            underlineColorAndroid="transparent"
          />
</View>


<View>
<Text style={{marginTop:10,width: "100%",color:'#1F4B70',fontSize:14,fontWeight:'bold'}}> Estimated delivery time 10min </Text>
<Row>
  <Col xs="6">    
    <Text style={{marginTop:10,width: "100%",color:'#1F4B70',fontSize:14,fontWeight:'bold'}}> Trail: 1.8km </Text>
  </Col>
  <Col xs="6">    
    <Text style={{marginTop:10,width: "100%",color:'#1F4B70',fontSize:14,fontWeight:'bold'}}> Service price: s/4.50 </Text>
  </Col>
  </Row>  
</View>

<View>
<Text style={{marginTop:10,width: "100%",color:'#1F4B70',fontSize:14,fontWeight:'bold'}}> Estimated delivery time 10min </Text>
<Row>
  <Col xs="6">    
  <CheckBox
containerStyle={{margin:10}}
  title='Effective'
 ></CheckBox>
  </Col>
  <Col xs="6">    
  <CheckBox
containerStyle={{margin:10}}
  title='Card'
 ></CheckBox>
  </Col>
  </Row>  
</View>
</View>

<View style={[{width:"70%", alignSelf:'center', marginTop:45,  backgroundColor: "#fff" }]}>

<View style={{flexDirection:'row',alignSelf:'center'}}>
<Button
  title="Done"
  titleStyle={{color:"white"}}

  onPress={() => this.props.navigation.navigate('PayScreen')}
  type="clear"
  containerStyle={{ backgroundColor:"#1F4B70",width:"50%"
  ,height:40
  }}
/>

<Button
  title="Cancel"
  titleStyle={{color:"white"}}
  onPress={() => this.props.navigation.goBack(null)}
  type="clear"
  containerStyle={{ backgroundColor:"#1F4B70",width:"70%",height:40,marginLeft:10}}
/>
               
</View>
 </View>
 </View>
</Content>



</Container>

        )

    };

}

export default PicandsendPage;