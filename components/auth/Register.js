import React from "react";
import { Component } from 'react';
import {View, Button, TextInput} from 'react-native'
import firebase from 'firebase/app'
import 'firebase/auth';
import { initializeApp } from 'firebase/app';
require ('firebase/auth')
import { getAuth } from "firebase/auth";


const auth = getAuth();
export class Register extends Component {
constructor(props) {
    super(props);

    this.state = {
        email : '',
        password: '',
        name: ''
    }
    this.onSignUp = this.onSignUp.bind(this)
}
onSignUp() {
    const { email, password, name} = this.state;
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((result) => {
        console.log(result)
    })
    .catch((error) => {
        console.log(error)
    })
}
    render() {
        return (
            <View>
                <TextInput 
                placeholder="Name"
                onChangeText={(name) => this.setState({name })}
                
                />
                <TextInput 
                placeholder="Email"
                onChangeText={(email) => this.setState({email })}
                
                />
                <TextInput 
                placeholder="Password"
                secureTextEntry={true}
                onChangeText={(password) => this.setState({password })}
                
                />
                <Button 
                    onPress={() => this.onSignUp() }
                    title="Sign up"
                />

               
            </View>
        )
    }
} 

export default Register