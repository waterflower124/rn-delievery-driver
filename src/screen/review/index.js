import React from "react";
import { Container, View, Text, Content } from "native-base";
import { Image, Rating, Button, AirbnbRating } from "react-native-elements";
import { TouchableOpacity, TextInput,FlatList } from "react-native";
//import {styles} from "./styles";
import ProgressDialog from '../../utility/progessdialog';
import AsyncStorage from "@react-native-community/async-storage";
class MyReview extends React.Component {
  //constructor(props) {
  //  super(props); 
  state = {
    dataSource: [],
    usuario_id: "" ,
    puntaje:0,
    total:"0",
    isLoading : true,
  }
  async ObtenerUsuario_id() {
    try {
      const usuario_id = await AsyncStorage.getItem('@gadelidriver:usuario_id');
        //alert(usuario_id)
        return usuario_id;
      }
     catch (error) {
      alert(error)
       console.log("Error al buscar usuario_id");
     }
  };

  Cargar_datos= async () =>{
    this.ObtenerUsuario_id()
    .then(user_id =>{
      this.setState({usuario_id:user_id});
     
        fetch("https://aveoperu.com/gadeli11/review_repartidor.php", {
          method: "POST",
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            repartidor_id:user_id
          })
        })
      .then((response) => response.json())
      .then((responseJson) => {
        if(responseJson== null){
          //alert(responseJson)
        }
        else{
          this.setState({ 
            dataSource:responseJson.review,
            puntaje:responseJson.puntaje,
            total:responseJson.total,
            
          });
        }
        this.setState({ isLoading:false });
      })
      .catch(error => {
        console.log(error);
        });
      }
      )
    }

    renderItem = data => (
            <View
            style={{
              flexDirection: "column",
              marginTop: 20,
              marginLeft: 10,
              marginRight: 10
            }}
          >
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
                  style={{ width: 18, height: 18 }}
                  resizeMode="contain"
                ></Image>
                <View style={{ flexDirection: "column" }}>
                  <Text
                    style={{ fontSize: 12, marginLeft: 10, color: "black" }}
                  >
                    {data.item.cliente}
                  </Text>
                  <Rating
                    type="star"
                   readonly
                   startingValue={parseInt(data.item.puntuacion)}
                   
                    ratingCount={5}
                    imageSize={10}
                    style={{ paddingVertical: 0 }}
                  />
                </View>
              </View>
              <View>
                <View style={{ flexDirection: "row", alignSelf: "flex-end" }}>
                  <Image
                    source={require("../../assets/time.png")}
                    style={{ width: 24, height: 24, padding: 0, margin: 0 }}
                    resizeMode="contain"
                  ></Image>
                  <Text style={{ fontSize: 10, color: "grey", marginLeft: 10 }}>
                    {data.item.fechacrea}
                  </Text>
                </View>
              </View>
            </View>
            <Text style={{ marginTop: 20 }}>
              {data.item.comentario}
            </Text>
            <Image
            source={require("../../assets/line.png")}
            style={{ width: "100%", height: 1, marginTop: 20 }}
          />
          </View>

    );

  componentDidMount() {
        this.Cargar_datos()
    }

  render() {
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
              Mis Comentarios
            </Text>
          </View>
        </View>
        <Content padder>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View style={{ flexDirection: "column" }}>
              <AirbnbRating
                count={5}
                reviews={["1.0", "2.0", "3.0", "4.0", "5.0"]}
                defaultRating={parseInt(this.state.puntaje)}
                readonly
                size={20}
              />
              <View style={{ flexDirection: "row", alignSelf: "center" }}>
                <Image
                  source={require("../../assets/user.png")}
                  style={{ width: 20, height: 20 }}
                />
                <Text style={{ color: "grey", fontSize: 13, paddingLeft: 5 }}>{this.state.total}</Text>
                <Text style={{ marginLeft: 10, color: "grey", fontSize: 13 }}>
                  Total
                </Text>
              </View>
            </View>

          </View>

          <Image
            source={require("../../assets/line.png")}
            style={{ width: "100%", height: 1, marginTop: 20 }}
          />
                <FlatList
                data={this.state.dataSource}
                enableEmptySections={true}
                renderItem={item => this.renderItem(item)}
                keyExtractor={item => item.id.toString()}
                  />    




        </Content>
        <ProgressDialog visible={this.state.isLoading} />
      </Container>
    );
  }
}

export default MyReview;
