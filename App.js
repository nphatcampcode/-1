import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import firebase from "firebase/compat/app";

import { View, Text } from 'react-native'
import "firebase/compat/auth";
import { Provider } from 'react-redux'
import { applyMiddleware} from 'redux'
import {createStore} from 'redux'
import rootReducer from './redux/reducers'
import thunk from 'redux-thunk';

const store = createStore(rootReducer, applyMiddleware(thunk))

//import * as firebase from 'firebase/compat/app'

const firebaseConfig = {
  apiKey: "AIzaSyDLgC2RgF6pjsSOgdi4dATo95Qtmw1cRf8",
  authDomain: "social-app-b7cc6.firebaseapp.com",
  projectId: "social-app-b7cc6",
  storageBucket: "social-app-b7cc6.appspot.com",
  messagingSenderId: "37162901414",
  appId: "1:37162901414:web:7edd82771264e681643967",
  measurementId: "G-GYCFKT2E4B"
};

if (firebase.apps && firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig)
}

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LangdingScreen1 from './components/auth/Landing1'
import LandingScreen from './components/auth/Landing'
import RegisterScreen from './components/auth/Register'
import MainScreen from './components/Main'
import LoginScreen from './components/auth/Login'
import LoginScreen1 from './components/auth/Login1'
import AddScreen from './components/main/Add'
import SaveScreen from './components/Save'

const Stack = createStackNavigator();


export class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loaded: false,
    }
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        this.setState({
          loggedIn: false,
          loaded: true,
        })
      } else {
        this.setState({
          loggedIn: true,
          loaded: true,
        })
      }
    })
  }
  render() {
    const { loggedIn, loaded } = this.state;
    if (!loaded) {
      return (
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <Text>Loading</Text>
        </View>
      )
    }

    if (!loggedIn) {
      return (
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Landing">
            <Stack.Screen name="Landing" component={LangdingScreen1} options={{ headerShown: false }} />
            <Stack.Screen name="Register" component={RegisterScreen} />
            <Stack.Screen name="Login" component={LoginScreen1} />
          </Stack.Navigator>
        </NavigationContainer>
      );
    }

    return (
      
        
      
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Main">
            <Stack.Screen name="MainScreen" component={MainScreen} options={{ headerShown: false }} />
            <Stack.Screen name="Add" component={AddScreen} navigation={this.props.navigation}/>
            <Stack.Screen name="Save" component={SaveScreen} navigation={this.props.navigation}/>
            </Stack.Navigator>
          </NavigationContainer>
      </Provider>
     
      
    )
  }
}

export default App
