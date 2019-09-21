import React from "react";
import {
  StatusBar,
  Image,
  TouchableOpacity,
  View,
  TextInput
} from "react-native";
import { Container, Content, Footer, Text } from "native-base";
import { Button, Icon, CheckBox } from "react-native-elements";
import AsyncStorage from "@react-native-community/async-storage";
class SummaryPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
      importe_reembolso: 0.0,
      importe_delivery: 0.0,
      importe_espera: 0.0,
      importe_total: 0.0,
      Nombre_cliente: ""
    };
  }

  async removeStorage() {
    await AsyncStorage.removeItem("@gadeli:idpedido");
  }

  finalizarPedido() {
    this.removeStorage();
    this.props.navigation.navigate("OrderRequest");
  }

  render() {
    const { params } = this.props.navigation.state;
    let total =
      parseFloat(params.importe_espera) +
      parseFloat(params.importe_delivery) +
      parseFloat(params.importe_reembolso);
    // this.setState({ importe_total = total;})
    return (
      <Container>
        <View style={{ flexDirection: "row", width: "100%", height: 57 }}>
          <View style={{ flexDirection: "column", width: "20%" }}>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.goBack(null);
              }}
            >
              <Image
                source={require("../../assets/backk.png")}
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
              Resumen del Servicio{" "}
            </Text>
          </View>
        </View>
        <View
          style={{
            width: "100%",
            backgroundColor: "grey",
            height: 2,
            marginTop: 10
          }}
        />

        <Content padder>
          <View style={{ flexDirection: "row" }}>
            <Text
              style={{
                textDecorationLine: "underline",
                textDecorationColor: "grey",
                fontSize: 15
              }}
            >
              Cliente: {params.Nombre_cliente}
            </Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text
              style={{
                textDecorationColor: "grey",
                fontSize: 17,
                marginTop: 5,
                color: "#1f4b70"
              }}
            >
              Resumen del Pedido :{" "}
            </Text>
          </View>

          <View
            style={{
              marginTop: 20,
              borderColor: "#1f4b70",
              borderWidth: 1,
              width: "100%",
              height: 35,
              flexDirection: "row",
              justifyContent: "space-between"
            }}
          >
            <Text style={{ fontSize: 15, padding: 5 }}>Total a reembolsar</Text>
            <Text style={{ fontSize: 15, padding: 5 }}>
              S/ {params.importe_reembolso}
            </Text>
          </View>

          <View
            style={{
              borderColor: "#1f4b70",
              borderWidth: 1,
              width: "100%",
              height: 35,
              flexDirection: "row",
              justifyContent: "space-between"
            }}
          >
            <Text style={{ fontSize: 15, padding: 5 }}>
              Servicio del Delivery
            </Text>
            <Text style={{ fontSize: 15, padding: 5 }}>
              S/ {params.importe_delivery}
            </Text>
          </View>

          <View
            style={{
              borderColor: "#1f4b70",
              borderWidth: 1,
              width: "100%",
              height: 35,
              flexDirection: "row",
              justifyContent: "space-between"
            }}
          >
            <Text style={{ fontSize: 15, padding: 5 }}>
              Servicio por tiempo de espera:{" "}
            </Text>
            <Text style={{ fontSize: 15, padding: 5 }}>
              S/ {params.importe_espera}
            </Text>
          </View>

          <View
            style={{
              width: "100%",
              height: 35,
              flexDirection: "row",
              justifyContent: "space-between"
            }}
          >
            <Text style={{ fontSize: 15, paddingLeft: 5 }} />
            <Text style={{ fontSize: 15, paddingLeft: 5 }}>
              Total a pagar :{" "}
            </Text>
            <Text style={{ fontSize: 15, paddingLeft: 5 }}>
              S/{" "}
              <Text>
                {parseFloat(params.importe_espera) +
                  parseFloat(params.importe_delivery) +
                  parseFloat(params.importe_reembolso)}
              </Text>
            </Text>
          </View>

          <Text style={{ color: "#1F4B70" }}>Usted pagar con :</Text>

          <View style={{ flexDirection: "row", marginTop: 20 }}>
            <Button
              buttonStyle={{
                marginTop: 10,
                backgroundColor: "#204B71",
                width: "70%"
              }}
              title="EFECTVO"
              textStyle={{ color: "#202020" }}
              onPress={() => this.finalizarPedido()}
              // onPress={() =>
              //   this.props.navigation.navigate("OrderRequest", {
              //     importe_total: total
              //   })
              // }
            />
            <Button
              buttonStyle={{
                marginTop: 10,
                backgroundColor: "#204B71",
                width: "70%"
              }}
              title="TARJETA"
              textStyle={{ color: "#202020" }}
              //onPress={() => this.setState({ checked: !this.state.checked })}
              //onPress={() => this.props.navigation.navigate("PayDetailsScreen")}
            />
          </View>
        </Content>
      </Container>
    );
  }
}

export default SummaryPage;
