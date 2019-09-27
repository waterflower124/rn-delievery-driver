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
import styles from "./styles";
import { Container, Content, Footer, Text } from "native-base";
import { Button, Icon, CheckBox } from "react-native-elements";
import DateTimePicker from "react-native-modal-datetime-picker";
import Toast from "react-native-simple-toast";
import { connect } from "react-redux";
import * as actions from "./action";
import axios from "axios";
import Moment from "moment";
import RNGooglePlaces from "react-native-google-places";
import ProgressDialog from "../../utility/progessdialog";

class RegisterPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isDateTimePickerVisible: false,
      dni: "",
      full_name: "",
      address: "Address",
      department: "",
      province: "",
      district: "",
      email: "",
      phone_number: "",
      password: "",
      license_number: "",
      license_category: "",
      license_date: "",
      txt_date: "License Expiration date",
      isChecked: true,
      isLoading: false
    };
  }

  showDateTimePicker = () => {
    this.setState({ isDateTimePickerVisible: true });
  };

  hideDateTimePicker = () => {
    this.setState({ isDateTimePickerVisible: false });
  };

  handleDatePicked = date => {
    Moment.locale("en");
    var dt = date;
    var mData = Moment(dt)
      .format("DD-MM-YYYY")
      .toString();
    console.log("DATE====================>", mData);
    this.setState({ txt_date: mData });
    this.hideDateTimePicker();
  };

  registerRequest(navigate) {
    console.log("that=======>", this.props);

    if (this.state.dni == null || this.state.dni == "") {
      Toast.show("please enter dni", Toast.LONG);
    } else if (this.state.full_name == null || this.state.full_name == "") {
      Toast.show("please enter full name", Toast.LONG);
    } else if (this.state.address == null || this.state.address == "") {
      Toast.show("please select you addres", Toast.LONG);
    } else if (this.state.email == null || this.state.email == "") {
      Toast.show("please enter email", Toast.LONG);
    } else if (
      this.state.phone_number == null ||
      this.state.phone_number == ""
    ) {
      Toast.show("please enter mobile number", Toast.LONG);
    } else if (this.state.password == null || this.state.password == "") {
      Toast.show("please enter password", Toast.LONG);
    } else if (
      this.state.license_number == null ||
      this.state.license_number == ""
    ) {
      Toast.show("please enter license", Toast.LONG);
    } else if (
      this.state.license_category == null ||
      this.state.license_category == ""
    ) {
      Toast.show("please enter license category", Toast.LONG);
    } else if (this.state.txt_date == null || this.state.txt_date == "") {
      Toast.show("please select license date", Toast.LONG);
    } else {
      this.setState({ isLoading: true });
      fetch("https://aveoperu.com/gadeli11/repartidor_registro.php", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          DNI: this.state.dni,
          Nombres: this.state.full_name,
          email: this.state.email,
          passwords: this.state.password,
          direccion: this.state.address,
          telefono: this.state.phone_number,
          estado: 0
          // departamento: validate.departamento,
          // provincia: validate.provincia,
          // distrito: validate.distrito
        })
      })
        .then(response => response.json())
        .then(responseJson => {
          // Alert.alert(responseJson);
          this.props.navigation.navigate("LoginPage");
          Toast.show("Registro correcto", 200, () => {
            this.props.navigation.navigate("LoginPage");
          });
        })
        .catch(error => {
          console.log(error);
        });

      // this.props.signup(this.state.dni,this.state.full_name,this.state.address,this.state.department,this.state.province,this.state.district,this.state.email,this.state.phone_number,this.state.password,this.state.license_number,this.state.license_category,this.state.txt_date).then(() => {
      //   if(this.props.error){
      //     Toast.show(this.props.error,Toast.LONG)
      //     this.setState({isLoading :false})

      //   }else{
      //     this.setState({isLoading :false})

      //     var userJObject = JSON.parse(this.props.userData)

      //     Toast.show(userJObject.message,Toast.LONG)

      //     navigate('OtpVerification',
      //             {otp:userJObject.result.veri_code,
      //            user:userJObject.result})

      //   }

      // })
    }
  }

  openSearchModal() {
    RNGooglePlaces.openAutocompleteModal()
      .then(place => {
        console.log(place);
        this.setState({ address: place.address.toString() });
        // place represents user's selection from the
        // suggestions and it is a simplified Google Place object.
      })
      .catch(error => console.log(error.message)); // error is a Javascript Error object
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <Container style={styles.container}>
        <Content padder>
          <View>
            <Text
              style={{
                textAlign: "center",
                fontSize: 15,
                marginTop: 20,
                color: "#000000",
                fontWeight: "bold"
              }}
            >
              Registro de Mensajero
            </Text>

            <View style={{ marginLeft: 20, marginRight: 20 }}>
              <TextInput
                style={{
                  height: 45,
                  width: "95%",
                  borderColor: "grey",
                  borderWidth: 0.5,
                  marginTop: 20,
                  alignSelf: "center",
                  paddingLeft: 10,
                  borderRadius: 5
                }}
                // Adding hint in TextInput using Placeholder option.
                placeholder="Dni"
                keyboardType="numeric"
                returnKeyType="next"
                onChangeText={text => this.setState({ dni: text })}
                //set the value in state.
                // onChangeText={TextInputValue => this.onEnterText(TextInputValue)}
                // Making the Under line Transparent.
                underlineColorAndroid="transparent"
              />

              <TextInput
                style={{
                  height: 45,
                  width: "95%",
                  borderColor: "grey",
                  borderWidth: 0.5,
                  marginTop: 5,
                  alignSelf: "center",
                  paddingLeft: 10,
                  borderRadius: 5
                }}
                // Adding hint in TextInput using Placeholder option.
                placeholder="Nombre Completo"
                keyboardType="default"
                returnKeyType="next"
                onChangeText={text => this.setState({ full_name: text })}
                //set the value in state.
                // onChangeText={TextInputValue => this.onEnterText(TextInputValue)}
                // Making the Under line Transparent.
                underlineColorAndroid="transparent"
              />

              <View style={styles.SectionStyle}>
                <Text
                  onPress={() => this.openSearchModal()}
                  style={{ flex: 1, paddingLeft: 10, color: "grey" }}
                  placeholder="Direccion"
                  underlineColorAndroid="transparent"
                >
                  {this.state.address}
                </Text>
                <Image
                  source={require("../../assets/add.png")}
                  style={styles.ImageStyle}
                  resizeMode="contain"
                />
              </View>

              <TextInput
                style={{
                  height: 45,
                  width: "95%",
                  borderColor: "grey",
                  borderWidth: 0.5,
                  marginTop: 5,
                  alignSelf: "center",
                  paddingLeft: 10,
                  borderRadius: 5
                }}
                // Adding hint in TextInput using Placeholder option.
                placeholder="Email"
                keyboardType="email-address"
                returnKeyType="next"
                onChangeText={text => this.setState({ email: text })}
                //set the value in state.
                // onChangeText={TextInputValue => this.onEnterText(TextInputValue)}
                // Making the Under line Transparent.
                underlineColorAndroid="transparent"
              />

              <TextInput
                style={{
                  height: 45,
                  width: "95%",
                  borderColor: "grey",
                  borderWidth: 0.5,
                  marginTop: 5,
                  alignSelf: "center",
                  paddingLeft: 10,
                  borderRadius: 5
                }}
                // Adding hint in TextInput using Placeholder option.
                placeholder="Celular"
                keyboardType="phone-pad"
                returnKeyType="next"
                onChangeText={text => this.setState({ phone_number: text })}
                //set the value in state.
                // onChangeText={TextInputValue => this.onEnterText(TextInputValue)}
                // Making the Under line Transparent.
                underlineColorAndroid="transparent"
              />

              {/*           
 <TextInput
            style={{height:45,width: "95%",borderColor: "grey",borderWidth: .5,marginTop:5,alignSelf:'center',paddingLeft:10,borderRadius:5}}
            // Adding hint in TextInput using Placeholder option.
            placeholder="Verification Code"
            secureTextEntry={true}
            onChangeText={(text) => this.setState({ password:text})}

            returnKeyType='next'
            //set the value in state.
            // onChangeText={TextInputValue => this.onEnterText(TextInputValue)}
            // Making the Under line Transparent.
            underlineColorAndroid="transparent"
          /> */}

              <TextInput
                style={{
                  height: 45,
                  width: "95%",
                  borderColor: "grey",
                  borderWidth: 0.5,
                  marginTop: 5,
                  alignSelf: "center",
                  paddingLeft: 10,
                  borderRadius: 5
                }}
                // Adding hint in TextInput using Placeholder option.
                placeholder="Contraseña"
                secureTextEntry={true}
                onChangeText={text => this.setState({ password: text })}
                returnKeyType="next"
                //set the value in state.
                // onChangeText={TextInputValue => this.onEnterText(TextInputValue)}
                // Making the Under line Transparent.
                underlineColorAndroid="transparent"
              />

              <TextInput
                style={{
                  height: 45,
                  width: "95%",
                  borderColor: "grey",
                  borderWidth: 0.5,
                  marginTop: 5,
                  alignSelf: "center",
                  paddingLeft: 10,
                  borderRadius: 5
                }}
                // Adding hint in TextInput using Placeholder option.
                placeholder="Licencia de conducir"
                returnKeyType="next"
                keyboardType="default"
                onChangeText={text => this.setState({ license_number: text })}
                //set the value in state.
                // onChangeText={TextInputValue => this.onEnterText(TextInputValue)}
                // Making the Under line Transparent.
                underlineColorAndroid="transparent"
              />

              <TextInput
                style={{
                  height: 45,
                  width: "95%",
                  borderColor: "grey",
                  borderWidth: 0.5,
                  marginTop: 5,
                  alignSelf: "center",
                  paddingLeft: 10,
                  borderRadius: 5
                }}
                // Adding hint in TextInput using Placeholder option.
                placeholder="Categoria licencia"
                returnKeyType="next"
                keyboardType="default"
                onChangeText={text => this.setState({ license_category: text })}
                //set the value in state.
                // onChangeText={TextInputValue => this.onEnterText(TextInputValue)}
                // Making the Under line Transparent.
                underlineColorAndroid="transparent"
              />
              <Text
                onPress={this.showDateTimePicker}
                style={{
                  paddingTop: 10,
                  color: "grey",
                  fontSize: 15,
                  height: 45,
                  width: "95%",
                  borderColor: "grey",
                  borderWidth: 0.5,
                  marginTop: 5,
                  alignSelf: "center",
                  paddingLeft: 10,
                  borderRadius: 5
                }}
                // Adding hint in TextInput using Placeholder option.
                placeholder="Fecha vencimiento Lic."
                //set the value in state.
                // onChangeText={TextInputValue => this.onEnterText(TextInputValue)}
                // Making the Under line Transparent.
                underlineColorAndroid="transparent"
              >
                {this.state.txt_date}
              </Text>
            </View>

            <CheckBox
              containerStyle={{ marginLeft: 15, marginTop: 10 }}
              title="Acepto los terminos & condiciones del contrato"
              textStyle={{ color: "#202020", fontSize: 12 }}
              checked={this.state.isChecked}
              onPress={() => navigate("Policy")}
            />

            <View
              style={[
                {
                  width: "100%",
                  alignSelf: "center",
                  marginTop: 25,
                  backgroundColor: "#fff"
                }
              ]}
            >
              <View style={{ flexDirection: "row", alignSelf: "center" }}>
                <Button
                  title="Siguiente"
                  titleStyle={{ color: "white" }}
                  onPress={() => this.registerRequest(navigate)}
                  type="clear"
                  containerStyle={{
                    backgroundColor: "#1F4B70",
                    width: "80%",
                    height: 40
                  }}
                />
              </View>
            </View>

            <TouchableOpacity
              onPress={() => this.props.navigation.navigate("LoginPage")}
            >
              <Text
                style={{ textAlign: "center", marginTop: 10, fontSize: 12 }}
              >
                {" "}
                Ya tengo cuenta aqui ? Ingrese aqui
              </Text>
            </TouchableOpacity>
          </View>
        </Content>

        <DateTimePicker
          isVisible={this.state.isDateTimePickerVisible}
          onConfirm={this.handleDatePicked}
          onCancel={this.hideDateTimePicker}
        />
      </Container>
    );
  }
}
const mapStateToProps = state => ({
  isLoggedIn: state.authSignup.isLoggedIn,
  isLoading: state.authSignup.isLoading,
  userData: state.authSignup.userData,
  error: state.authSignup.error
});
const mapDispatchToProps = dispatch => ({
  signup: (
    dni,
    full_name,
    address,
    department,
    province,
    district,
    email,
    phone_number,
    password,
    license_number,
    license_category,
    txt_date
  ) =>
    dispatch(
      actions.signup({
        dni,
        full_name,
        address,
        department,
        province,
        district,
        email,
        phone_number,
        password,
        license_number,
        license_category,
        txt_date
      })
    )
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterPage);
