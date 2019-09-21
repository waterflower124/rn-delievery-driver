import React from "react";
import {
  StatusBar,
  Image,
  TouchableOpacity,
  View,
  FormLabel,
  FormInput,
  FormValidationMessage,
  TextInput
} from "react-native";
import { Container, Content, Footer, Text, Input } from "native-base";
import { Button, Icon, CheckBox } from "react-native-elements";
import { TouchableHighlight } from "react-native";

class DriverPaidScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      importe_reembolso: 0.0,
      importe_delivery: 0.0,
      importe_espera: 0.0,
      importe_total: 0.0,
      Nombre_cliente: ""
    };
  }

  render() {
    return (
      <Container>
        <Content padder>
          <View style={{ alignSelf: "center", marginTop: 90 }}>
            <Text
              style={{
                alignSelf: "center",
                color: "#1f4b70",
                textAlign: "center",
                fontSize: 22
              }}
            >
              {" "}
              ¿El cliente ya pagó o pagará aquí?{" "}
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              width: "100%",
              justifyContent: "center",
              marginTop: 40
            }}
          >
            <Button
              onPress={() => this.props.navigation.navigate("FeedBackScreen")}
              title="Ya pago"
              titleStyle={{ color: "white" }}
              type="clear"
              containerStyle={{
                backgroundColor: "#1f4b70",
                borderRadius: 5,
                width: "40%"
              }}
            />
          </View>

          <View
            style={{
              flexDirection: "row",
              width: "100%",
              justifyContent: "center",
              marginTop: 20
            }}
          >
            <Button
              onPress={() => this.props.navigation.navigate("SummaryPage")}
              title="Pagará por aqui"
              titleStyle={{ color: "white" }}
              type="clear"
              containerStyle={{
                backgroundColor: "#1f4b70",
                borderRadius: 5,
                width: "40%"
              }}
            />
          </View>
        </Content>
      </Container>
    );
  }
}

export default DriverPaidScreen;
