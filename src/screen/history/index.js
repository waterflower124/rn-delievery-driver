import React from "react";
import { Container, View, Text, Content } from "native-base";
import { TouchableOpacity } from "react-native";
import { Image } from "react-native-elements";

class OrderHistory extends React.Component {
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
              Order History{" "}
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
          <View style={{ alignSelf: "center", flexDirection: "row" }}>
            <View style={{ flex: 1, alignSelf: "stretch" }}>
              <Text style={{ fontSize: 12 }}>Task</Text>
              <View style={{ flexDirection: "column" }}>
                <View
                  style={{
                    width: "100%",
                    height: "1%",
                    backgroundColor: "grey",
                    marginTop: 5
                  }}
                />
                <Text />
              </View>
            </View>
            <View style={{ flex: 1, alignSelf: "stretch" }}>
              <Text style={{ fontSize: 12 }}>Timer</Text>
              <View style={{ flexDirection: "column" }}>
                <View
                  style={{
                    width: "100%",
                    height: "1%",
                    backgroundColor: "grey",
                    marginTop: 5
                  }}
                />
                <Text />
              </View>
            </View>
            <View style={{ flex: 1, alignSelf: "stretch" }}>
              <Text style={{ fontSize: 12 }}>Tour</Text>
              <View style={{ flexDirection: "column" }}>
                <View
                  style={{
                    width: "100%",
                    height: "1%",
                    backgroundColor: "grey",
                    marginTop: 5
                  }}
                />
                <Text />
              </View>
            </View>
            <View style={{ flex: 1, alignSelf: "stretch" }}>
              <Text style={{ fontSize: 12 }}>Price/Service </Text>
              <View style={{ flexDirection: "column" }}>
                <View
                  style={{
                    width: "100%",
                    height: "1%",
                    backgroundColor: "grey",
                    marginTop: 5
                  }}
                />
                <Text />
              </View>
            </View>
          </View>
          <Text style={{ marginTop: 10, fontSize: 10 }}>
            Messgenger : Luis Torres Lopez______________________{" "}
          </Text>
          <View style={{ alignSelf: "center", flexDirection: "row" }}>
            <View style={{ flex: 1, alignSelf: "stretch" }}>
              {/* <Text style={{fontSize:12}}>Task</Text> */}
              <View style={{ flexDirection: "column" }}>
                {/* <View style={{width:"100%",height:"1%",backgroundColor:"grey",marginTop:5}}></View> */}

                <Text style={{ fontSize: 12, marginTop: 10, padding: 5 }}>
                  Buy
                </Text>
                <Text style={{ fontSize: 12, marginTop: 2, padding: 5 }}>
                  Collect
                </Text>
                <Text style={{ fontSize: 12, marginTop: 2, padding: 5 }}>
                  Send
                </Text>
              </View>
            </View>
            <View style={{ flex: 1, alignSelf: "stretch" }}>
              {/* <Text style={{fontSize:12}}>Timer</Text> */}
              <View style={{ flexDirection: "column" }}>
                {/* <View style={{width:"100%",height:"1%",backgroundColor:"grey",marginTop:5}}></View> */}

                <Text style={{ fontSize: 12, marginTop: 10, padding: 5 }}>
                  12 min
                </Text>
                <Text style={{ fontSize: 12, marginTop: 2, padding: 5 }}>
                  12 min
                </Text>
                <Text style={{ fontSize: 12, marginTop: 2, padding: 5 }}>
                  12 min
                </Text>
              </View>
            </View>
            <View style={{ flex: 1, alignSelf: "stretch" }}>
              {/* <Text style={{fontSize:12}}>Tour</Text> */}
              <View style={{ flexDirection: "column" }}>
                {/* <View style={{width:"100%",height:"1%",backgroundColor:"grey",marginTop:5}}></View> */}

                <Text style={{ fontSize: 12, marginTop: 10, padding: 5 }}>
                  2 km
                </Text>
                <Text style={{ fontSize: 12, marginTop: 2, padding: 5 }}>
                  3 km
                </Text>
                <Text style={{ fontSize: 12, marginTop: 2, padding: 5 }}>
                  4 km
                </Text>
              </View>
            </View>
            <View style={{ flex: 1, alignSelf: "stretch" }}>
              {/* <Text style={{fontSize:12}}>Price/Service </Text> */}
              <View style={{ flexDirection: "column" }}>
                {/* <View style={{width:"100%",height:"1%",backgroundColor:"grey",marginTop:5}}></View> */}

                <Text style={{ fontSize: 12, marginTop: 10, padding: 5 }}>
                  $/4.50
                </Text>
                <Text style={{ fontSize: 12, marginTop: 2, padding: 5 }}>
                  $/4.50
                </Text>
                <Text style={{ fontSize: 12, marginTop: 2, padding: 5 }}>
                  $/4.50
                </Text>
              </View>
            </View>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Image
              source={require("../../assets/line.png")}
              style={{ width: "100%", height: "1%" }}
              resizeMode="stretch"
            />
          </View>
          <Text style={{ marginTop: 10, fontSize: 10 }}>
            Messgenger : Luis Torres Lopez______________________{" "}
          </Text>
          <View style={{ alignSelf: "center", flexDirection: "row" }}>
            <View style={{ flex: 1, alignSelf: "stretch" }}>
              {/* <Text style={{fontSize:12}}>Task</Text> */}
              <View style={{ flexDirection: "column" }}>
                {/* <View style={{width:"100%",height:"1%",backgroundColor:"grey",marginTop:5}}></View> */}

                <Text style={{ fontSize: 12, marginTop: 10, padding: 5 }}>
                  Buy
                </Text>
                <Text style={{ fontSize: 12, marginTop: 2, padding: 5 }}>
                  Collect
                </Text>
                <Text style={{ fontSize: 12, marginTop: 2, padding: 5 }}>
                  Send
                </Text>
              </View>
            </View>
            <View style={{ flex: 1, alignSelf: "stretch" }}>
              {/* <Text style={{fontSize:12}}>Timer</Text> */}
              <View style={{ flexDirection: "column" }}>
                {/* <View style={{width:"100%",height:"1%",backgroundColor:"grey",marginTop:5}}></View> */}

                <Text style={{ fontSize: 12, marginTop: 10, padding: 5 }}>
                  12 min
                </Text>
                <Text style={{ fontSize: 12, marginTop: 2, padding: 5 }}>
                  12 min
                </Text>
                <Text style={{ fontSize: 12, marginTop: 2, padding: 5 }}>
                  12 min
                </Text>
              </View>
            </View>
            <View style={{ flex: 1, alignSelf: "stretch" }}>
              {/* <Text style={{fontSize:12}}>Tour</Text> */}
              <View style={{ flexDirection: "column" }}>
                {/* <View style={{width:"100%",height:"1%",backgroundColor:"grey",marginTop:5}}></View> */}

                <Text style={{ fontSize: 12, marginTop: 10, padding: 5 }}>
                  2 km
                </Text>
                <Text style={{ fontSize: 12, marginTop: 2, padding: 5 }}>
                  3 km
                </Text>
                <Text style={{ fontSize: 12, marginTop: 2, padding: 5 }}>
                  4 km
                </Text>
              </View>
            </View>
            <View style={{ flex: 1, alignSelf: "stretch" }}>
              {/* <Text style={{fontSize:12}}>Price/Service </Text> */}
              <View style={{ flexDirection: "column" }}>
                {/* <View style={{width:"100%",height:"1%",backgroundColor:"grey",marginTop:5}}></View> */}

                <Text style={{ fontSize: 12, marginTop: 10, padding: 5 }}>
                  $/4.50
                </Text>
                <Text style={{ fontSize: 12, marginTop: 2, padding: 5 }}>
                  $/4.50
                </Text>
                <Text style={{ fontSize: 12, marginTop: 2, padding: 5 }}>
                  $/4.50
                </Text>
              </View>
            </View>
          </View>
        </Content>
      </Container>
    );
  }
}

export default OrderHistory;
