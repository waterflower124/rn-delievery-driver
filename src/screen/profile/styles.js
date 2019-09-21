import React, {StyleSheet} from 'react-native'

import { Dimensions } from "react-native";



var deviceWidth = Dimensions.get("window").width;
var deviceHeight = Dimensions.get("window").height;


const styles = StyleSheet.create({
    container: {
       height:deviceHeight,
       width:null,
       backgroundColor: '#ffffff',
    },
    headertext:{
textAlign:'center',
color:'#1F4B70',
fontSize:28,
fontWeight: 'bold',
marginTop:80
    },login_btn:{
        alignSelf:'center',
        marginTop:40,
        marginLeft:30,
        marginRight:30,

    },  searchSection: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    SectionStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: .5,
        borderColor: 'grey',
        height: 45,
        borderRadius: 5 ,
        margin: 10
    },
     
    ImageStyle: {
        padding: 10,
        margin: 5,
        height: 25,
        width: 25,
        resizeMode : 'stretch',
        alignItems: 'center'
    },profileImgContainer: {
        marginLeft: 8,
        height: 82,
        width: 82,
        borderRadius: 40,
        borderWidth: 1
      },
      profileImg: {
        height: 80,
        width: 80,
        borderRadius: 40,
      }
  });

  export default styles;