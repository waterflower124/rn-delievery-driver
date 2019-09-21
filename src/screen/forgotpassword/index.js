

import React from 'react';
import { StatusBar, Image, TouchableOpacity, View, FormLabel, FormInput, FormValidationMessage, TextInput } from 'react-native';
import styles from './styles';
import { Container, Content, Footer, Text } from 'native-base';
import { Button } from 'react-native-elements';
import Toast from 'react-native-simple-toast';

import axios from 'axios';

class ForgotPasswordPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isLoading: true }

        this.loginData = []
    }
    state = {
        username: '',
}
    //https://www.aveoperu.com/Gadeli/Webservice/login?email=n@gmail.com&password=12345&register_id=%20&lat=&lon=
    //       email: 'admin@gmail.com',https://www.aveoperu.com/Gadeli/Webservice/forgot_password?email=kushwaha.naveen21@gmail.com


    loginRequest() {
        if (this.state.username == null || this.state.username == '') {
            Toast.show('please enter valid email', Toast.LONG);
        } else {
            const email = this.state.username;
              axios.get('https://www.aveoperu.com/Gadeli/Webservice/forgot_password?email='+email)
                .then(res => {
                    // this.setState({loginData : res.data.result })
                    if (res.status == 200) {
                        this.props.navigation.navigate('LoginPage')
                        Toast.show("please check your email", Toast.LONG)
                    } else {
                        Toast.show(JSON.stringify(res.data.message), Toast.LONG)

                    }


                })
            //   axios.get('http://technorizen.co.in/omapas/webservices/login', {
            //     params :{
            //       email: 'admin@gmail.com',
            //       password: "admin",
            //       type: '1',
            //       type_lang: 'general'
            //     }

            //  })
            //     .then(function (response) {
            //       Toast.show(JSON.stringify(response.data),Toast.LONG)
            //     })
            //     .catch(function (error) {
            //       Toast.show(JSON.stringify(error),Toast.LONG)

            //     });
            //   Axios.create({
            //     url:'https://www.aveoperu.com/Gadeli/Webservice/login',
            //     method:'POST',
            //     headers:{
            //      'Access-Control-Allow-Origin': '*',
            //      'Access-Control-Allow-Methods': 'POST, GET, PUT, OPTIONS, DELETE',
            //      'Access-Control-Allow-Headers': 'Access-Control-Allow-Methods, Access-Control-Allow-Origin, Origin, Accept, Content-Type',
            //      'Accept': 'application/x-www-form-urlencoded',
            //      'Content-Type':'application/x-www-form-urlencoded'
            //     },
            //     data:formData
            // }).request()
            //  axios.post(LOGIN_URL  ,{
            //       data:formData,
            //  }).then(function (response) {
            //   Toast.show('responseJson '+JSON.stringify(response.data), Toast.LONG);
            // })
            // .catch(function (error) {
            //   console.log(error);
            // });

            // fetch(LOGIN_URL, {
            //   method: 'POST',

            //   body: JSON.stringify({
            //     email: 'drvider@gmail.com',
            //     password: "12345",
            //     register_id: 'test',
            //     lat: '23.45454',
            //     lon: '75.555554',
            //     type:'USER'
            //   }),
            // }).then((response) => response.json()) .then((responseJson) => {
            //   Toast.show('responseJson '+responseJson.data.result, Toast.LONG);

            //      })
            //      .catch((error) => {
            //        console.error(error);
            //      });

            // .then((responseJson) => {
            //   this.setState({
            //     isLoading: false,
            //     dataSource: responseJson,
            //   }, function(){




            // })
            // this.props.navigation.navigate('HomePage')



        }
    };

    //  getMoviesFromApiAsync() {
    //   return fetch('https://facebook.github.io/react-native/movies.json')
    //     .then((response) => response.json())
    //     .then((responseJson) => {
    //       console.error(responseJson);
    //     })
    //     .catch((error) => {
    //       console.error(error);
    //     });
    // }

    render() {
        const { loginData } = this.state
        return (

            <Container style={styles.container}>


                <Content padder>
                    <Image source={require("../../assets/screen_logo.png")} style={{ width: 200, height: 160, alignSelf: 'center', marginTop: 20 }} resizeMode='contain'></Image>


                    <View>
                        <Text style={{ textAlign: 'center', fontSize: 19, marginTop: 20, color: '#000000', fontWeight: 'bold' }}>Forogot Password</Text>

                        <View style={{ marginLeft: 20, marginRight: 20 }}>
                            <TextInput
                                style={{ height: 45, width: "95%", borderColor: "grey", borderWidth: .5, marginTop: 50, alignSelf: 'center', paddingLeft: 10, borderRadius: 5 }}
                                // Adding hint in TextInput using Placeholder option.
                                placeholder="Email/Phone Number"
                                placeholderTextColor='#888888'
                                keyboardType='email-address'
                                returnKeyType='done'
                                onChangeText={(text) => this.setState({ username: text})}
                                //set the value in state.
                                // onChangeText={TextInputValue => this.onEnterText(TextInputValue)}
                                // Making the Under line Transparent.
                                underlineColorAndroid="transparent"
                            />
                        </View>
                        <View style={[{ width: "70%", alignSelf: 'center', marginTop: 30 }]}>

                            <Button
                                onPress={() => this.loginRequest()}

                                title="Forgot"
                                titleStyle={{ color: "white" }}
                                type="clear"
                                containerStyle={{ backgroundColor: "#1f4b70", borderRadius: 5 }}
                            />
                        </View>

                    </View>
                </Content>

             

            </Container>

        )

    };

}

export default ForgotPasswordPage;