import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import OrderRequest from "../order_request";
import OrderHistory from "../history";
import OrderRequestDetails from "../order_reuest_details";

const Tab = createBottomTabNavigator(
  {
    OrderRequest: {
      screen: OrderRequest
    },
    OrderHistory: {
      screen: OrderHistory
    },
    OrderRequestDetails: {
      screen: OrderRequestDetails
    }
  },
  {
    tabBarposition: "bottom", // As it says, you will configure it to appear on bottom.
    swipeEnabled: true, // This one make you through the screens
    tabBarOptions: {
      // Here we add some options to customize our tab as default.
      activeTintColor: "#f2f2f2", // As the name says: The color that the active tab will have.
      activeBackgroundColor: "#2EC4B6", // The background color of the active tab
      inactiveTintColor: "#666", // The inactive tab color. It will be the color of the text
      labelStyle: {
        // The label style. Here i just made a change on size and padding
        fontSize: 20,
        padding: 5
      }
    }
  }
);

export default createAppContainer(Tab);
