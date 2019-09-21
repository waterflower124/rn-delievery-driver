import React from "react";

import {
  createSwitchNavigator,
  createStackNavigator,
  createAppContainer,
  DrawerItems,
  DrawerNavigator,
  createDrawerNavigator,
  createBottomTabNavigator
} from "react-navigation";
import LoginPage from "../login";
import RegisterPage from "../signup";
import HomePage from "../home";
import PicandsendPage from "../picandsend";
import BuyandsendPage from "../buyandsend";
import GiftandparentPage from "../giftandparent";
import SplashScreen from "../splash";
import OtpVerification from "../otp";
import PolicyScreen from "../policy";
import ListPrice from "../ListPrice";
import PayScreen from "../pay";
import {
  View,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Text
} from "react-native";
import { Icon, Image } from "react-native-elements";
import DrawerContent from "../drawer";
import FeedBackScreen from "../feedback";
import MyOrder from "../myorder";
import OrderHistory from "../history";
import Favouirte from "../favouirte";
import ProductScreen from "../product";
import ProfilePage from "../profile";
import MapScreen from "../map";
import SelectVehicle from "../selectvehicle";
import SelectedVehicle from "../selectedvehicale";
import MotorCyclePage from "../motorcycle";
import BankDetailPage from "../bankdetails";
import MyReview from "../review";
import MenuPrincipal from "../MenuPrincipal";
import MainPageOrder from "../order";
import ChangePassword from "../chanagepassword";
import OrderRequest from "../order_request";
import OrderRequestDetails from "../order_reuest_details";
import StatusProgress from "../statusprogess";
import DeliverdScreen from "../devlivered";
import DriverPaidScreen from "../driver_paid_screen";
import SummaryPage from "../summary";
import PayDetailsScreen from "../paydetail";
import ForgotPasswordPage from "../forgotpassword";

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

export default createAppContainer(AppSwitchNavigator);
