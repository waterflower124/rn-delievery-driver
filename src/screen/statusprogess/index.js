import React from 'react';
import { StatusBar, Image, TouchableOpacity, View, FormLabel, FormInput, FormValidationMessage, TextInput } from 'react-native';
import { Container, Content, Footer, Text } from 'native-base';
import { Button, Icon, CheckBox } from 'react-native-elements';
import { TouchableHighlight } from 'react-native';





class StatusProgress extends React.Component {

    render() {
        return (


            <Container style={styles.container}>
                <View style={{ flexDirection: 'row', width: "100%", height: 57 }}>
                    <View style={{ flexDirection: "column", width: "20%" }}>
                        <TouchableOpacity onPress={() => { this.props.navigation.toggleDrawer() }} >
                            <Image source={require("../../assets/menu.png")} resizeMode='contain' style={{ width: 50, height: 50, padding: 10, marginTop: 10, marginLeft: 10 }} />
                        </TouchableOpacity>
                    </View>

                    <View style={{ width: "80%", flexDirection: "column", marginTop: 20 }}>
                        <Text style={{ fontSize: 22, fontWeight: 'bold', color: '#1f4b70' }}> STATUS PROGRESS </Text>

                    </View>
                </View>



                <View style={{ justifyContent: 'center', flexDirection: 'row', width: "100%", height: 50, backgroundColor: '#1f4b70' }}>


                    <View style={{ alignSelf: 'center' }}>

                        <Text style={{ alignSelf: 'center', color: 'white', fontSize: 17 }}> What am i doing now ? </Text>
                    </View>
                </View>
                <Content padder>

                    <View style={{ flexDirection: 'row', alignSelf: 'center', width: "100%", justifyContent: 'center' }}>

                        <Image source={require("../../assets/start.png")} style={{ width: 60, height: 60 }} resizeMode='contain' />


                    </View>


                    <View style={{ flexDirection: 'row', alignSelf: 'center', width: "100%", justifyContent: 'center' }}>

                        <Image source={require("../../assets/arrow.png")} style={{ width: 30, height: 30, alignSelf: 'center' }} resizeMode='contain' />


                    </View>



                    <View style={{ flexDirection: 'row', alignSelf: 'center', width: "100%", justifyContent: 'center' }}>

                        <Image source={require("../../assets/boy.png")} style={{ marginLeft: 75, width: 60, height: 60, alignSelf: 'center' }} resizeMode='contain' />

                        <Text style={{ color: '#1f4b70', alignSelf: 'center', marginLeft: 20 }}>Travling</Text>

                    </View>


                    <View style={{ flexDirection: 'row', alignSelf: 'center', width: "100%", justifyContent: 'center' }}>

                        <Image source={require("../../assets/arrow.png")} style={{ width: 30, height: 30, alignSelf: 'center' }} resizeMode='contain' />

                    </View>


                    <View style={{ flexDirection: 'row', alignSelf: 'center', width: "100%", justifyContent: 'center' }}>
                        <Image source={require("../../assets/cart.png")} style={{ marginLeft: 110, width: 60, height: 60, alignSelf: 'center' }} resizeMode='contain' />

                        <Text style={{ color: '#1f4b70', alignSelf: 'center', marginLeft: 20 }}>Pik up buy gift</Text>


                    </View>


                    <View style={{ flexDirection: 'row', alignSelf: 'center', width: "100%", justifyContent: 'center' }}>

                        <Image source={require("../../assets/arrow.png")} style={{ width: 30, height: 30, alignSelf: 'center' }} resizeMode='contain' />

                    </View>
                    <View style={{ flexDirection: 'row', alignSelf: 'center', width: "100%", justifyContent: 'center' }}>

                        <Image source={require("../../assets/boy.png")} style={{ marginLeft: 75, width: 60, height: 60, alignSelf: 'center' }} resizeMode='contain' />

                        <Text style={{ color: '#1f4b70', alignSelf: 'center', marginLeft: 20 }}>Travling</Text>

                    </View>


                    <View style={{ flexDirection: 'row', alignSelf: 'center', width: "100%", justifyContent: 'center' }}>

                        <Image source={require("../../assets/arrow.png")} style={{ width: 30, height: 30, alignSelf: 'center' }} resizeMode='contain' />

                    </View>

                    <TouchableOpacity onPress={() => { this.props.navigation.navigate("DeliverdScreen") }}>


                    <View style={{ flexDirection: 'row', width: "100%", justifyContent: 'center' }}>
                        <Image source={require("../../assets/end.png")} style={{ marginLeft: 90, width: 60, height: 60, alignSelf: 'center' }} resizeMode='contain' />

                        <Text style={{ color: '#1f4b70', alignSelf: 'center', marginLeft: 20 }}>Delievered</Text>
                

                    </View>
                    </TouchableOpacity>

                    <View style={{ flexDirection: 'row', alignSelf: 'center', width: "100%", justifyContent: 'center' }}>

                        <Image source={require("../../assets/arrow.png")} style={{ width: 30, height: 30, alignSelf: 'center' }} resizeMode='contain' />

                    </View>


                </Content>

            </Container>
        )

    }


}

export default StatusProgress;