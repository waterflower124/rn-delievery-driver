import React from "react";
import { Container, View, Text, Content, Footer } from "native-base";
import { Image, Rating, Button } from "react-native-elements";
import { Platform, TouchableOpacity, StyleSheet } from "react-native";
import MapView, { Polyline, Marker, AnimatedRegion } from "react-native-maps";
import call from "react-native-phone-call";

const img_vehiculo =["",require("../../assets/02.png"), require("../../assets/01.png"), require("../../assets/03.png")];

class MapScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: 37.78825,
      longitude: -122.4324,
      routeCoordinates: [],
      distanceTravelled: 0,
      prevLatLng: {},
      coordinate: new AnimatedRegion({
        latitude: 37.78825,
        longitude: -122.4324
      }),
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
    };
  }
  getInitialState() {
    return {
      region: {
        latitude: -18.0095704,
        longitude: -70.2475725,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      }
    };
  }
  async componentDidMount() {
    this.get_pedido_storeage();
    try {
      const value = await AsyncStorage.getItem("@gadeli:idpedido");
      if (!(value == null || value == "" || value == undefined)) {
        this.setState({ id: value, isLoading: true });
        
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
                isLoading: false
              });
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

  onRegionChange(region) {
    this.setState({ region });
  }
  PhoneCall ()  {
    //handler to make a call
    let phone = this.state.telefono;
    if (phone == "" || phone == null ) {
      alert("No tiene numero telefono");
    } else {
      const args = {
        number: phone,
        prompt: false
      };
      call(args).catch(console.error);
    }
  };
  getMapRegion = () => ({
    latitude: this.state.latitude,
    longitude: this.state.longitude,
    latitudeDelta: 37.78825,
    longitudeDelta: -122.4324
  });
  render() {
    return (
      <Container>
        <MapView
          style={styles.map}
          followsUserLocation
          zoomControlEnabled
          showsTraffic
          loadingEnabled
          initialRegion={{
            latitude: -18.0095704,
            longitude: -70.2475725,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }}
          showsUserLocation={false}
          followUserLocation={false}
          zoomEnabled={true}
          //customMapStyle={mapStyle}
          region={this.state.region}
          onRegionChange={this.onRegionChange}
        >
          <Marker
            draggable
            coordinate={{
              latitude: -18.0095704,
              longitude: -70.2475725
            }}
            onDragEnd={e => alert(JSON.stringify(e.nativeEvent.coordinate))}
            title={"Test Marker"}
            description={"This is a description of the marker"}
          />
        </MapView>

        <View style={{ flexDirection: "row", width: "100%", height: 57 }}>
          <View style={{ flexDirection: "column", width: "20%" }}>
            <TouchableOpacity
              onPress={() => this.props.navigation.goBack(null)}
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
              En camino{" "}
            </Text>
          </View>
        </View>
        <Content padder></Content>
        <Footer style={{ backgroundColor: "white", height: 157 }}>
          <View style={{ width: "100%", height: 157 }}>
            <View
              style={{
                flexDirection: "row",
                alignSelf: "center",
                marginTop: 10
              }}
            >
              <Text style={{ alignSelf: "center", fontSize: 10 }}>
                Mi ubicación
              </Text>
            </View>
            <View style={{ flexDirection: "row", alignSelf: "center" }}>
              <Image
                source={require("../../assets/progrss_two.png")}
                style={{ width: 100, height: 10, marginTop: 10 }}
                resizeMode="contain"
              />
            </View>
            <View style={{ flexDirection: "row", alignSelf: "center" }}>
              <Text style={{ alignSelf: "center", fontSize: 8 }}>start</Text>
            </View>

            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                marginLeft: 20,
                marginRight: 20,
                marginBottom: 10
              }}
            >
              <View style={{ flexDirection: "row" }}>
                <Image
                  source={require("../../assets/pro.png")}
                  style={{ width: 24, height: 24 }}
                  resizeMode="contain"
                ></Image>

                <View
                  style={{ flexDirection: "column", padding: 0, margin: 0 }}
                >
                  <Text
                    style={{ fontSize: 12, marginLeft: 10, color: "black" }}
                  >
                    {this.state.nombre}
                  </Text>
                  <View style={{ flexDirection: "row", marginLeft: 10 }}>
                    <Rating
                      type="star"
                      readonly
                      ratingCount={5}
                      imageSize={10}
                      style={{ paddingVertical: 0 }}
                      ratingBackgroundColor={"white"}
                    />
                  </View>
                  <View style={{ flexDirection: "row", marginLeft: 10 }}>
                    <Image
                      source={require("../../assets/01.png")}
                      style={{ width: 24, height: 24 }}
                    />
                    <Text
                      style={{ fontSize: 12, marginLeft: 10, color: "#54748f" }}
                    >
                     {""}
                    </Text>
                  </View>
                </View>

                <View></View>
              </View>
              <View>
                {/* */}
                <Text style={{ fontSize: 10, color: "grey" }}>Moto Honda</Text>

                <View style={{ flexDirection: "row" }}>
                  <Text style={{ fontSize: 10, color: "grey" }}>Chat</Text>

                  <Text style={{ fontSize: 10, color: "grey", marginLeft: 10 }}>
                    Codigo Vehiculo
                  </Text>
                </View>
                <View style={{ flexDirection: "row", marginTop: 5 }}>
                  <TouchableOpacity onPress={() => this.PhoneCall()}>
                  <Image
                    source={require("../../assets/call.png")}
                    style={{
                      width: 30,
                      height: 30,
                      marginLeft: 5,
                      alignSelf: "flex-end",
                      padding: 5,
                      margin: 0
                    }}
                    resizeMode="contain"
                  ></Image>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={[{ width: "100%", alignSelf: "center" }]}>
              {/* <Button
                onPress={() => this.props.navigation.navigate("FeedBackScreen")}
                title="Delivery Start"
                titleStyle={{
                  color: "white",
                  fontWeight: "normal",
                  fontSize: 17
                }}
                type="clear"
                containerStyle={{ backgroundColor: "#1f4b70" }}
              /> */}
            </View>
          </View>
        </Footer>
      </Container>
    );
  }
}

export default MapScreen;
const styles = StyleSheet.create({
  container: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "flex-end"
  },
  map: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  }
});
