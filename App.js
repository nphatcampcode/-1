import { StatusBar } from 'expo-status-bar';
import { Component } from 'react';
import firebase from 'firebase/app'
import 'firebase/auth';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import LandingScreen from './components/auth/Landing'
import RegisterScreen, { Register } from './components/auth/Register'
import { getApps, initializeApp } from 'firebase/app';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDLgC2RgF6pjsSOgdi4dATo95Qtmw1cRf8",
  authDomain: "social-app-b7cc6.firebaseapp.com",
  projectId: "social-app-b7cc6",
  storageBucket: "social-app-b7cc6.appspot.com",
  messagingSenderId: "37162901414",
  appId: "1:37162901414:web:7edd82771264e681643967",
  measurementId: "G-GYCFKT2E4B"
};

if(getApps().length === 0) {
  initializeApp(firebaseConfig)
}

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName = "Landing" >
          <Stack.Screen name = "Landing" component = {LandingScreen} options = {{headerShown: false}}/>
          <Stack.Screen name = "Register" component = {Register}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
}
