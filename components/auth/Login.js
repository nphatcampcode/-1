import React, { Component } from 'react';
import { View, Button, TextInput, StyleSheet } from 'react-native';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import Ionic from 'react-native-vector-icons/Ionicons';

export class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      
    };

    this.onSignUp = this.onSignUp.bind(this);
  }

  onSignUp() {
    const { email, password } = this.state;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }
 

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={(email) => this.setState({ email })}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={(password) => this.setState({ password })}
        />
        
        <View style = {{width: '100%', height:40, backgroundColor: '#1640D6', borderRadius: 10, justifyContent: 'center'}}>
        <Button
          onPress={() => this.onSignUp()}
          title="Sign In"
          color="white" // Professional Blue Color
          style={styles.button}
        />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  input: {
    height: 40,
    borderColor: '#D3D3D3', // Light gray border color
    borderWidth: 2,
    marginBottom: 20,
    paddingLeft: 10,
    borderRadius: 8,
  },
  button: {
    backgroundColor: '#1E90FF',
    marginTop: 10,
    paddingVertical: 10,
    borderRadius: 8,
  },
});

export default Login;
