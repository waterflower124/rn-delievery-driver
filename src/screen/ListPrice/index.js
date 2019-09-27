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
class OrderRequest extends React.Component {
  constructor(props) {
    super(props);
    this.state = { refreshing: true, idpedido: "", id_conductor: 0 };
    this.GetData();
  }
  GetData = () => {
    return fetch("https://aveoperu.com/gadeli11/tarifario_listado.php")
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
      <View
        style={{
          height: 0.2,
          width: "90%",
          backgroundColor: "#808080"
        }}
      />
    );
  };
  componentDidMount() {}
  componentWillUnmount() {}
  onPress() {
    this.GetData();
  }
  onRefresh() {
    this.GetData();
  }
  save_pedido_storeage = async idpedido => {
    try {
      await AsyncStorage.setItem("@gadeli:idpedido", idpedido);
    } catch (error) {
      console.log("Error while storing the token");
    }
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
              <Text style={styles.estilotextoTitulo}>Origen</Text>
              <Text style={styles.estilotextoHeader}>{data.item.origen}</Text>
            </View>
            <View style={styles.estiloViewBoxHeader2}>
              <Text style={styles.estilotextoTitulo}>Distrito</Text>
              <Text style={styles.estilotextoHeader}>{data.item.distrito}</Text>
            </View>
            <View style={styles.estiloViewBoxHeader3}>
              <Text style={styles.estilotextoTitulo}>destino</Text>
              <Text style={styles.estilotextoHeader}>{data.item.destino}</Text>
            </View>
          </View>

          <Text style={styles.estilotexto}>
            <Text style={{ color: "#204B71" }}>esperadespues :</Text>
            {data.item.esperadespues}
          </Text>

          <Text style={styles.estilotexto}>
            <Text style={{ color: "#204B71" }}>tarifa : {"\n"}</Text>
            <Text style={{ fontWeight: "bold" }}>{data.item.tarifa}</Text>
          </Text>
          <Text style={styles.estilotexto}>
            <Text style={{ color: "#204B71" }}>espera : {"\n"}</Text>
            {data.item.espera}
          </Text>
        </View>
        <View style={styles.EstiloViewButton}>
          <Button
            title="Aceptar Pedido"
            buttonStyle={styles.EstiloButton}
            icon={<Icon name="account-check" size={20} color="white" />}
            // onPress={() =>
            //   this.onPress_AceptarPedido(data.item.id, this.state.id_conductor)
            // }
          />
        </View>
      </View>
    </View>
  );

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
              Lista de precios
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
