import React, { Component } from "react";
import {
  StatusBar,
  Image,
  TouchableOpacity,
  View,
  FormLabel,
  FormInput,
  FormValidationMessage,
  TextInput,
  Alert
} from "react-native";
import styles from "./styles";
import { Container, Content, Footer, Text } from "native-base";
import { Button } from "react-native-elements";
import { Provider, connect } from "react-redux";
import * as actions from "./action";
import Toast from "react-native-simple-toast";
import ProgressDialog from "../../utility/progessdialog";

import { AccessToken, LoginManager, LoginButton } from "react-native-fbsdk";
// import firebase from "react-native-firebase";

// import GetLocation from "react-native-get-location";
import { SOCIAL_LOGIN_URL } from "../../utility/AppConstant";
import AsyncStorage from "@react-native-community/async-storage";

//import { JsonFormatter } from "tslint/lib/formatters";

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",//"jmcalderon235@gmail.com",
      password: "",//"123456",
      isLoading: false,
      lat: "",
      long: "",
      fcm_token: "",
      user_id: "",
      IsAsyncStorage: false,
      Nombres: "",
      DNI: ""
    };
  }
  async removeItemValue(key) {
    try {
      await AsyncStorage.removeItem(key);
      console.log("Me borraron");
      return true;
    } catch (exception) {
      return false;
    }
  }

  async componentDidMount() {
    //await this.removeItemValue("@gadelidriver:conductor");
    //Alert.alert("Eliminaron el store");
  }

  handleEmailChange = email => {
    this.setState({ email });
  };

  handlePasswordChange = password => {
    this.setState({ password });
  };

  async login(navigate) {
    if (this.state.email == "" || this.state.email == "undefined") {
      Toast.show("Ingrese su email", Toast.LONG);
    } else if (
      this.state.password == "" ||
      this.state.password == "undefined"
    ) {
      Toast.show("Ingrese su contraseña", Toast.LONG);
    } else {
      this.setState({ isLoading: true });
      fetch("https://aveoperu.com/gadeli11/repartidor_login.php", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email: this.state.email,
          passwords: this.state.password
        })
      })
        .then(response => response.json())
        .then(responseJson => {
          if (responseJson.token !== "") {
            Toast.show("Datos Correctos", Toast.LONG);
              this.storeSessionToken(responseJson).then( ()=>{
              this.props.navigation.navigate("OrderRequest", {
                username: responseJson.nombres,
                email: responseJson.email,
                id: responseJson.id
              })
            })
          } else {
            Alert.alert("Datos incorrectos");
            this.setState({ isLoading: false });
          }
        })
        .catch(error => {
          console.error(error);
          this.setState({ isLoading: false });
        });

      //
    }
  }

  storeSessionToken = async data => {
    try {
      await AsyncStorage.setItem("@gadelidriver:conductor",JSON.stringify(data));
      await AsyncStorage.setItem('@gadelidriver:token', data.token);
      await AsyncStorage.setItem('@gadelidriver:usuario_id',data.id);
      await AsyncStorage.setItem('@gadelidriver:nombres',data.Nombres);
      await AsyncStorage.setItem('@gadelidriver:email',data.email);
    
      console.log("Data saved successfully");
    } catch (error) {
      console.log("Error while storing the token");
    }
  };
  getdata = async () =>{
    await AsyncStorage.getItem("@gadelidriver:token").then((val) =>{
        alert("nombre "+ val)
    })
  }
  render() {
    const { navigate } = this.props.navigation;
    const { email, password } = this.state;

    return (
      <Container style={styles.container}>
        <Content padder>
          <Image
            source={require("../../assets/logo_login_header.png")}
            style={{
              width: 200,
              height: 160,
              alignSelf: "center",
              marginTop: 20
            }}
            resizeMode="contain"
          />
          <View>
            <Text
              style={{
                textAlign: "center",
                fontSize: 19,
                marginTop: 20,
                color: "#000000",
                fontWeight: "bold"
              }}
            >
              Datos de Ingreso
            </Text>
            <View style={{ marginLeft: 20, marginRight: 20 }}>
              <TextInput
                style={{
                  height: 45,
                  width: "95%",
                  borderColor: "grey",
                  borderWidth: 0.5,
                  marginTop: 50,
                  alignSelf: "center",
                  paddingLeft: 10,
                  borderRadius: 5
                }}
                placeholder="Email/Celular"

                placeholderTextColor="#888888"
                keyboardType="email-address"
                returnKeyType="next"
                onChangeText={this.handleEmailChange}
                //set the value in state.
                // onChangeText={TextInputValue => this.onEnterText(TextInputValue)}
                // Making the Under line Transparent.
                underlineColorAndroid="transparent"
              />

              {/* <ProgressDialog visible={this.state.isLoading} /> */}

              <TextInput
                style={{
                  height: 45,
                  width: "95%",
                  borderColor: "grey",
                  borderWidth: 0.5,
                  marginTop: 5,
                  alignSelf: "center",
                  paddingLeft: 10,
                  borderRadius: 5
                }}
                placeholder="Contraseña"
                placeholderTextColor="#888888"

                onChangeText={this.handlePasswordChange}
                secureTextEntry
                returnKeyType="done"
                underlineColorAndroid="transparent"
              />
            </View>
            <View
              style={[{ width: "70%", alignSelf: "center", marginTop: 30 }]}
            >
              <Button
                //onPress={() => this.props.navigation.navigate("OrderRequest")}

                onPress={() => this.login(navigate)}
                title="Ingreso"
                titleStyle={{ color: "white" }}
                type="clear"
                containerStyle={{ backgroundColor: "#1f4b70", borderRadius: 5 }}
              />

            </View>
            <Text
              onPress={() => this.props.navigation.navigate("ForgotPasword")}
              style={{ textAlign: "center", marginTop: 20 }}
            >
              Olvide mi contraseña
            </Text>
            <View
              style={[{ width: "70%", alignSelf: "center", marginTop: 30 }]}
            >
              <Button
                onPress={() => this.props.navigation.navigate("RegisterPage")}
                title="Registrarse"
                titleStyle={{ color: "white" }}
                type="clear"
                containerStyle={{ backgroundColor: "#1f4b70", borderRadius: 5 }}
              />
            </View>
            <View />
          </View>
        </Content>

        <Footer style={{ backgroundColor: "#fff" }}>
          <TouchableOpacity onPress={()=>this.getdata()}>
          <Text style={{ textAlign: "center", marginTop: 30 }}>
            Version :1.0.0
          </Text>
          </TouchableOpacity>
        </Footer>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  isLoggedIn: state.auth.isLoggedIn,
  isLoading: state.auth.isLoading,
  userData: state.auth.userData,
  error: state.auth.error
});

const mapDispatchToProps = dispatch => ({
  login: (email, password, lat, long, fcm_token) =>
    dispatch(actions.login({ email, password, lat, long, fcm_token }))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage);
