import {StyleSheet, Platform} from 'react-native';

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    heading: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    menuItem:{
        padding: 10,
        borderWidth: 0.5,
        borderColor: '#d6d7da'
    },profileImgContainer: {
        marginLeft: 8,
        height: 82,
        width: 82,
        borderRadius: 40,
        borderWidth: 1
      },
      profileImg: {
        height: 80,
        width: 80,
        borderRadius: 40,
      },  containerStyle: {
        flex: 1,
        // backgroundColor: '#444',
      }
});
