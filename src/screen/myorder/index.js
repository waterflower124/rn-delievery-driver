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

class MyOrder extends React.Component {
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
              History{" "}
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
          <Image
            source={require("../../assets/pending.png")}
            style={{ width: "33%", height: 40 }}
            resizeMode="contain"
          />
          <Image
            source={require("../../assets/booking.png")}
            style={{ width: "33%", height: 40 }}
            resizeMode="contain"
          />
          <Image
            source={require("../../assets/completed.png")}
            style={{ width: "33%", height: 40 }}
            resizeMode="contain"
          />
        </View>
        <Content padder>
          {/* <Card> */}
          <Card>
            <CardItem header bordered>
              <View
                style={{
                  flexDirection: "row",
                  flex: 1,
                  justifyContent: "space-between"
                }}
              >
                <View style={{ flexDirection: "row" }}>
                  <Image
                    source={require("../../assets/pro.png")}
                    style={{ width: 24, height: 24 }}
                    resizeMode="contain"
                  />
                  <Text style={{ fontSize: 12, marginLeft: 10 }}>
                    All Yousef {"\n"}
                    <Text style={{ fontSize: 12 }}>Buy & Send</Text>
                  </Text>
                </View>
                <Text style={{ fontSize: 12, alignSelf: "flex-end" }}>
                  Distance :10 km {"\n"}
                  <Text style={{ fontSize: 12, alignSelf: "flex-end" }}>
                    Cash :$10
                  </Text>
                </Text>
              </View>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text style={{ fontSize: 15, fontWeight: "normal" }}>
                  Services Type:Window cleaning service
                </Text>
                <Text style={{ fontSize: 15, fontWeight: "normal" }}>
                  Distance:10 km
                </Text>
                <Text style={{ fontSize: 15, fontWeight: "normal" }}>
                  Payment:Cash $9.00
                </Text>
                <Text style={{ fontSize: 15, fontWeight: "normal" }}>
                  Discription Services :What is lorem lpsum ?
                </Text>
              </Body>
            </CardItem>
          </Card>
          <Card>
            <CardItem header bordered>
              <View
                style={{
                  flexDirection: "row",
                  flex: 1,
                  justifyContent: "space-between"
                }}
              >
                <View style={{ flexDirection: "row" }}>
                  <Image
                    source={require("../../assets/pro.png")}
                    style={{ width: 24, height: 24 }}
                    resizeMode="contain"
                  />
                  <Text style={{ fontSize: 12, marginLeft: 10 }}>
                    All Yousef {"\n"}
                    <Text style={{ fontSize: 12 }}>Buy & Send</Text>
                  </Text>
                </View>
                <Text style={{ fontSize: 12, alignSelf: "flex-end" }}>
                  Distance :10 km {"\n"}
                  <Text style={{ fontSize: 12, alignSelf: "flex-end" }}>
                    Cash :$10
                  </Text>
                </Text>
              </View>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text style={{ fontSize: 15, fontWeight: "normal" }}>
                  Services Type:Window cleaning service
                </Text>
                <Text style={{ fontSize: 15, fontWeight: "normal" }}>
                  Distance:10 km
                </Text>
                <Text style={{ fontSize: 15, fontWeight: "normal" }}>
                  Payment:Cash $9.00
                </Text>
                <Text style={{ fontSize: 15, fontWeight: "normal" }}>
                  Discription Services :What is lorem lpsum ?
                </Text>
              </Body>
            </CardItem>
          </Card>
          {/* </Card> */}
        </Content>
      </Container>
    );
  }
}

export default MyOrder;
