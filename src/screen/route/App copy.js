import React from "react";

import {
  createStackNavigator,
  createAppContainer,
  DrawerItems,
  DrawerNavigator,
  createDrawerNavigator,
  createBottomTabNavigator,
  TabNavigator
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
import MainPageOrder from "../MenuPrincipal";
//import MainPageOrder from "../order";
import ChangePassword from "../chanagepassword";
import OrderRequest from "../order_request";
import OrderRequestDetails from "../order_reuest_details";
import StatusProgress from "../statusprogess";
import DeliverdScreen from "../devlivered";
import DriverPaidScreen from "../driver_paid_screen";
import SummaryPage from "../summary";
import PayDetailsScreen from "../paydetail";
import ForgotPasswordPage from "../forgotpassword";

const drawPage = createStackNavigator({
  MainPageOrder: {
    screen: MainPageOrder,
    //screen: DashboardStackNavigator,

    navigationOptions: {
      header: null
    }
  },
  MyOrder: {
    screen: MyOrder,
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
  FeedBackScreen: {
    screen: FeedBackScreen,
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
  OrderRequest: {
    screen: OrderRequest,
    navigationOptions: {
      header: null
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
  StatusProgress: {
    screen: StatusProgress,
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
  }
});

const silder = createDrawerNavigator(
  {
    HomePage: {
      screen: drawPage
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
  OtpVerification: {
    screen: OtpVerification,
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
  PicandsendPage: {
    screen: PicandsendPage,
    navigationOptions: {
      header: null
    }
  },
  BuyandsendPage: {
    screen: BuyandsendPage,
    navigationOptions: {
      header: null
    }
  },
  GiftandparentPage: {
    screen: GiftandparentPage,
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
  MapScreen: {
    screen: MapScreen,
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

export default createAppContainer(AppNavigator);
