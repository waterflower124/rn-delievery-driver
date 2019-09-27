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
  ActivityIndicator,
  FlatList,
  Text,
  Alert,
  RefreshControl,
  ToastAndroid
} from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import { Button } from "react-native-elements";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

// console.disableYellowBox = true;
//var SoundPlayer = require("react-native-sound");
import SoundPlayer from "react-native-sound";
var song = null;
//import Sound from "react-native-sound";
class OrderRequest extends React.Component {
  constructor(props) {
    super(props);
    this.state = { refreshing: true, idpedido: "", id_conductor: 0 };
    this.GetData();
  }
  GetData = () => {
    return fetch("https://aveoperu.com/gadeli11/pedido_pendientes.php")
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          refreshing: false,
          dataSource: responseJson
        });
      })
      .catch(error => {
        console.log(error);
      });
  };
  ListViewItemSeparator = () => {
    return (
      //returning the listview item saparator view
      <View
        style={{
          height: 0.2,
          width: "90%",
          backgroundColor: "#808080"
        }}
      />
    );
  };
  componentDidMount() {
    console.log('componentDidMount','OrderRequest' )
    this.Get_DatosConductor()
      .then(val => {
        if (!(val.token == undefined || val.token == "")) {
          this.setState({ id_conductor: val.id });
        } else {
          console.log("Datos vacios");
        }
      })
      .catch(error => {
        console.log("seseion error", error);
      });

    this.intervalId = setInterval(() => this.onRefresh(), 5000);
    this.onRefresh(); // also load one immediately
  }
  componentWillUnmount() {
    clearInterval(this.intervalId);
  }
  onPress() {
    //this.setState({ dataSource: [] });
    this.GetData();
  }
  onRefresh() {
    this.playALerta();
    //this.setState({ dataSource: [] });
    this.GetData();
    // Alert.alert("Audios");
  }

  save_pedido_storeage = async idpedido => {
    try {
      await AsyncStorage.setItem("@gadeli:idpedido", idpedido);
    } catch (error) {
      console.log("Error while storing the token");
    }
  };

  async Get_DatosConductor() {
    try {
      let conductor = await AsyncStorage.getItem("@gadelidriver:conductor");
      let conductor_item = JSON.parse(conductor);
      if (!(conductor_item.token == "" || conductor_item.token == undefined)) {
        //alert(conductor_item.token)
        return conductor_item;
      }
    } catch (error) {
      console.log("Error while storing the token");
    }
  }

  onPress_AceptarPedido = (idpedido, idconductor) => {
    //alert("pedido " + idpedido + "=>" + idconductor);

    fetch("https://aveoperu.com/gadeli11/pedido_escojer.php", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        pedido_id: idpedido,
        Conductor_id: idconductor
      })
    })
      .then(response => response.json())
      .then(responseJson => {
        console.log(responseJson);
        this.save_pedido_storeage(idpedido);
        this.props.navigation.navigate("OrderRequestDetails", {
          idpedido: idpedido,
          idconductor: idconductor,
          otherParam: "anything you want here"
        });
      })
      .catch(error => {
        console.log(error);
      });

    this.setState({ dataSource: [] });
    this.GetData();
  };

  renderItem = data => (
    <View style={styles.EstiloColumnas}>
      <View style={styles.styleViewInformation}>
        <View style={styles.list}>
          <View
            style={{
              flexDirection: "row",
              borderBottomWidth: 1,
              borderTopWidth: 1,
              borderLeftWidth: 1,
              borderRightWidth: 1,
              borderColor: "gray",
              borderwidth: 1,
              marginBottom: 2
            }}
          >
            <View style={styles.estiloViewBoxHeader1}>
              <Text style={styles.estilotextoTitulo}>Pedido</Text>
              <Text style={styles.estilotextoHeader}>
                {data.item.tipopedido}
              </Text>
            </View>
            <View style={styles.estiloViewBoxHeader2}>
              <Text style={styles.estilotextoTitulo}>Unidad</Text>
              <Text style={styles.estilotextoHeader}>
                {data.item.tipo_vehiculo}
              </Text>
            </View>
            <View style={styles.estiloViewBoxHeader3}>
              <Text style={styles.estilotextoTitulo}>Pagar con</Text>
              <Text style={styles.estilotextoHeader}>
                {data.item.precioreferencia}
              </Text>
            </View>
          </View>

          <Text style={styles.estilotexto}>
            <Text style={{ color: "#204B71" }}>Cliente :</Text>
            {data.item.Nombre_usuario}
          </Text>

          <Text style={styles.estilotexto}>
            <Text style={{ color: "#204B71" }}>Lugar de Compra : {"\n"}</Text>
            <Text style={{ fontWeight: "bold" }}>
              {data.item.direccion_recojo}
            </Text>
          </Text>
          <Text style={styles.estilotexto}>
            <Text style={{ color: "#204B71" }}>Lugar de entrega : {"\n"}</Text>
            {data.item.direccion_envio}
          </Text>
          <Text style={styles.estilotexto}>
            <Text style={{ color: "#204B71" }}>Descripcion : </Text>
            {data.item.descripcion}{" "}
          </Text>
        </View>
        <View style={styles.EstiloViewButton}>
          <Button
            title="Aceptar Pedido"
            buttonStyle={styles.EstiloButton}
            icon={<Icon name="account-check" size={20} color="white" />}
            onPress={() =>
              this.onPress_AceptarPedido(data.item.id, this.state.id_conductor)
            }
          />
        </View>
      </View>
    </View>
  );

  playALerta = async () => {
    let record = this.state.dataSource;
    // if (record != null) {
    if (this.state.dataSource.length != 0) {
      let song = new SoundPlayer(
        "https://aveoperu.com/gadeli11/sound/bipbip.mp3",
        SoundPlayer.MAIN_BUNDLE,
        error => {
          if (error)
            ToastAndroid.show(
              "Error when init SoundPlayer :(((",
              ToastAndroid.SHORT
            );
          else {
            if (song != null) {
              song.play(success => {
                if (!success)
                  ToastAndroid.show(
                    "Error when play SoundPlayer :(((",
                    ToastAndroid.SHORT
                  );
              });
            }
          }
        }
      );
      //  }
    }
  };

  render() {
    if (this.state.refreshing) {
      return (
        <View style={{ flex: 1, paddingTop: 20 }}>
          <ActivityIndicator />
        </View>
      );
    }
    return (
      <View style={styles.MainContainer}>
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
              style={{ fontSize: 18, fontWeight: "bold", color: "#1f4b70" }}
            >
              Solicitud de Pedidos
            </Text>
          </View>
        </View>
        <View
          style={{
            width: "100%",
            height: 1.5,
            backgroundColor: "grey",
            marginTop: 10
          }}
        />
        <FlatList
          data={this.state.dataSource}
          // ItemSeparatorComponent={this.ListViewItemSeparator}
          enableEmptySections={true}
          renderItem={item => this.renderItem(item)}
          keyExtractor={item => item.id.toString()}
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this.onRefresh.bind(this)}
            />
          }
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: 10,
    marginLeft: 20,
    marginRight: 20
  },
  list: {
    paddingVertical: 4,
    margin: 0,
    backgroundColor: "#fff"
  },
  EstiloColumnas: {
    flex: 1,
    flexDirection: "row"
  },
  styleViewInformation: {
    width: "100%",
    marginRight: 0.5
    //backgroundColor: "green"
  },
  estiloViewButton: {
    flex: 1,
    //   alignItems: "center",
    justifyContent: "center",
    width: "80%"
    //backgroundColor: "orange"
  },
  EstiloButton: {
    backgroundColor: "#204B71",
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 30,
    paddingLeft: 0,
    width: "100%"
  },
  buttonLoginContainer: {
    backgroundColor: "#204B71",
    marginTop: 10,
    marginBottom: 10,
    marginLeft: 30,
    marginRight: 30
  },
  estilotexto: {
    fontSize: 18,
    color: "black"
  },
  estilotextoHeader: {
    fontSize: 18,
    color: "orange"
  },
  estilotextoTitulo: {
    fontSize: 18,
    color: "#204B71"
  },
  estiloViewBoxHeader1: {
    justifyContent: "center",
    alignItems: "center",
    padding: 0,
    flex: 1.5,
    //borderBottomWidth: 1,
    //borderTopWidth: 1,
    // borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: "gray"
    //borderwidth: 1
  },
  estiloViewBoxHeader2: {
    justifyContent: "center",
    alignItems: "center",
    padding: 0,
    flex: 1.5,
    //borderBottomWidth: 1,
    //borderTopWidth: 1,
    // borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: "gray"
    //borderwidth: 1
  },
  estiloViewBoxHeader3: {
    justifyContent: "center",
    alignItems: "center",
    padding: 0,
    //borderBottomWidth: 1,
    //borderTopWidth: 1,
    //   borderLeftWidth: 1,
    // borderRightWidth: 1,
    borderColor: "gray"
    //borderwidth: 1
  }
});

export default OrderRequest;
