import React from "react";
import { Container, View, Text, Content, Footer } from "native-base";
import { Image, Button } from "react-native-elements";

import { TouchableOpacity } from "react-native";

class PolicyScreen extends React.Component {
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
              style={{ fontSize: 22, fontWeight: "bold", color: "#1f4b70" }}
            >
              {" "}
              Terms & Condition{" "}
            </Text>
          </View>
        </View>

        <Content padder>
          <Text>
            CONDICIONES GENERALES DE USO Y CONTRATACIÓN Las presentes
            condiciones generales de uso e información legal (en adelante,
            Condiciones Generales) se aplican al sitio web de GADELI DELIVERY
            APP), cuyo dominio es www.gadeli.com.pe y a la correspondiente
            aplicación móvil, así como a todos sus sitios relacionados o
            vinculados desde www.gadeli.com.pe por Gadeli Delivery, así como a
            sus asociados (en adelante y de forma conjunta, el «sitio»). El
            sitio es propiedad de Gadeli Delivery. Al utilizar el sitio,
            muestras tu conformidad con las presentes condiciones de uso. Si no
            estás de acuerdo, te rogamos te abstengas de utilizarlo. A través de
            las presentes Condiciones Generales, Gadeli Delivery pone a
            disposición de los usuarios (en adelante Usuario o Usuarios) el
            sitio web y la aplicación móvil Gadeli (en adelante denominadas
            conjuntamente, la Plataforma). En cumplimiento de lo establecido en
            la normativa reguladora, se exponen los siguientes datos
            identificativos del titular del sitio: • Denominación social:
            CORPORACION GADELI • Domicilio social: Asociación Ramón Copaja Mz. D
            Lt. 14. Alto de la Alianza-Tacna-Tacna • Datos de inscripción en el
            Registro Mercantil: Nro de TÍTULO 2007-00000562, TOMO DIARIO 2067,
            Con numero de PARTIDA 11031391 • Formulario de Contacto:
            contacto@gadeli.com.pe 1. Objeto GADELI DELIVERY es un servicio
            tecnológico, cuya actividad principal es el desarrollo y gestión de
            una plataforma tecnológica mediante la que a través de una
            aplicación móvil o de una web (en adelante, la APP) permite a
            determinadas tiendas locales ofertar sus productos a través de la
            misma, y en su caso, si los usuarios de la APP y consumidores de las
            citadas tiendas locales así lo solicitan a través de la APP, de
            forma accesoria, intermedia en la entrega inmediata de los
            productos. Así, Gadeli Delivery cuenta con una Plataforma mediante
            la cual diferentes comercios, con los que Gadeli puede mantener un
            acuerdo comercial por el uso de la plataforma, ofrecen una serie de
            productos y servicios. El Cliente tiene la posibilidad de solicitar
            la adquisición de productos y servicios de estos comercios mediante
            el mandato que confiere a un tercero al solicitar un pedido a través
            de la Plataforma, en cuyos casos Gadeli Delivey actúa como mero
            intermediario y, por lo tanto, no puede asumir ni asume
            responsabilidad alguna sobre la calidad de los productos o la
            correcta prestación de los servicios ofrecidos directamente por los
            comercios ni por dichos terceros. Asimismo, Gadeli Delivery es una
            Plataforma de intermediación “on demand” de mensajería express. La
            misma pretende facilitar que aquellas personas que necesiten ayuda
            con sus mandados o sus compras en comercios asociados (en adelante,
            Clientes), puedan realizar sus mandados mediante dichos terceros,
            dispuestos a llevar a cabo voluntariamente el mandato que le
            confieran los Clientes (en adelante, Gadels). Los Gadels por lo
            tanto, son una red de mensajeros/repartidores que son profesionales
            independientes que colaboran con Gadeliapp, cuando éstos están
            interesados en realizar la prestación de servicios de mensajería, se
            conectan a la Plataforma de Gadeliapp y en un tiempo determinado se
            comprometen a realizar el
          </Text>
        </Content>

        <Footer style={{ backgroundColor: "white" }}>
          <View style={[{ width: "70%", alignSelf: "center", marginTop: 20 }]}>
            <Button
              title="Accept"
              titleStyle={{ color: "white" }}
              type="clear"
              containerStyle={{
                backgroundColor: "#1F4B70",
                borderRadius: 5,
                marginBottom: 10
              }}
            />
          </View>
        </Footer>
      </Container>
    );
  }
}

export default PolicyScreen;
