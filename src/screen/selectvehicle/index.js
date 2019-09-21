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
import axios from "axios";
import { FlatList } from "react-native-gesture-handler";

class SelectVehicle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: ""
    };
  }

  state = {
    bikes: [
      {
        key: "Bike",
        icon: require("../../assets/bike_c.png"),
        selected: false,
        id: "1"
      },
      {
        key: "MotorCycle",
        icon: require("../../assets/motor.png"),
        selected: false,
        id: "2"
      },
      {
        key: "Cycle",
        icon: require("../../assets/car.png"),
        selected: false,
        id: "3"
      }
    ],
    id: "",
    name: ""
  };

  render() {
    const { navigate } = this.props.navigation;
    const user = this.props.navigation.state.params.user;

    return (
      <Container style={{ marginTop: 30 }}>
        <View style={{ flexDirection: "row", width: "100%", height: 57 }}>
          <View style={{ flexDirection: "column", width: "20%" }}>
            <TouchableOpacity
              onPress={() => {
                navigate.goBack(null);
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
              Select Vehicle{" "}
            </Text>
          </View>
        </View>
        {/* <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:10}}>
 <Image source={require("../../assets/pending.png")} style={{width:"33%",height:40}} resizeMode='contain'></Image>
 <Image source={require("../../assets/booking.png")} style={{width:"33%",height:40}} resizeMode='contain'></Image>
 <Image source={require("../../assets/completed.png")} style={{width:"33%",height:40}} resizeMode='contain'></Image>

</View> */}
        <Content padder>
          {/* <Card> */}

          <FlatList
            data={[
              {
                key: "Bike",
                icon: require("../../assets/bike_c.png"),
                selected: false,
                id: "1"
              },
              {
                key: "MotorCycle",
                icon: require("../../assets/motor.png"),
                selected: false,
                id: "2"
              },
              {
                key: "Cycle",
                icon: require("../../assets/car.png"),
                selected: false,
                id: "3"
              }
            ]}
            renderItem={({ item }) => (
              <TouchableOpacity
                key={item.id}
                onPress={() => this.setState({ id: item.id })}
              >
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
                          source={item.icon}
                          style={{ width: 32, height: 32 }}
                          resizeMode="contain"
                        />
                        <Text
                          style={{
                            fontSize: 15,
                            marginLeft: 10,
                            marginTop: 10
                          }}
                        >
                          {item.key}
                        </Text>
                      </View>
                      <View>
                        {item.id == this.state.id ? (
                          <Image
                            source={require("../../assets/g_select.png")}
                            style={{
                              width: 24,
                              height: 24,
                              alignSelf: "flex-end",
                              padding: 0,
                              margin: 0
                            }}
                            resizeMode="contain"
                          />
                        ) : (
                          <View />
                        )}
                      </View>
                    </View>
                  </CardItem>
                </Card>
              </TouchableOpacity>
            )}
          />
        </Content>

        <View
          style={[
            {
              width: "80%",
              alignSelf: "center",
              marginTop: 20,
              marginBottom: 30
            }
          ]}
        >
          <Button
            title="Select"
            titleStyle={{ color: "white" }}
            type="clear"
            onPress={() => {
              this.state.id == "1"
                ? navigate("BikePage", {
                    user: user
                  })
                : this.state.id == "2"
                ? navigate("MotorCyclePage", {
                    user: user
                  })
                : navigate("BikePage", {
                    user: user
                  });
            }}
            containerStyle={{ backgroundColor: "#1F4B70", borderRadius: 5 }}
          />
        </View>
      </Container>
    );
  }
}

export default SelectVehicle;
