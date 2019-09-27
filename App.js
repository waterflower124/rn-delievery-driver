/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Fragment, Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import store from './src/screen/redux/store';
import {Provider} from 'react-redux';

import { createAppContainer, DrawerItems, DrawerNavigator, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import LoginPage from "./src/screen/login";
import RegisterPage from "./src/screen/signup";
import HomePage from "./src/screen/home";
import PicandsendPage from "./src/screen/picandsend";
import BuyandsendPage from "./src/screen/buyandsend";
import GiftandparentPage from "./src/screen/giftandparent";
import SplashScreen from "./src/screen/splash";
import OtpVerification from "./src/screen/otp";
import PolicyScreen from "./src/screen/policy";
import ListPrice from "./src/screen/ListPrice";
import PayScreen from "./src/screen/pay";
import { Icon, Image } from "react-native-elements";
import DrawerContent from "./src/screen/drawer";
import FeedBackScreen from "./src/screen/feedback";
import MyOrder from "./src/screen/myorder";
import OrderHistory from "./src/screen/history";
import Favouirte from "./src/screen/favouirte";
import ProductScreen from "./src/screen/product";
import ProfilePage from "./src/screen/profile";
import MapScreen from "./src/screen/map";
import SelectVehicle from "./src/screen/selectvehicle";
import SelectedVehicle from "./src/screen/selectedvehicale";
import MotorCyclePage from "./src/screen/motorcycle";
import BankDetailPage from "./src/screen/bankdetails";
import MyReview from "./src/screen/review";
import MenuPrincipal from "./src/screen/MenuPrincipal";
import MainPageOrder from "./src/screen/order";
import ChangePassword from "./src/screen/chanagepassword";
import OrderRequest from "./src/screen/order_request";
import OrderRequestDetails from "./src/screen/order_reuest_details";
import StatusProgress from "./src/screen/statusprogess";
import DeliverdScreen from "./src/screen/devlivered";
import DriverPaidScreen from "./src/screen/driver_paid_screen";
import SummaryPage from "./src/screen/summary";
import PayDetailsScreen from "./src/screen/paydetail";
import ForgotPasswordPage from "./src/screen/forgotpassword";
import { initialize } from './src/utility/firebase';

const MisOrdenesStack = createStackNavigator({
  OrderRequest: {
    screen: OrderRequest,
    navigationOptions: {
      header: null,
      headerMode: "none",
      transitionConfig: TransitionConfig
    }
  },
  OrderRequestDetails: {
    screen: OrderRequestDetails,
    navigationOptions: {
      header: null
    }
  },
  DeliverdScreen: {
    screen: DeliverdScreen,
    navigationOptions: {
      header: null
    }
  },
  DriverPaidScreen: {
    screen: DriverPaidScreen,
    navigationOptions: {
      header: null
    }
  },
  SummaryPage: {
    screen: SummaryPage,
    navigationOptions: {
      header: null
    }
  },
  PayDetailsScreen: {
    screen: PayDetailsScreen,
    navigationOptions: {
      header: null
    }
  },
  FeedBackScreen: {
    screen: FeedBackScreen,
    navigationOptions: {
      header: null
    }
  },
  OrderHistory: {
    screen: OrderHistory,
    navigationOptions: {
      header: null
    }
  },
  BankDetailPage: {
    screen: BankDetailPage,
    navigationOptions: {
      header: null
    }
  },
  MyReview: {
    screen: MyReview,
    navigationOptions: {
      header: null
    }
  },
  ProfilePage: {
    screen: ProfilePage,
    navigationOptions: {
      header: null
    }
  },
  ChangePassword: {
    screen: ChangePassword,
    navigationOptions: {
      header: null
    }
  },

  StatusProgress: {
    screen: StatusProgress,
    navigationOptions: {
      header: null
    }
  },
  LoginPage: {
    screen: LoginPage,
    navigationOptions: {
      header: null
    }
  },
  RegisterPage: {
    screen: RegisterPage,
    navigationOptions: {
      header: null
    }
  },

  Policy: {
    screen: PolicyScreen,
    navigationOptions: {
      header: null
    }
  },
  ListPrice: {
    screen: ListPrice,
    navigationOptions: {
      header: null
    }
  }
});

const MiMapaStack = createStackNavigator({
  MapScreen: {
    screen: MapScreen,
    navigationOptions: {
      header: null
    }
  }
});

namefomr = name => {
  if (name == "LoginPage" || name == "RegisterPage" || name == "ProfilePage") {
    return false;
  } else {
    return true;
  }
};
const DashboardTabNavigator = createBottomTabNavigator(
  {
    MisOrdenesStack: {
      screen: MisOrdenesStack,

      navigationOptions: ({ navigation }) => ({
        tabBarLabel: "Pedidos",
        tabBarIcon: ({ tintColor }) => (
          <Icon
            name="compass-outline"
            type="material-community"
            size={22}
            color={tintColor}
          />
        ),
        tabBarVisible: this.namefomr(
          navigation.state.routes[navigation.state.index].routeName
        )
      })
    },

    MiMapaStack: {
      screen: MiMapaStack,
      navigationOptions: ({ navigation }) => ({
        tabBarLabel: "Ubicación",
        tabBarIcon: ({ tintColor }) => (
          <Icon
            name="map-marker-radius"
            type="material-community"
            size={22}
            color={tintColor}
          />
        )
      })
    },
    OrderRequestDetails: {
      screen: OrderRequestDetails,
      navigationOptions: ({ navigation }) => ({
        tabBarLabel: "Pedido En Marcha",
        tabBarIcon: ({ tintColor }) => (
          <Icon
            name="truck-fast"
            type="material-community"
            size={22}
            color={tintColor}
          />
        )
      })
    }
  },
  {
    navigationOptions: ({ navigation }) => {
      const { routeName } = navigation.state.routes[navigation.state.index];
      return {
        header: null,
        headerTitle: routeName
      };
    }
  }
);

const DashboardStackNavigator = createStackNavigator(
  {
    DashboardTabNavigator: DashboardTabNavigator
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerLeft: (
          <Icon
            style={{ paddingLeft: 10 }}
            onPress={() => navigation.openDrawer()}
            name="md-menu"
            size={30}
          />
        )
      };
    }
  }
);

const AppDrawerNavigator = createDrawerNavigator(
  {
    OrderRequest: {
      screen: DashboardStackNavigator
    }
  },
  {
    contentComponent: DrawerContent,
    drawerWidth: 300
  }
);

const AppSwitchNavigator = createSwitchNavigator({
  SplashPage: { screen: SplashScreen },
  OrderRequest: { screen: AppDrawerNavigator }
});

const DetalleDraw = createStackNavigator({
  OrderHistory: {
    screen: OrderHistory,
    navigationOptions: {
      header: null
    }
  },
  BankDetailPage: {
    screen: BankDetailPage,
    navigationOptions: {
      header: null
    }
  },
  MyReview: {
    screen: MyReview,
    navigationOptions: {
      header: null
    }
  },
  ProfilePage: {
    screen: ProfilePage,
    navigationOptions: {
      header: null
    }
  },
  ChangePassword: {
    screen: ChangePassword,
    navigationOptions: {
      header: null
    }
  },

  StatusProgress: {
    screen: StatusProgress,
    navigationOptions: {
      header: null
    }
  }
});

const silder = createDrawerNavigator(
  {
    HomePage: {
      screen: DetalleDraw
    }
  },

  {
    contentComponent: DrawerContent,
    drawerWidth: 300
  }
);

let TransitionConfig = () => {
  return {
    screenInterpolator: ({ position, scene }) => {
      const opacity = position.interpolate({
        inputRange: [scene.index - 1, scene.index],
        outputRange: [0, 1]
      });
      return {
        opacity: opacity
      };
    }
  };
};

const AppNavigator = createStackNavigator({
  SplashPage: {
    screen: SplashScreen,
    navigationOptions: {
      header: null
    }
  },

  OtpVerification: {
    screen: OtpVerification,
    navigationOptions: {
      header: null
    }
  },
  Home: {
    screen: silder,
    navigationOptions: {
      header: null,
      headerMode: "none",
      transitionConfig: TransitionConfig
    }
  },
  PayScreen: {
    screen: PayScreen,
    navigationOptions: {
      header: null
    }
  },

  SelectVehicle: {
    screen: SelectVehicle,
    navigationOptions: {
      header: null
    }
  },
  BikePage: {
    screen: SelectedVehicle,
    navigationOptions: {
      header: null
    }
  },
  MotorCyclePage: {
    screen: MotorCyclePage,
    navigationOptions: {
      header: null
    }
  },
  ForgotPasword: {
    screen: ForgotPasswordPage,
    navigationOptions: {
      header: null
    }
  }
});

const styles = StyleSheet.create({
  headerLeftIconStyle: {
    marginLeft: 15
  },
  searchInputContainer: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: "#999",
    flexDirection: "row",
    backgroundColor: "white"
  },
  searchInputIconStyle: {
    padding: 5
  },
  searchInputStyle: {
    flex: 1,
    paddingRight: 10,
    textAlign: "left"
  }
});

const App =  createAppContainer(AppSwitchNavigator);

export default class AppRoot extends Component{
	// onit(){
  
	//   firebase.messaging().hasPermission()
	// .then(enabled => {
	//   if (enabled) {
	// 	// user has permissions
	// 	this.createNotification()
   
	//   } else {
	// 	// user doesn't have permission
	// 	firebase.messaging().requestPermission()
	// .then(() => {
	//   // User has authorised  
  
	// })
	// .catch(error => {
	//   // User has rejected permissions  
	// });
	//   } 
	// });
	//   // const enabled = await firebase.messaging().hasPermission();
	//   // if (enabled) {
	//   //     // user has permissions
	//   // } else {
	//   //     // user doesn't have permission
	//   //     firebase.messaging().requestPermission()
	//   //   .then(() => {
	//   //     // User has authorised 
		   
	//   //   })
	//   //   .catch(error => {
	//   //     // User has rejected permissions  
	//   //   });
	  
	//   // }
	// }
   async componentDidMount(){
	//  this.onit()
  //  this.createNotification()
    initialize();
   }
  
   componentWillUnmount(){
	//  this.notificationListener
	//  this.notificationOpenList
   }
  
	// async createNotification(){
	//   this.notificationListener = firebase.notifications().onNotification((notifications) =>{
	// 	const {title,body } = notifications
	// 	console.log('notificaiton',notifications.title)
	// 	const locat = new firebase.notifications.Notification({show_in_forgorund:true}).setNotificationId(notifications.notificationId).setTitle(notifications.title).setBody(notifications.body).android.setChannelId('fcm_default_channel')
	// 	.android.setPriority(firebase.notifications.Android.Priority.High);
  
	// 	firebase.notifications().displayNotification(locat).catch((err) =>{
	// 	  console.log("Not errror====>" ,err)
	// 	})
	
	// 	const channel = new firebase.notifications.Android.Channel('fcm_default_channel','GadeliDriver',firebase.notifications.Android.Importance.Max).setDescription("Hi");
	// 	firebase.notifications().android.createChannel(channel);
	// 	if(notificationOpen){
	// 	  const {title,body } = notificationsOpen.notifications
	// 	  console.log('notificaiton',title)
  
	// 	}
	//   });
  
	//   this.notificationOpenList = firebase.notifications().onNotificationOpened((notificationsOpen) =>{
	// 	const {title,body } = notificationsOpen
	// 	console.log('notificaiton',notifications.title)
	// 	const notificationOpen =  firebase.notifications().getInitialNotification();
  
	// 	if(notificationOpen){
	// 	  const {title,body } = notificationsOpen.notifications
	// 	  console.log('notificaiton',title)
  
	// 	}
	//   });
  
	 
  
	//  this.messageListener = firebase.messaging().onMessage((message) => {
	//    console.log("FCm message===>",JSON.stringify(message))
	//  })     
	// }
	  render(){
		return(
		  <Provider store={store}>
			<App/>
		  </Provider>
		)
	  }
	}

// const App = () => {
//   return (
//     <Fragment>
//       <StatusBar barStyle="dark-content" />
//       <SafeAreaView>
//         <ScrollView
//           contentInsetAdjustmentBehavior="automatic"
//           style={styles.scrollView}>
//           <Header />
//           {global.HermesInternal == null ? null : (
//             <View style={styles.engine}>
//               <Text style={styles.footer}>Engine: Hermes</Text>
//             </View>
//           )}
//           <View style={styles.body}>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>Step One</Text>
//               <Text style={styles.sectionDescription}>
//                 Edit <Text style={styles.highlight}>App.js</Text> to change this
//                 screen and then come back to see your edits.
//               </Text>
//             </View>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>See Your Changes</Text>
//               <Text style={styles.sectionDescription}>
//                 <ReloadInstructions />
//               </Text>
//             </View>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>Debug</Text>
//               <Text style={styles.sectionDescription}>
//                 <DebugInstructions />
//               </Text>
//             </View>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>Learn More</Text>
//               <Text style={styles.sectionDescription}>
//                 Read the docs to discover what to do next:
//               </Text>
//             </View>
//             <LearnMoreLinks />
//           </View>
//         </ScrollView>
//       </SafeAreaView>
//     </Fragment>
//   );
// };

// const styles = StyleSheet.create({
//   scrollView: {
//     backgroundColor: Colors.lighter,
//   },
//   engine: {
//     position: 'absolute',
//     right: 0,
//   },
//   body: {
//     backgroundColor: Colors.white,
//   },
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   },
//   sectionTitle: {
//     fontSize: 24,
//     fontWeight: '600',
//     color: Colors.black,
//   },
//   sectionDescription: {
//     marginTop: 8,
//     fontSize: 18,
//     fontWeight: '400',
//     color: Colors.dark,
//   },
//   highlight: {
//     fontWeight: '700',
//   },
//   footer: {
//     color: Colors.dark,
//     fontSize: 12,
//     fontWeight: '600',
//     padding: 4,
//     paddingRight: 12,
//     textAlign: 'right',
//   },
// });

// export default App;
