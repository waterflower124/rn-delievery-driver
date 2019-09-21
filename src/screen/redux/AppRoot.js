
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import store from '../redux/store';
import {Provider} from 'react-redux';
import App from '../route/App.js';
import firebase from 'react-native-firebase';

export default class AppRoot extends Component{
  onit(){

    firebase.messaging().hasPermission()
  .then(enabled => {
    if (enabled) {
      // user has permissions
      this.createNotification()
 
    } else {
      // user doesn't have permission
      firebase.messaging().requestPermission()
  .then(() => {
    // User has authorised  

  })
  .catch(error => {
    // User has rejected permissions  
  });
    } 
  });
    // const enabled = await firebase.messaging().hasPermission();
    // if (enabled) {
    //     // user has permissions
    // } else {
    //     // user doesn't have permission
    //     firebase.messaging().requestPermission()
    //   .then(() => {
    //     // User has authorised 
         
    //   })
    //   .catch(error => {
    //     // User has rejected permissions  
    //   });
    
    // }
  }
 async componentDidMount(){
   this.onit()
   this.createNotification()
 }

 componentWillUnmount(){
   this.notificationListener
   this.notificationOpenList
 }

  async createNotification(){
    this.notificationListener = firebase.notifications().onNotification((notifications) =>{
      const {title,body } = notifications
      console.log('notificaiton',notifications.title)
      const locat = new firebase.notifications.Notification({show_in_forgorund:true}).setNotificationId(notifications.notificationId).setTitle(notifications.title).setBody(notifications.body).android.setChannelId('fcm_default_channel')
      .android.setPriority(firebase.notifications.Android.Priority.High);

      firebase.notifications().displayNotification(locat).catch((err) =>{
        console.log("Not errror====>" ,err)
      })
  
      const channel = new firebase.notifications.Android.Channel('fcm_default_channel','GadeliDriver',firebase.notifications.Android.Importance.Max).setDescription("Hi");
      firebase.notifications().android.createChannel(channel);
      if(notificationOpen){
        const {title,body } = notificationsOpen.notifications
        console.log('notificaiton',title)

      }
    });

    this.notificationOpenList = firebase.notifications().onNotificationOpened((notificationsOpen) =>{
      const {title,body } = notificationsOpen
      console.log('notificaiton',notifications.title)
      const notificationOpen =  firebase.notifications().getInitialNotification();

      if(notificationOpen){
        const {title,body } = notificationsOpen.notifications
        console.log('notificaiton',title)

      }
    });

   

   this.messageListener = firebase.messaging().onMessage((message) => {
     console.log("FCm message===>",JSON.stringify(message))
   })     
  }
    render(){
      return(
        <Provider store={store}>
          <App/>
        </Provider>
      )
    }
  }
  