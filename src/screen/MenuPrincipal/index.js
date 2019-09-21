import React from "react";
import {
  StatusBar,
  Image,
  TouchableOpacity,
  View,
  FormLabel,
  FormInput,
  FormValidationMessage,
  TextInput,
  StyleSheet,
  Alert
} from "react-native";
import {
  Container,
  Content,
  Footer,
  Text,
  Card,
  CardItem,
  Body
} from "native-base";
import AsyncStorage from "@react-native-community/async-storage";
import { Button } from "react-native-elements";
//import tabbar from "../ButtonBar";
class MenuPrincipal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      idpedido: 0
    };
  }

  componentDidMount() {
    // this.get_pedido_storeage();
  }

  get_pedido_storeage = async () => {
    try {
      const value = await AsyncStorage.getItem("@gadeli:idpedido");
      if (value !== null) {
        this.setState({ idpedido: value });
      }
    } catch (e) {
      // error reading value
    }
  };
  render() {
    return (
      <Container>
        <View style={{ flexDirection: "row", width: "100%", height: 57 }}>
          <View style={{ flexDirection: "column", width: "20%" }}>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.toggleDrawer();
              }}
            >
              <Image
                source={require("../../assets/menu.png")}
                resizeMode="contain"
                style={{
                  width: 50,
                  height: 50,
                  padding: 10,
                  marginTop: 10,
                  marginLeft: 10
                }}
              />
            </TouchableOpacity>
          </View>

          <View
            style={{ width: "80%", flexDirection: "column", marginTop: 20 }}
          >
            <Text
              style={{ fontSize: 22, fontWeight: "bold", color: "#1f4b70" }}
            >
              {" "}
              Panel Principal{" "}
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 10
          }}
        >
          <TouchableOpacity
            style={{ width: "33%", height: 40 }}
            underlayColor="blue"
            onPress={() => {
              //this.props.navigation.toggleDrawer();
              this.props.navigation.navigate("OrderRequest");
            }}
          >
            <Image
              source={require("../../assets/Pedidos.png")}
              style={{ width: "100%", height: 40 }}
              resizeMode="contain"
            />
          </TouchableOpacity>

          {/* coloca el boton rendondito con fondo excelente
          <TouchableOpacity 
           style={{ borderColor: 'blue', borderWidth: 1, borderRadius: 40, alignItems: 'center', justifyContent: 'center',
           flexDirection: 'row', height: 44, width: 200, }}> 
             <Text style={{ fontSize: 16, color : 'blue', textAlign: 'center', backgroundColor: 'transparent', }}>
              This is a flat button </Text> 
              </TouchableOpacity> */}

          <TouchableOpacity
            style={{ width: "33%", height: 40 }}
            onPress={() => {
              this.props.navigation.navigate("OrderRequestDetails", {
                idpedido: this.state.idpedido,
                otherParam: "anything you want here"
              });
            }}
          >
            <Image
              source={require("../../assets/EstadoPedidos.png")}
              style={{ width: "100%", height: 40 }}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{ width: "33%", height: 40 }}
            onPress={() => this.props.navigation.navigate("MapScreen")}
          >
            <Image
              source={require("../../assets/UbicacionPedido.png")}
              style={{ width: "100%", height: 40 }}
              resizeMode="contain"
            />
          </TouchableOpacity>
        </View>
        <Content padder />
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10
  },
  button: {
    alignItems: "center",
    backgroundColor: "white",
    padding: 10,
    borderRadius: 40
  },
  countContainer: {
    alignItems: "center",
    padding: 10
  },
  countText: {
    color: "#FF00FF"
  }
});

export default MenuPrincipal;
