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

    }
  });

  export default styles;