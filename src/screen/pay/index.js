import React  from 'react';
import { Container, View, Text, Content, Radio } from 'native-base';
import { Image, Button } from 'react-native-elements';
import {TouchableOpacity} from 'react-native'


class PayScreen extends React.Component{

   render(){
return(

<Container>
        <View style={{flexDirection:'row', width:"100%",height:57}}>
            <View style={{flexDirection:"column",width:"20%"}}>
            <TouchableOpacity onPress={() => this.props.navigation.goBack(null)}>
 <Image source={require("../../assets/backk.png")} resizeMode='contain' style={{width:50,height:50, padding:10,marginTop:10,marginLeft:10}}/>
 </TouchableOpacity>
 </View>

 <View style={{width:"80%",flexDirection:"column",marginTop:20}}>
 <Text style={{fontSize:22,fontWeight:'bold',color:'#1f4b70'}}> From of Payment </Text>

 </View>
 </View>

 <Content padder>

 {/* <View style={{flexDirection:"row",width:"100%",justifyContent:'center'}}>
     
    <Image source={require("../../assets/card.png")} style={{width:24,height:24,padding:10,marginLeft:10,alignSelf:'center'}} resizeMode='contain'></Image>

     <View style={{flexDirection:'column',padding:10,marginLeft:10,width:'100%'}}>
     <View style={{flexDirection:'row',alignSelf:'flex-start'}}>
     
     <Text style={{alignSelf:'center' ,marginLeft:10,padding:10, alignSelf:"flex-start"}} >Card </Text>
     <Image source={require("../../assets/circle.png")} style={{width:24,height:24,padding:10,marginLeft:10,alignSelf:'flex-end'}} resizeMode='contain'></Image>

     </View>

     <Image source={require("../../assets/line.png")} style={{width:"60%",height:2,marginLeft:10}}></Image>

     </View>


 </View> */}

<View style={{flexDirection:'row' ,width:"100%",flex:1,height:40,justifyContent:'space-between',marginTop:40}}>
 
  <View style={{alignSelf:'flex-start' ,flexDirection:'row'}}>
 <Image source={require("../../assets/card.png")} style={{width:24,height:24,padding:10,marginLeft:10,alignSelf:'flex-start'}} resizeMode='contain'></Image>
 <Text style={{marginLeft:10, alignSelf:"flex-end"}} >Card </Text>
 </View>
 <Image source={require("../../assets/circle.png")} style={{width:24,height:24,padding:10,marginLeft:10,alignSelf:'flex-end'}} resizeMode='contain'></Image>


</View>
<View style={{flexDirection:'row' ,width:"100%",flex:1,height:40,justifyContent:'space-between',marginTop:10}}>
 
  <View style={{alignSelf:'flex-start' ,flexDirection:'row'}}>
 <Image source={require("../../assets/cash.png")} style={{width:24,height:24,padding:10,marginLeft:10,alignSelf:'flex-start'}} resizeMode='contain'></Image>
 <Text style={{marginLeft:10, alignSelf:"flex-end"}} >Cash </Text>
 </View>
 <Image source={require("../../assets/circle.png")} style={{width:24,height:24,padding:10,marginLeft:10,alignSelf:'flex-end'}} resizeMode='contain'></Image>
 

</View>
<View style={{flexDirection:'row' ,width:"100%",flex:1,height:40,justifyContent:'space-between',marginTop:10}}>
 
  <View style={{alignSelf:'flex-start' ,flexDirection:'row'}}>
 <Image source={require("../../assets/card.png")} style={{width:24,height:24,padding:10,marginLeft:10,alignSelf:'flex-start'}} resizeMode='contain'></Image>
 <Text style={{marginLeft:10, alignSelf:"flex-end"}} >Kilometer {"\n"} <Text>
      30(point)
     </Text> </Text>
 </View>
 <Image source={require("../../assets/circle.png")} style={{width:24,height:24,padding:10,marginLeft:10,alignSelf:'flex-end'}} resizeMode='contain'></Image>
 

</View>


 </Content>

 <View style={[{width:"70%", alignSelf:'center', marginTop:20}]}>


<Button
   title="Pay"
   titleStyle={{color:"white"}}
   type="clear"
   onPress={() => this.props.navigation.navigate("MapScreen")}
     containerStyle={{backgroundColor:"#1f4b70",borderRadius:5 ,width:"100%",marginBottom:10}}

/>
 </View>
</Container>

)

   } 

}


export default PayScreen;
