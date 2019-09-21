import React, { Component } from "react";
import { NavigationActions } from "react-navigation";
import {
  ScrollView,
  TouchableOpacity,
  Text,
  View,
  Alert,
  Clipboard
} from "react-native";
import Icon from "react-native-vector-icons/Octicons";
import HomePage from "../home";
import { Image } from "react-native-elements";
import styles from "./styles";
import { TouchableHighlight } from "react-native-gesture-handler";
import MyOrder from "../myorder";
import { Container, Content } from "native-base";
import AsyncStorage from "@react-native-community/async-storage";

import Dialog, {
  DialogTitle,
  DialogContent,
  DialogFooter,
  DialogButton,
  SlideAnimation,
  ScaleAnimation
} from "react-native-popup-dialog";
const order = require("../../assets/order.png");
const history = require("../../assets/history.png");
const feedback = require("../../assets/str.png");
const suggestion = require("../../assets/review.png");
const logout = require("../../assets/logout.png");
const about = require("../../assets/about.png");
const point = require("../../assets/point.png");

const Storage = {
  getItem: async key => {
    let item = await AsyncStorage.getItem(key);
    return JSON.parse(item);
  },
  setItem: async (key, value) => {
    return await AsyncStorage.setItem(key, JSON.stringify(value));
  },
  removeItem: async key => {
    return await AsyncStorage.removeItem(key);
  }
};

class DrawerContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "datos.email",
      nombre: "datos.Nombres",
      dialogVisible: false,
      defaultAnimationDialog: false,
      scaleAnimationDialog: false,
      slideAnimationDialog: false
    };
  }

  navigateToScreen = route => () => {
    const navigate = NavigationActions.navigate({ routeName: route });
    this.props.navigation.dispatch(navigate);
  };

  async removeItemValue(key) {
    try {
      await AsyncStorage.removeItem(key);
      console.log("Me borraron");
      return true;
    } catch (exception) {
      return false;
    }
  }
  async logout() {
    Alert.alert(
      "Gadeli",
      "Desea cerrar sesión",
      [
        { text: "Salir", onPress: () => this.removeStorage() },
        {
          text: "Cancelar",
          style: "cancel"
        }
      ],
      { cancelable: false }
    );
  }
  async removeStorage() {
    await AsyncStorage.removeItem("@gadelidriver:conductor");
    await AsyncStorage.removeItem("@gadelidriver:token");
    await AsyncStorage.removeItem("@gadelidriver:usuario_id");
    await AsyncStorage.removeItem("@gadelidriver:nombres");
    await AsyncStorage.removeItem("@gadelidriver:email");
    this.props.navigation.navigate("LoginPage");
  }
  metodosdepago() {
    this.setState({
      dialogVisible: true
    });
  }
  cerrar() {
    this.setState({
      dialogVisible: false
    });
  }

  enviar() {
    this.setState({
      defaultAnimationDialog: true
    });
  }

  async componentDidMount() {
    await AsyncStorage.getItem("@gadelidriver:conductor").then(val => {
      let conductor_item = JSON.parse(val);
      //alert(val.Nombres)
      if (conductor_item.email == null) {
        this.setState({
          email: "",
          nombre: conductor_item.Nombres
        });
      } else {
        this.setState({
          email: conductor_item.email,
          nombre: conductor_item.Nombres
        });
      }
    });
  }
  render() {
    //const { nombre, email } = this.props.navigate.state;
    return (
      <View style={styles.containerStyle}>
        <View>
          <View
            style={{
              backgroundColor: "#1f4b70",
              height: 170,
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <TouchableOpacity
              onPress={this.navigateToScreen("ProfilePage")}
              style={[
                styles.profileImgContainer,
                { borderColor: "white", borderWidth: 1 }
              ]}
            >
              <Image
                source={require("../../assets/logo.jpg")}
                style={styles.profileImg}
              />
            </TouchableOpacity>

            <Text style={{ color: "white", fontSize: 15 }}>
              {this.state.nombre}
            </Text>

            <Text style={{ color: "white", fontSize: 15 }}>
              {this.state.email}
            </Text>
          </View>
        </View>
        <Container>
          <Content>
            <TouchableOpacity onPress={this.navigateToScreen("OrderRequest")}>
              <View style={{ flexDirection: "row" }}>
                <Image
                  source={order}
                  resizeMode="center"
                  style={{ width: 24, height: 24, margin: 15 }}
                />
                <Text style={{ color: "black", marginTop: 17 }}>
                  Mis Ordenes
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.navigateToScreen("MyOrder")}>
              <View style={{ flexDirection: "row" }}>
                <Image
                  source={history}
                  resizeMode="center"
                  style={{ width: 24, height: 24, margin: 15 }}
                />
                <Text style={{ color: "black", marginTop: 17 }}>
                  Historial de Ordenes
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => this.enviar()}>
              {/* onPress={this.navigateToScreen("BankDetailPage")}> */}
              <View style={{ flexDirection: "row" }}>
                <Image
                  source={require("../../assets/bank.png")}
                  resizeMode="center"
                  style={{ width: 24, height: 24, margin: 15 }}
                />
                <Text style={{ color: "black", marginTop: 17 }}>
                  Medios de pago
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.navigateToScreen("MyReview")}>
              <View style={{ flexDirection: "row" }}>
                <Image
                  source={suggestion}
                  resizeMode="center"
                  style={{ width: 24, height: 24, margin: 15 }}
                />
                <Text style={{ color: "black", marginTop: 17 }}>
                  Comentarios
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={this.navigateToScreen("OrderRequestDetails")}
            >
              <View style={{ flexDirection: "row" }}>
                <Image
                  source={require("../../assets/status.png")}
                  resizeMode="center"
                  style={{ width: 24, height: 24, margin: 15 }}
                />
                <Text style={{ color: "black", marginTop: 17 }}>
                  Estado de mis Ordenes
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.navigateToScreen("ListPrice")}>
              <View style={{ flexDirection: "row" }}>
                <Image
                  source={require("../../assets/setting.png")}
                  resizeMode="center"
                  style={{ width: 24, height: 24, margin: 15 }}
                />
                <Text style={{ color: "black", marginTop: 17 }}>Tarifario</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity onPress={this.navigateToScreen("MainPageOrder")}>
              <View style={{ flexDirection: "row" }}>
                <Image
                  source={about}
                  resizeMode="center"
                  style={{ width: 24, height: 24, margin: 15 }}
                />
                <Text style={{ color: "black", marginTop: 17 }}>
                  Versión del Sistema
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              // onPress={this.navigateToScreen('MainPageOrder')}
              onPress={() => this.logout()}
              //onPress={() => this.removeItemValue("@gadelidriver")}
            >
              <View style={{ flexDirection: "row" }}>
                <Image
                  source={logout}
                  resizeMode="center"
                  style={{ width: 24, height: 24, margin: 15 }}
                />
                <Text style={{ color: "black", marginTop: 17 }}>Salir</Text>
              </View>
            </TouchableOpacity>

            <View>
              <Dialog
                onDismiss={() => {
                  this.setState({ defaultAnimationDialog: false });
                }}
                width={0.9}
                visible={this.state.defaultAnimationDialog}
                rounded
                actionsBordered
                dialogTitle={
                  <DialogTitle
                    title="MEDIOS DE PAGO"
                    style={{
                      backgroundColor: "#F7F7F8"
                    }}
                    hasTitleBar={false}
                    align="left"
                  />
                }
                footer={
                  <DialogFooter>
                    <DialogButton
                      text="Aceptar"
                      bordered
                      onPress={() => {
                        this.setState({
                          defaultAnimationDialog: false,
                          EsConforme: false
                        });
                      }}
                      key="button-1"
                    />
                  </DialogFooter>
                }
              >
                <DialogContent
                  style={{
                    backgroundColor: "#F7F7F8"
                  }}
                >
                  <View style={{ width: "100%" }}>
                    <View style={{ width: "100%", justifyContent: "center" }}>
                      <Text style={{ fontSize: 15, textAlign: "center" }}>
                        Para copia toque cualquiera de nuestras cuentas
                        {"\n"}
                      </Text>
                    </View>
                    <TouchableOpacity
                      onPress={() => Clipboard.setString("952293578")}
                    >
                      <Text>Yappe a 952293578</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => Clipboard.setString("4152432106")}
                    >
                      <Text>Banco de la Nación 4152432106</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => Clipboard.setString("54037307510077")}
                    >
                      <Text>BCP 54037307510077</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => Clipboard.setString("7190136718")}
                    >
                      <Text>Scotiabank 7190136718</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => Clipboard.setString("3423146952634")}
                    >
                      <Text>Interbank 3423146952634</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() =>
                        Clipboard.setString("0011-0427-0200157674")
                      }
                    >
                      <Text>Banco Continental 0011-0427-0200157674</Text>
                    </TouchableOpacity>
                  </View>
                </DialogContent>
              </Dialog>
            </View>
          </Content>
        </Container>
      </View>
    );
  }
}

export default DrawerContent;
