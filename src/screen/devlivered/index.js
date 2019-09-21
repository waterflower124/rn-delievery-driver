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
  Alert
} from "react-native";
import { Container, Content, Footer, Text, Input } from "native-base";
import { Button, Icon, CheckBox } from "react-native-elements";
import { TouchableHighlight } from "react-native";
import Dialog, {
  DialogTitle,
  DialogContent,
  DialogFooter,
  DialogButton,
  SlideAnimation,
  ScaleAnimation
} from "react-native-popup-dialog";

class DeliverdScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dialogVisible: false,
      importe_reembolso: 0.0,
      importe_delivery: 0.0,
      importe_espera: 0.0,
      importe_total: 0.0,
      Nombre_cliente: "",
      EsConforme: false,
      defaultAnimationDialog: false,
      scaleAnimationDialog: false,
      slideAnimationDialog: false
    };
  }

  handleReembolsoChange = importe_reembolso => {
    this.setState({ importe_reembolso });
  };
  handleDeliveryChange = importe_delivery => {
    this.setState({ importe_delivery });
  };
  handleEsperaChange = importe_espera => {
    this.setState({ importe_espera });
  };
  enviar() {
    this.setState({
      defaultAnimationDialog: true
    });
  }
  go_summaryscreen() {
    this.setState({
      defaultAnimationDialog: false
    });
    this.props.navigation.navigate("SummaryPage", {
      importe_reembolso: this.state.importe_reembolso,
      importe_delivery: this.state.importe_delivery,
      importe_espera: this.state.importe_espera,
      Nombre_cliente: this.props.navigation.state.params.Nombre_cliente,
      
    });
    let idpe = this.props.navigation.state.params.idpedido;
    this.actulizar_importes(
      idpe,
      this.state.importe_reembolso,
      this.state.importe_delivery,
      this.state.importe_espera,
      1,
      parseFloat(this.state.importe_reembolso) +
        parseFloat(this.state.importe_delivery) +
        parseFloat(this.state.importe_espera)
    );
  }
  actulizar_importes = (
    idpedido,
    reembolso,
    precioenvio,
    precioespera,
    preciocomision,
    preciototal
  ) => {
    if (idpedido !== "") {
      fetch("https://aveoperu.com/gadeli11/pedido_precios.php", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          pedido_id: idpedido,
          reembolso: reembolso,
          precioenvio: precioenvio,
          precioespera: precioespera,
          preciocomision: preciocomision,
          preciototal: preciototal
        })
      });
    }
  };

  render() {
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
              Liquidación del General
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
          <View style={{ alignSelf: "center", marginTop: 50 }}>
            <Text
              style={{
                alignSelf: "center",
                color: "#1f4b70",
                textAlign: "center"
              }}
            >
              ¿Tiene gastos para reembolsar?{" "}
            </Text>
          </View>
          <View style={{ alignSelf: "center", marginTop: 20 }}>
            <Text
              style={{
                alignSelf: "center",
                color: "#1f4b70",
                textAlign: "center"
              }}
            >
              Ingrese su reembolso
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignSelf: "center",
              width: "40%",
              marginTop: 10
            }}
          >
            <View style={{ width: "20%", justifyContent: "center" }}>
              <Text>S/</Text>
            </View>
            <View style={{ width: "80%", justifyContent: "center" }}>
              <TextInput
                style={{
                  height: 45,
                  width: "100%",
                  borderColor: "grey",
                  borderWidth: 0.5,
                  marginTop: 10,
                  alignSelf: "center",
                  paddingLeft: 10,
                  borderRadius: 5,
                  textAlign: "right"
                }}
                placeholder="0.00"
                onChangeText={this.handleReembolsoChange}
                placeholderTextColor="#888888"
                underlineColorAndroid="transparent"
                keyboardType={"numeric"}
              />
            </View>
          </View>
          <Text
            style={{
              alignSelf: "center",
              color: "#1f4b70",
              textAlign: "center"
            }}
          >
            Servicio del Delivery
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignSelf: "center",
              width: "40%",
              marginTop: 10
            }}
          >
            <View style={{ width: "20%", justifyContent: "center" }}>
              <Text>S/</Text>
            </View>
            <View style={{ width: "80%", justifyContent: "center" }}>
              <TextInput
                style={{
                  height: 45,
                  width: "100%",
                  borderColor: "grey",
                  borderWidth: 0.5,
                  marginTop: 10,
                  alignSelf: "center",
                  paddingLeft: 10,
                  borderRadius: 5,
                  textAlign: "right"
                }}
                placeholder="0.00"
                onChangeText={this.handleDeliveryChange}
                placeholderTextColor="#888888"
                underlineColorAndroid="transparent"
                keyboardType={"numeric"}
              />
            </View>
          </View>
          <Text
            style={{
              alignSelf: "center",
              color: "#1f4b70",
              textAlign: "center"
            }}
          >
            Servicios por Tiempo de Espera
          </Text>
          <View
            style={{
              flexDirection: "row",
              alignSelf: "center",
              width: "40%",
              marginTop: 10
            }}
          >
            <View style={{ width: "20%", justifyContent: "center" }}>
              <Text>S/</Text>
            </View>
            <View style={{ width: "80%", justifyContent: "center" }}>
              <TextInput
                style={{
                  height: 45,
                  width: "100%",
                  borderColor: "grey",
                  borderWidth: 0.5,
                  marginTop: 10,
                  alignSelf: "center",
                  paddingLeft: 10,
                  borderRadius: 5,
                  textAlign: "right"
                }}
                placeholder="0.00"
                onChangeText={this.handleEsperaChange}
                placeholderTextColor="#888888"
                underlineColorAndroid="transparent"
                keyboardType={"numeric"}
              />
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              width: "100%",
              justifyContent: "center",
              marginTop: 80
            }}
          >
            <Button
              onPress={() => this.enviar()}
              title="Siguiente"
              titleStyle={{ color: "white" }}
              type="clear"
              containerStyle={{
                backgroundColor: "#1f4b70",
                borderRadius: 5,
                width: "100%"
              }}
            />
            {/* <Button
              title="Default Animation Dialog"
              onPress={() => {
                this.setState({
                  defaultAnimationDialog: true
                });
              }}
            /> */}
          </View>

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
                title="Confirmar si desea guardar los datos,¿GUARDAR?"
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
                  text="Cancelar"
                  bordered
                  onPress={() => {
                    this.setState({
                      defaultAnimationDialog: false,
                      EsConforme: false
                    });
                  }}
                  key="button-1"
                />
                <DialogButton
                  text="Aceptar"
                  bordered
                  onPress={() => {
                    this.go_summaryscreen();
                  }}
                  key="button-2"
                />
              </DialogFooter>
            }
          >
            <DialogContent
              style={{
                backgroundColor: "#F7F7F8"
              }}
            >
              <Text>
                Si presiona (OK) ya no se podran modificar los datos{"\n"}
                ¿Confirmar que son los correctos?{"\n"}
                Reembolos S/ {this.state.importe_reembolso} {"\n"}
                Deliver S/ {this.state.importe_delivery} {"\n"}
                Espera S/ {this.state.importe_espera} {"\n"}
              </Text>
            </DialogContent>
          </Dialog>
        </Content>
      </Container>
    );
  }
}

export default DeliverdScreen;
