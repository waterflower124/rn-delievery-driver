import * as firebase from 'firebase';
import _ from 'lodash';

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyB6xVlECKMl5bMgwjwFG3E68854I_Yka_0",
    authDomain: "gadeli-delivery.firebaseapp.com",
    databaseURL: "https://gadeli-delivery.firebaseio.com",
    // projectId: "gadeli-delivery",
    storageBucket: "gadeli-delivery.appspot.com",
    // messagingSenderId: "659839076024",
    // appId: "1:659839076024:web:841e894fae50a7a0afd64d"
  };

  export const initialize = () => {
    firebase.initializeApp(firebaseConfig);
  }

  export const updateLocation = (driverId, location) => {
    firebase.database().ref('drivers/' + driverId).set({
      id: driverId,
      location,
    });
  }

  export const getUserLocation = (userId, callback = null) => {
    firebase.database().ref('users/' + userId).on('value', (snapshot) => {
      const newObj = snapshot.val();
      if (_.isFunction(callback)) {
          callback(newObj);
      }
      console.log("location changed ", newObj);
    });
  }