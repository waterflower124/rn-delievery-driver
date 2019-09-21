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
  Alert,
  Linking,
  Platform,
  ActivityIndicator,
  FlatList,
  ScrollView
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
import { Button } from "react-native-elements";
import call from "react-native-phone-call";
import AsyncStorage from "@react-native-community/async-storage";
//class OrderRequestDetails extends React.Component {
class OrderRequestDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      id: "",
      tipo_pedido_id: "",
      Conductor_id: "",
      Usuarios_id: "",
      avance: "",
      descripcion: "",
      direccion_recojo: "",
      direccion_envio: "",
      ubcacion_recepcion: "",
      ubicacion_envio: "",
      tipodepago: "",
      precio_estimado: "",
      precioreferencia: "",
      categoria: "",
      comentario: "",
      preciototal: "",
      precioespera: "",
      precioenvio: "",
      Inicio: "",
      Termino: "",
      estado: "",
      tipopedido: "",
      usuarios_id: "",
      repartidor: "",
      vehiculo: "",
      nombres: "",
      DNI: "",
      telefono: "",
      btn_comienzo: false,
      btn_compra: true,
      btn_encamino: true,
      btn_final: true,
      color_comienzo: "gray",
      color_compra: "gray",
      color_encamino: "gray",
      color_final: "gray",
      bold_comienzo: "normal",
      bold_compra: "normal",
      bold_encamino: "normal",
      bold_final: "normal",
      repartidor_id: ""
    };
  }

  get_pedido_storeage = async () => {
    try {
      const value = await AsyncStorage.getItem("@gadeli:idpedido");
      if (value !== null) {
        this.setState({ id: value });
      }
    } catch (e) {
      // error reading value
    }
  };

  get_pedido_storeage = async () => {
    return this.state.refreshing;
  };

  async componentDidMount() {
    this.get_pedido_storeage();
    // const { params } = this.props.navigation.state;
    // //  Alert.alert(params.idpedido);
    // this.setState({ id: params.idpedido });

    try {
      const value = await AsyncStorage.getItem("@gadeli:idpedido");
      if (!(value == null || value == "" || value == undefined)) {
        this.setState({ id: value, isLoading: true });
        const repartidor_id = await AsyncStorage.getItem(
          "@gadelidriver:usuario_id"
        );
        this.setState({ repartidor_id: repartidor_id });

        fetch("https://aveoperu.com/gadeli11/pedido_detalle.php", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            pedido_id: this.state.id
          })
        })
          .then(response => response.json())
          .then(responseJson => {
            if (responseJson.id != null) {
              // comprobar si es el repatidor escojido
              //Alert.alert("Otro repartidor tomo el pedido "+ this.state.repartidor_id + "  json "+ responseJson.Conductor_id);
              //if(parseInt(this.state.repartidor_id)==parseInt(responseJson.Conductor_id)){
              this.setState({
                id: responseJson.id,
                tipo_pedido_id: responseJson.tipo_pedido_id,
                Conductor_id: responseJson.Conductor_id,
                avance: responseJson.avance,
                descripcion: responseJson.descripcion,
                direccion_recojo: responseJson.direccion_recojo,
                direccion_envio: responseJson.direccion_envio,
                ubcacion_recepcion: responseJson.ubcacion_recepcion,
                ubicacion_envio: responseJson.ubicacion_envio,
                tipodepago: responseJson.tipodepago,
                precio_estimado: responseJson.precio_estimado,
                categoria: responseJson.categoria,
                comentario: responseJson.comentario,
                preciototal: responseJson.preciototal,
                precioespera: responseJson.precioespera,
                precioenvio: responseJson.precioenvio,
                Inicio: responseJson.Inicio,
                Termino: responseJson.Termino,
                estado: responseJson.estado,
                tipopedido: responseJson.tipopedido,
                usuarios_id: responseJson.usuario.id,
                repartidor: responseJson.repartidor,
                vehiculo: responseJson.vehiculo.tipo,
                nombres: responseJson.usuario.nombre,
                DNI: responseJson.DNI,
                telefono: responseJson.usuario.telefono,
                precioreferencia: responseJson.precioreferencia,
                isLoading: false
              });
              //  }
              //{
              //Alert.alert("Otro repartidor tomo el pedido "+ this.state.repartidor_id + "  json "+ responseJson.Conductor_id);
              //this.props.navigation.navigate("OrderRequest")
              //}
            } else {
              Alert.alert("Datos incorrectos");
              this.setState({ isLoading: false });
            }
          })
          .catch(error => {
            console.error(error);
            this.setState({ isLoading: false });
          });
      }
    } catch (e) {
      this.setState({ refreshing: false });
    }
  }

  actulizar_avance = (idpedido, avance) => {
    if (idpedido !== "" && avance !== "") {
      fetch("https://aveoperu.com/gadeli11/pedido_avance.php", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          pedido_id: idpedido,
          avance: avance
        })
      });
    }
  };
  onclick_uno() {
    this.setState({
      color_comienzo: "green",
      bold_comienzo: "bold",
      btn_comienzo: true,
      btn_compra: false
    });

    this.actulizar_avance(this.state.id, 1);
  }
  onclick_dos() {
    this.setState({
      color_compra: "green",
      bold_compra: "bold",
      btn_compra: true,
      btn_encamino: false
    });
    this.actulizar_avance(this.state.id, 2);
  }
  onclick_tres() {
    this.setState({
      color_encamino: "green",
      bold_encamino: "bold",
      btn_encamino: true,
      btn_final: false
    });
    this.actulizar_avance(this.state.id, 3);
  }

  onclick_cuarto() {
    this.setState({
      color_final: "green",
      bold_final: "bold",
      btn_final: true,
      btn_compra: false
    });
    this.actulizar_avance(this.state.id, 4);
    this.props.navigation.navigate("DeliverdScreen", {
      Nombre_cliente: this.state.nombres,
      idpedido: this.state.id
    });
  }
  call = () => {
    //handler to make a call
    let phone = this.state.telefono;
    if (phone == "") {
      Alert.alert("No tiene numero telefono");
    } else {
      const args = {
        number: phone,
        prompt: false
      };
      call(args).catch(console.error);
    }
  };

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, paddingTop: 20 }}>
          <ActivityIndicator />
        </View>
      );
    }
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
              Detalle del Pedido
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

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 10
          }}
        >
          <View>
            <Image
              source={require("../../assets/pro.png")}
              style={{ width: 50, height: 50 }}
              resizeMode="contain"
            />
          </View>
          <View>
            <Text
              style={{
                fontSize: 12,
                marginLeft: 5,
                color: "#1f4b70",
                alignSelf: "center"
              }}
            >
              Cliente : {this.state.nombres} {"\n"}
            </Text>
            <Text
              style={{
                fontSize: 12,
                alignSelf: "flex-end",
                // marginLeft: 5,
                color: "#1f4b70"
              }}
            >
              Tipo de Vehiculo : {"\n"}
              <Text
                style={{
                  fontSize: 12,
                  alignSelf: "flex-end",
                  color: "#1f4b70"
                }}
              >
                {this.state.vehiculo}
              </Text>
            </Text>
          </View>
          <View>
            <TouchableOpacity>
              <Text
                style={{ fontSize: 12, color: "#1f4b70", fontWeight: "bold" }}
              >
                telefono: {this.state.telefono}
              </Text>
            </TouchableOpacity>
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
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignContent: "center",
            backgroundColor: "white",
            height: "100%",
            alignItems: "stretch"
          }}
        >
          {/* <ScrollView scrollEnabled={true} alwaysBounceVertical={true}> */}
          <View
            style={{
              flex: 3,
              marginLeft: 10,
              marginRight: 10,
              backgroundColor: "white"
            }}
          >
            <Text
              style={{
                textDecorationLine: "underline",
                textDecorationColor: "#1f4b70",
                fontSize: 16,
                color: "#1f4b70",
                padding: 2
              }}
            >
              Información de la Orden
            </Text>
            <Text style={{ fontSize: 18, color: "grey" }}>
              Tipo : {this.state.tipopedido}
            </Text>
            <Text style={{ fontSize: 18, color: "grey" }}>
              Pedido : {this.state.descripcion}
            </Text>
            <Text style={{ fontSize: 18, color: "grey" }}>
              Precio Estimado : {this.state.precio_estimado}
            </Text>
            <Text style={{ fontSize: 18, color: "grey" }}>
              <Text style={{ fontWeight: "bold" }}>Dirección envio :</Text>
              {this.state.direccion_envio} {"\n"}
              <Text style={{ fontWeight: "bold" }}>Dirección recojo :</Text>
              {this.state.direccion_recojo} {"\n"}
              <Text style={{ fontWeight: "bold" }}>Vuelto de :</Text> S/.{" "}
              {this.state.precioreferencia}
            </Text>
          </View>
          {/* </ScrollView> */}
          <View
            style={{
              marginLeft: 10,
              marginBottom: 10,
              marginRight: 10,
              justifyContent: "center"
            }}
          >
            <TouchableOpacity
              onPress={() => this.call()}
              style={{
                borderColor: "#1f4b70",
                borderWidth: 1,
                borderRadius: 10,
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "row",
                height: 44,
                width: "100%",
                backgroundColor: "#1f4b70"
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  color: "white",
                  textAlign: "center",
                  backgroundColor: "transparent"
                }}
              >
                Llamar al Cliente{" "}
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flex: 0.2,
              justifyContent: "center",
              backgroundColor: "white"
            }}
          >
            <Text
              style={{
                textDecorationLine: "underline",
                textDecorationColor: "#1f4b70",
                fontSize: 16,
                color: "#1f4b70",
                textAlign: "center"
              }}
            >
              Mi Estado de Avance
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              backgroundColor: "white",
              width: "100%",
              height: "30%",
              flexDirection: "row",
              justifyContent: "center",
              marginLeft: 10,
              marginRight: 10
            }}
          >
            <TouchableOpacity
              onPress={this.onclick_uno.bind(this)}
              disabled={this.state.btn_comienzo}
              style={{
                width: "15%",
                height: "100%"
              }}
            >
              <Image
                source={require("../../assets/boy.png")}
                style={{
                  width: "100%",
                  height: "70%"
                }}
                resizeMode="contain"
              />
              <Text
                style={{
                  color: this.state.color_comienzo,
                  textAlign: "center",
                  fontSize: 8,
                  fontWeight: this.state.bold_comienzo
                }}
                // style={{
                //   color: "#1f4b70",
                //   textAlign: "center",
                //   fontSize: 10
                // }}
              >
                En camino a :
              </Text>
            </TouchableOpacity>
            <View
              style={{
                width: "10%",
                height: "100%",
                justifyContent: "center"
              }}
            >
              <Image
                source={require("../../assets/next.png")}
                style={{
                  width: "100%",
                  height: "20%"
                }}
                resizeMode="contain"
              />
            </View>
            <TouchableOpacity
              onPress={this.onclick_dos.bind(this)}
              disabled={this.state.btn_compra}
              style={{
                width: "15%",
                height: "100%"
              }}
            >
              <Image
                source={require("../../assets/cart.png")}
                style={{
                  width: "100%",
                  height: "70%"
                }}
                resizeMode="contain"
              />
              <Text
                style={{
                  color: this.state.color_compra,
                  textAlign: "center",
                  fontSize: 8,
                  fontWeight: this.state.bold_compra
                }}
              >
                Estoy
              </Text>
            </TouchableOpacity>
            <View
              style={{
                width: "10%",
                height: "100%",
                justifyContent: "center"
              }}
            >
              <Image
                source={require("../../assets/next.png")}
                style={{
                  width: "100%",
                  height: "20%"
                }}
                resizeMode="contain"
              />
            </View>
            <TouchableOpacity
              onPress={this.onclick_tres.bind(this)}
              disabled={this.state.btn_encamino}
              style={{
                width: "15%",
                height: "100%"
              }}
            >
              <Image
                source={require("../../assets/boy.png")}
                style={{
                  width: "100%",
                  height: "70%"
                }}
                resizeMode="contain"
              />
              <Text
                style={{
                  color: this.state.color_encamino,
                  textAlign: "center",
                  fontSize: 8,
                  fontWeight: this.state.bold_encamino
                }}
              >
                En camino a :
              </Text>
            </TouchableOpacity>
            <View
              style={{
                width: "10%",
                height: "100%",
                justifyContent: "center"
              }}
            >
              <Image
                source={require("../../assets/next.png")}
                style={{
                  width: "100%",
                  height: "20%"
                }}
                resizeMode="contain"
              />
            </View>
            <TouchableOpacity
              onPress={this.onclick_cuarto.bind(this)}
              disabled={this.state.btn_final}
              style={{
                width: "15%",
                height: "100%"
              }}
              // onPress={() => {
              //   this.props.navigation.navigate("DeliverdScreen");
              // }}
            >
              <Image
                source={require("../../assets/end.png")}
                style={{
                  width: "100%",
                  height: "70%"
                }}
                resizeMode="contain"
              />
              <Text
                style={{
                  color: this.state.color_final,
                  textAlign: "center",
                  fontSize: 8,
                  fontWeight: this.state.bold_final
                }}
              >
                Llege a mi destino
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </Container>
    );
  }
}

export default OrderRequestDetails;
