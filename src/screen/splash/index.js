import React, { Component } from "react";
import { Container, View } from "native-base";
import { ImageBackground, Platform, Alert } from "react-native";
//import {} from "../../utility/AppConstant";
import { Image } from "react-native-elements";
import AsyncStorage from "@react-native-community/async-storage";
import {
  checkPermission,
  requestPermission
} from "react-native-android-permissions";

const Storage = {
  getItem: async function(key) {
    let item = await AsyncStorage.getItem(key);
    //You'd want to error check for failed JSON parsing...
    return JSON.parse(item);
  },
  setItem: async function(key, value) {
    return await AsyncStorage.setItem(key, JSON.stringify(value));
  },
  removeItem: async function(key) {
    return await AsyncStorage.removeItem(key);
  }
};

class SplashScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user_id: "",
      nombres: "",
      email: "",
      token: ""
    };
  }

  async retrieveSessionToken() {
    try {
      const conductor = await AsyncStorage.getItem("@gadelidriver:conductor");
      const token = await AsyncStorage.getItem("@gadelidriver:token");
      const usuario_id = await AsyncStorage.getItem("@gadelidriver:usuario_id");
      const Nombres = await AsyncStorage.getItem("@gadelidriver:nombres");
      const email = await AsyncStorage.getItem("@gadelidriver:email");

      if (token != null || token != "") {
        this.setState({
          user_id: usuario_id,
          nombres: Nombres,
          email: email,
          token: token
        });

        //this.setState({user_id:token})
        return token;
      }
    } catch (error) {
      // alert("123 :"+error)
      console.log("Error while storing the token");
    }
  }

  async requestPermmmison() {
    await request_location_runtime_permission();
  }

  async componentDidMount() {

    try {
      let obj = Storage.getItem(
        "@gadelidriver:conductor"
      );
      // console.log("user_id====>", obj.token);
          if (
            !obj || obj.token == undefined ||
            obj.token == ""
          ) {
            this.props.navigation.navigate("LoginPage");
            //Alert.alert("LoginPage");
          } else {
            this.props.navigation.navigate(
              "OrderRequest"
            );
            //Alert.alert("OrderRequest");
          }
    } catch (error) {
      console.log(error);
    }
    

    // checkPermission("android.permission.ACCESS_FINE_LOCATION").then(
    //   result => {
    //     console.log("Already Granted!");
    //     this.retrieveSessionToken()
    //       .then(val => {
    //         if (val == null || val == "" || val == undefined) {
    //           this.props.navigation.navigate("LoginPage");
    //         } else {
    //           this.props.navigation.navigate("OrderRequest");
    //         }
    //       })
    //       .catch(error => {
    //         console.log("seseion error", error);
    //       });
    //   },
    //   result => {
    //     console.log("permis", "Not Granted!");
    //     console.log("permis", result);

    //     setTimeout(() => {
          
    //       //,"android.permission.ACCESS_FINE_LOCATION",
    //       //   "android.permission.WRITE_EXTERNAL_STORAGE","android.permission.READ_EXTERNAL_STORAGE","android.permission.CAMERA","android.permission.CALL_PHONE"
          
    //       requestPermission("android.permission.ACCESS_COARSE_LOCATION").then(
    //         result => {
    //           console.log("Granted!", result);
    //           // now you can set the listenner to watch the user geo location

    //           requestPermission("android.permission.ACCESS_FINE_LOCATION").then(
    //             result => {
    //               console.log("Granted!", result);
    //               // now you can set the listenner to watch the user geo location
    //               requestPermission(
    //                 "android.permission.WRITE_EXTERNAL_STORAGE"
    //               ).then(
    //                 result => {
    //                   console.log("Granted!", result);
    //                   // now you can set the listenner to watch the user geo location
    //                   requestPermission(
    //                     "android.permission.READ_EXTERNAL_STORAGE"
    //                   ).then(
    //                     result => {
    //                       console.log("Granted!", result);
    //                       // now you can set the listenner to watch the user geo location
    //                       requestPermission("android.permission.CAMERA").then(
    //                         result => {
    //                           console.log("Granted!", result);
    //                           // now you can set the listenner to watch the user geo location
    //                           requestPermission(
    //                             "android.permission.CALL_PHONE"
    //                           ).then(
    //                             result => {
    //                               console.log("Granted!", result);
    //                               // Preload data using AsyncStorage

    //                               let obj = Storage.getItem(
    //                                 "@gadelidriver:conductor"
    //                               );
    //                               console.log("user_id====>", obj.token);

    //                               if (
    //                                 obj.token == undefined ||
    //                                 obj.token == ""
    //                               ) {
    //                                 this.props.navigation.navigate("LoginPage");
    //                                 //Alert.alert("LoginPage");
    //                               } else {
    //                                 this.props.navigation.navigate(
    //                                   "OrderRequest"
    //                                 );
    //                                 //Alert.alert("OrderRequest");
    //                               }

    //                               // now you can set the listenner to watch the user geo location
    //                             },
    //                             result => {
    //                               console.log("Not Granted!");
    //                               console.log(result);
    //                             }
    //                           );
    //                         },
    //                         result => {
    //                           console.log("Not Granted!");
    //                           console.log(result);
    //                         }
    //                       );
    //                     },
    //                     result => {
    //                       console.log("Not Granted!");
    //                       console.log(result);
    //                     }
    //                   );
    //                 },
    //                 result => {
    //                   console.log("Not Granted!");
    //                   console.log(result);
    //                 }
    //               );
    //             },
    //             result => {
    //               console.log("Not Granted!");
    //               console.log(result);
    //             }
    //           );
    //         },
    //         result => {
    //           console.log("Not Granted!");
    //           console.log(result);
    //         }
    //       );

          
    //       // for the correct StatusBar behaviour with translucent={true} we need to wait a bit and ask for permission after the first render cycle
    //       // (check https://github.com/facebook/react-native/issues/9413 for more info)
    //     }, 0);
    //   }
    // );
  }

  async getToken(user) {
    try {
      let conductor = await AsyncStorage.getItem("@gadelidriver:conductor");
      let conductor_item = JSON.parse(conductor);
      if (conductor_item.token != "") {
        if (conductor_item.email == null) {
          this.setState({
            IsAsyncStorage: true,
            email: "",
            Nombres: conductor_item.Nombres,
            DNI: conductor_item.DNI
          });
        } else {
          this.setState({
            IsAsyncStorage: true,
            email: conductor_item.email,
            Nombres: conductor_item.Nombres,
            DNI: conductor_item.DNI
          });
        }
      }
      //console.log(conductor_item);
    } catch (error) {
      this.setState({ IsAsyncStorage: false });
      console.log("Something went wrong", error);
    }
  }

  render() {
    return (
      <Container>
        <View>
          <ImageBackground
            source={require("../../assets/bg.png")}
            style={{ width: "100%", height: "100%" }}
            resizeMode="stretch"
          >
            <View
              style={{
                width: "100%",
                backgroundColor: "#000",
                opacity: 0.5,
                height: "100%",
                justifyContent: "center"
              }}
            >
              <Image
                source={require("../../assets/logo.png")}
                style={{
                  width: 150,
                  height: 150,
                  resizeMode: "contain",
                  alignSelf: "center"
                }}
              />
            </View>
          </ImageBackground>
        </View>
      </Container>
    );
  }
}

export default SplashScreen;
