import React  from 'react';
import { StatusBar, Image, TouchableOpacity, View, FormLabel, FormInput, FormValidationMessage,TextInput} from 'react-native';
import { Container, Content, Footer ,Text, Card, CardItem, Body} from 'native-base';
import { Button } from 'react-native-elements';



class ProductScreen extends React.Component{

    render(){

        return(

            <Container>
      <View style={{flexDirection:'row', width:"100%",height:57}}>
            <View style={{flexDirection:"column",width:"20%"}}>
            <TouchableOpacity  onPress={() => { this.props.navigation.toggleDrawer() }} >
 <Image source={require("../../assets/menu.png")} resizeMode='contain' style={{width:50,height:50, padding:10,marginTop:10,marginLeft:10}}/>
 </TouchableOpacity>
 </View>

 <View style={{width:"80%",flexDirection:"column",marginTop:20}}>
 <Text style={{fontSize:22,fontWeight:'bold',color:'#1f4b70'}}> Km Swap By Product </Text>

 </View>
 </View>
{/* <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:10}}>
 <Image source={require("../../assets/pending.png")} style={{width:"33%",height:40}} resizeMode='contain'></Image>
 <Image source={require("../../assets/booking.png")} style={{width:"33%",height:40}} resizeMode='contain'></Image>
 <Image source={require("../../assets/completed.png")} style={{width:"33%",height:40}} resizeMode='contain'></Image>

</View> */}
 <Content padder>

  {/* <Card> */}
              <View style={{alignSelf:'center',marginTop:10}}>

                  <Text style={{fontSize:18,fontWeight:"bold"}}>Product Available</Text>
                  <Text style={{fontSize:12}}>Ordered by the most redeemed</Text>

              </View>

              
<View style={{ alignSelf:'center', flexDirection: 'row'}}>
        <View style={{ flex: 1, alignSelf: 'stretch' }} >
            {/* <Text style={{fontSize:12}}>Task</Text> */}
            <View style={{flexDirection:"column"}}>
            <Card>
            <CardItem header bordered>
                <View style={{flexDirection:'row',flex:1}}>
                <View style={{flexDirection:'column',alignSelf:'center'}}>
                <Image source={require("../../assets/coke.png")} style={{width:60,height:60,alignSelf:'center'}} resizeMode='contain'></Image>
               <Text style={{fontSize:10,color:'grey',alignSelf:'center'}}>Need : 30 km</Text>
                </View>
              
              
                </View>
            </CardItem>
         
    
          </Card>
           
            </View> 

            
            </View> 
        <View style={{ flex: 1, alignSelf: 'stretch' }} >
                                {/* <Text style={{fontSize:12}}>Timer</Text> */}
                                <View style={{flexDirection:"column"}}>
                                <Card>
            <CardItem header bordered>
                <View style={{flexDirection:'row',flex:1}}>
                    <View style={{flexDirection:'column',alignSelf:'center'}}>
                <Image source={require("../../assets/sprite.png")} style={{width:60,height:60}} resizeMode='contain'></Image>
                <Text style={{fontSize:10,color:'grey',alignSelf:'center'}}>Need : 20 km</Text>
                </View>
              
                </View>
            </CardItem>
         
    
          </Card>
           

            </View>
</View>
        <View style={{ flex: 1, alignSelf: 'stretch' }} >
        {/* <Text style={{fontSize:12}}>Tour</Text> */}
        <View style={{flexDirection:"column"}}>
        <Card>
            <CardItem header bordered>
                <View style={{flexDirection:'row',flex:1}}>
                <View style={{flexDirection:'column',alignSelf:'center'}}>
                <Image source={require("../../assets/shake.png")} style={{width:60,height:60}} resizeMode='contain'></Image>
                <Text style={{fontSize:10,color:'grey',alignSelf:'center'}}>Need : 30 km</Text>
                </View>
              
                </View>
            </CardItem>
         
    
          </Card>
           
      

</View>
        </View>
 

    </View>

    
              
<View style={{ alignSelf:'center', flexDirection: 'row'}}>
        <View style={{ flex: 1, alignSelf: 'stretch' }} >
            {/* <Text style={{fontSize:12}}>Task</Text> */}
            <View style={{flexDirection:"column"}}>
            <Card>
            <CardItem header bordered>
                <View style={{flexDirection:'row',flex:1}}>
                <View style={{flexDirection:'column',alignSelf:'center'}}>
                <Image source={require("../../assets/cap.png")} style={{width:60,height:60,alignSelf:'center'}} resizeMode='contain'></Image>
               <Text style={{fontSize:10,color:'grey',alignSelf:'center'}}>Need : 30 km</Text>
                </View>
              
              
                </View>
            </CardItem>
         
    
          </Card>
           
            </View> 

            
            </View> 
        <View style={{ flex: 1, alignSelf: 'stretch' }} >
                                {/* <Text style={{fontSize:12}}>Timer</Text> */}
                                <View style={{flexDirection:"column"}}>
                                <Card>
            <CardItem header bordered>
                <View style={{flexDirection:'row',flex:1}}>
                    <View style={{flexDirection:'column',alignSelf:'center'}}>
                <Image source={require("../../assets/key1.png")} style={{width:60,height:60}} resizeMode='contain'></Image>
                <Text style={{fontSize:10,color:'grey',alignSelf:'center'}}>Need : 20 km</Text>
                </View>
              
                </View>
            </CardItem>
         
    
          </Card>
           

            </View>
</View>
        <View style={{ flex: 1, alignSelf: 'stretch' }} >
        {/* <Text style={{fontSize:12}}>Tour</Text> */}
        <View style={{flexDirection:"column"}}>
        <Card>
            <CardItem header bordered>
                <View style={{flexDirection:'row',flex:1}}>
                <View style={{flexDirection:'column',alignSelf:'center'}}>
                <Image source={require("../../assets/key2.png")} style={{width:60,height:60}} resizeMode='contain'></Image>
                <Text style={{fontSize:10,color:'grey',alignSelf:'center'}}>Need : 30 km</Text>
                </View>
              
                </View>
            </CardItem>
         
    
          </Card>
           
      

</View>
        </View>
 

    </View>


    <View style={[{width:"70%", alignSelf:'center', marginTop:30 }]}>

<Button
        // onPress={() => this.props.navigation.navigate('Home')}
     
  title="My Point - 30"
  titleStyle={{color:"#1f4b70"}}
  type="clear"
  containerStyle={{borderColor:"#1f4b70",borderRadius:5,borderWidth:2}}


/>
</View>

<View style={[{width:"70%", alignSelf:'center', marginTop:45,  backgroundColor: "#fff" }]}>

<View style={{flexDirection:'row',alignSelf:'center'}}>
<Button
  title="Reedm"
  titleStyle={{color:"white"}}

  onPress={() => this.props.navigation.goBack(null)}
  type="clear"
  containerStyle={{ backgroundColor:"#1F4B70",width:"50%"
  ,height:40
  }}
/>
<Button
  title="Go"
  titleStyle={{color:"white"}}
  onPress={() => this.props.navigation.goBack(null)}
  type="clear"
  containerStyle={{ backgroundColor:"#1F4B70",width:"70%",height:40,marginLeft:10}}
/>

</View>
 </View>
  {/* <Card>
            <CardItem header bordered>
                <View style={{flexDirection:'row',flex:1,justifyContent:'space-between'}}>
                    <View style={{flexDirection:'row'}}>
                <Image source={require("../../assets/pro.png")} style={{width:24,height:24}} resizeMode='contain'></Image>
                <Text style={{fontSize:12,marginLeft:10 ,color:'black'}}>All Yousef {"\n"}<Text style={{fontSize:10,color:'grey'}}>9 km</Text></Text>
                </View>
                <View >
                <Image source={require("../../assets/red_heart.png")} style={{width:24,height:24,alignSelf:'flex-end',padding:0,margin:0}} resizeMode='contain'></Image>
                <Text  style={{fontSize:10,color:'grey'}}>Book</Text>
                </View>
                </View>
            </CardItem>
         
    
          </Card> */}
{/* 

          <Card>
            <CardItem header bordered>
                <View style={{flexDirection:'row',flex:1,justifyContent:'space-between'}}>
                    <View style={{flexDirection:'row'}}>
                <Image source={require("../../assets/pro.png")} style={{width:24,height:24}} resizeMode='contain'></Image>
                <Text style={{fontSize:12,marginLeft:10,color:"black"}}>All Yousef {"\n"}<Text style={{fontSize:10,color:'grey'}}>9 km</Text></Text>
                </View>
                <View>
                <Image source={require("../../assets/line_heart.png")} style={{width:24,height:24,alignSelf:'flex-end',padding:0,margin:0}} resizeMode='contain'></Image>
                <Text  style={{fontSize:10,color:'grey'}}>Book</Text>
                </View>
                </View>
            </CardItem>
          
          </Card> */}
  {/* </Card> */}

 </Content>
              

            </Container>
        )
    }

}

export default ProductScreen;