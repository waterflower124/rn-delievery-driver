
import React from 'react';
import { StatusBar, Image, TouchableOpacity, View, FormLabel, FormInput, FormValidationMessage, TextInput } from 'react-native';
import { Container, Content, Footer, Text, Card, CardItem, Body } from 'native-base';
import { Button, Icon, CheckBox } from 'react-native-elements';
import { TouchableHighlight } from 'react-native';


class MainPageOrder extends React.Component {

  render() {
    return (

      <Container >
        <View style={{ flexDirection: 'row', width: "100%", height: 57 }}>
          <View style={{ flexDirection: "column", width: "20%" }}>
            <TouchableOpacity onPress={() => { this.props.navigation.toggleDrawer() }} >
              <Image source={require("../../assets/menu.png")} resizeMode='contain' style={{ width: 50, height: 50, padding: 10, marginTop: 10, marginLeft: 10 }} />
            </TouchableOpacity>
          </View>

          <View style={{ width: "80%", flexDirection: "column", marginTop: 20 }}>
            <Text style={{ fontSize: 22, fontWeight: 'bold', color: '#1f4b70' }}> Order </Text>

          </View>
        </View>
        <Content padder>

          <Card style={{ width: "100%" }}>
            <CardItem >
              <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'space-between' }}>
                <View style={{ flexDirection: 'row' }}>
                  <Image source={require("../../assets/pro.png")} style={{ width: 34, height: 34 }} resizeMode='contain'></Image>
                  <Text style={{ fontSize: 12, marginLeft: 10 }}>All Yousef {"\n"}<Text style={{ fontSize: 12 }}>Buy & Send</Text></Text>

                </View>
                <View>
                  <View style={{ flexDirection: 'row', alignSelf: 'flex-end' }}>
                    <Image source={require("../../assets/add.png")} style={{ width: 15, height: 15, padding: 0, margin: 0 }} resizeMode='contain'></Image>
                    <Text style={{ fontSize: 10, color: 'grey', marginLeft: 10 }}>10 km</Text>
                  </View>
                </View>
              </View>
            </CardItem>
            <CardItem>
              <Body>
                <Text style={{ fontSize: 15, fontWeight: 'normal' }}>
                  Services Type:Window cleaning service
                </Text>
                <Text style={{ fontSize: 15, fontWeight: 'normal' }}>
                  Discription Services :What is lorem lpsum ?
                </Text>



                <View style={[{ width: "70%", alignSelf: 'center', marginTop: 15, backgroundColor: "#fff" }]}>

                  <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                    <Button
                      title="Cancel"
                      titleStyle={{ color: "white" }}

                      onPress={() => this.props.navigation.navigate('MainPageOrder')}
                      type="clear"
                      containerStyle={{
                        backgroundColor: "#1F4B70", width: "50%"
                        , height: 40
                      }}
                    />
                    <Button
                      title="Book"
                      titleStyle={{ color: "white" }}
                      onPress={() => this.props.navigation.navigate('MapScreen')}
                      type="clear"
                      containerStyle={{ backgroundColor: "#1F4B70", width: "70%", height: 40, marginLeft: 10 }}
                    />

                  </View>
                </View>

              </Body>
            </CardItem>

          </Card>



          <Card style={{ width: "100%" }}>
            <CardItem >
              <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'space-between' }}>
                <View style={{ flexDirection: 'row' }}>
                  <Image source={require("../../assets/pro.png")} style={{ width: 34, height: 34 }} resizeMode='contain'></Image>
                  <Text style={{ fontSize: 12, marginLeft: 10 }}>All Yousef {"\n"}<Text style={{ fontSize: 12 }}>Buy & Send</Text></Text>

                </View>
                <View>
                  <View style={{ flexDirection: 'row', alignSelf: 'flex-end' }}>
                    <Image source={require("../../assets/add.png")} style={{ width: 15, height: 15, padding: 0, margin: 0 }} resizeMode='contain'></Image>
                    <Text style={{ fontSize: 10, color: 'grey', marginLeft: 10 }}>10 km</Text>
                  </View>
                </View>
              </View>
            </CardItem>
            <CardItem>
              <Body>
                <Text style={{ fontSize: 15, fontWeight: 'normal' }}>
                  Services Type:Window cleaning service
                </Text>
                <Text style={{ fontSize: 15, fontWeight: 'normal' }}>
                  Discription Services :What is lorem lpsum ?
                </Text>



                <View style={[{ width: "70%", alignSelf: 'center', marginTop: 15, backgroundColor: "#fff" }]}>

                  <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
                    <Button
                      title="Cancel"
                      titleStyle={{ color: "white" }}

                      onPress={() => this.props.navigation.navigate('MainPageOrder')}
                      type="clear"
                      containerStyle={{
                        backgroundColor: "#1F4B70", width: "50%"
                        , height: 40
                      }}
                    />
                    <Button
                      title="Book"
                      titleStyle={{ color: "white" }}
                      onPress={() => this.props.navigation.navigate('MapScreen')}
                      type="clear"
                      containerStyle={{ backgroundColor: "#1F4B70", width: "70%", height: 40, marginLeft: 10 }}
                    />

                  </View>
                </View>

              </Body>
            </CardItem>

          </Card>

        </Content>


      </Container>

    )

  };

}

export default MainPageOrder;