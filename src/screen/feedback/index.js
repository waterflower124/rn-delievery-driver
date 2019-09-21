import React from "react";
import { Container, View, Text, Content } from "native-base";
import { Image, Rating, Button } from "react-native-elements";
import { TouchableOpacity, TextInput } from "react-native";

import styles from "./styles";

class FeedBackScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //defauilt value of the date time
      date: "",
      importe_total: 0
    };
  }
  componentDidMount() {
    var that = this;
    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year
    var hours = new Date().getHours(); //Current Hours
    var min = new Date().getMinutes(); //Current Minutes
    var sec = new Date().getSeconds(); //Current Seconds

    that.setState({
      //Setting the value of the date time
      date:
        date + "/" + month + "/" + year + " " + hours + ":" + min + ":" + sec
    });
  }

  render() {
    const { params } = this.props.navigation.state;
    return (
      <Container>
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
              style={{ fontSize: 18, fontWeight: "bold", color: "#1f4b70" }}
            >
              {" "}
              ¿Que le parecio el servicio?{" "}
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
          <View style={{ alignSelf: "center", padding: 10 }}>
            <Text
              style={{ fontSize: 19, fontWeight: "bold", alignSelf: "center" }}
            >
              USTED A PAGADO{" "}
            </Text>
          </View>
          <View style={{ alignSelf: "center", padding: 10 }}>
            <Text
              style={{
                fontSize: 14,
                fontWeight: "normal",
                alignSelf: "center"
              }}
            >
              hoy {this.state.date}
            </Text>
          </View>
          <View style={{ alignSelf: "center", padding: 10 }}>
            <Text
              style={{ fontSize: 18, fontWeight: "bold", alignSelf: "center" }}
            >
              S/ {params.importe_total}
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 20
            }}
          >
            <Image
              source={require("../../assets/line.png")}
              style={{ width: "45%", height: "5%", alignSelf: "flex-start" }}
            />
            <Image
              source={require("../../assets/01.png")}
              style={{ width: 50, height: 50, alignSelf: "center" }}
            />
            <Image
              source={require("../../assets/line.png")}
              style={{ width: "45%", height: "5%", alignSelf: "flex-end" }}
            />
          </View>

          <View style={{ alignSelf: "center", padding: 10 }}>
            <Text
              style={{ fontSize: 18, fontWeight: "bold", alignSelf: "center" }}
            >
              ¿Como le fue en su servicio ?
            </Text>
          </View>
          <View style={{ alignSelf: "center", padding: 10 }}>
            <Rating
              type="custom"
              ratingImage={require("../../assets/star.png")}
              ratingCount={5}
              imageSize={30}
              style={{ paddingVertical: 0 }}
            />
          </View>

          <View style={styles.textAreaContainer}>
            <TextInput
              style={styles.textArea}
              underlineColorAndroid="transparent"
              placeholder="Puede ingresar algun comentario"
              placeholderTextColor="grey"
              numberOfLines={10}
              multiline={true}
            />
          </View>

          <View style={[{ width: "70%", alignSelf: "center", marginTop: 30 }]}>
            <Button
              onPress={() => this.props.navigation.navigate("OrderRequest")}
              title="Enviar"
              titleStyle={{ color: "white" }}
              type="clear"
              containerStyle={{ backgroundColor: "#1f4b70", borderRadius: 5 }}
            />
          </View>
        </Content>
      </Container>
    );
  }
}

export default FeedBackScreen;
