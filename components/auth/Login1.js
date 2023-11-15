import React, { Component } from 'react';
import { View, Button, TextInput, StyleSheet, TouchableOpacity,SafeAreaView, Image, Text } from 'react-native';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import Ionic from 'react-native-vector-icons/Ionicons';

export class Login1 extends Component {
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
    const { navigation } = this.props; 
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#e8ecf4' }}>
          <View style={styles.container}>
            <View style={styles.header}>
              <Image
                alt=""
                resizeMode="contain"
                style={styles.headerImg}
                source={{
                  uri: 'https://withfra.me/android-chrome-512x512.png',
                }}
              />
    
              <Text style={styles.title}>
                Sign in to <Text style={{ color: '#075eec' }}>MyApp</Text>
              </Text>
    
              <Text style={styles.subtitle}>
                Get access to your portfolio and more
              </Text>
            </View>
    
            <View style={styles.form}>
              <View style={styles.input}>
                <Text style={styles.inputLabel}>Email address</Text>
    
                <TextInput
                  autoCapitalize="none"
                  autoCorrect={false}
                  keyboardType="email-address"
                  onChangeText={(email) => this.setState({ email })}
                  placeholder="john@example.com"
                  placeholderTextColor="#6b7280"
                  style={styles.inputControl}
                  //value={form.email}
                />
              </View>
    
              <View style={styles.input}>
                <Text style={styles.inputLabel}>Password</Text>
    
                <TextInput
                  autoCorrect={false}
                  onChangeText={(password) => this.setState({ password })}
                  placeholder="********"
                  placeholderTextColor="#6b7280"
                  style={styles.inputControl}
                  secureTextEntry={true}
                  //value={form.password}
                />
              </View>
    
              <View style={styles.formAction}>
                <TouchableOpacity
                  onPress={() => {  this.onSignUp()
                    // handle onPress
                  }}>
                  <View style={styles.btn}>
                    <Text style={styles.btnText}>Sign in</Text>
                  </View>
                </TouchableOpacity>
              </View>
    
              <TouchableOpacity
                onPress={() => {
                  // Navigate to the "Register" screen
                  navigation.navigate("Register");
                }}
                style={{ marginTop: 'auto' }}>
                <Text style={styles.formFooter}>
                  Don't have an account?{' '}
                  <Text style={{ textDecorationLine: 'underline' }}>Sign up</Text>
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  header: {
    marginVertical: 36,
  },
  headerImg: {
    width: 80,
    height: 80,
    alignSelf: 'center',
    marginBottom: 36,
  },
  title: {
    fontSize: 27,
    fontWeight: '700',
    color: '#1d1d1d',
    marginBottom: 6,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 15,
    fontWeight: '500',
    color: '#929292',
    textAlign: 'center',
  },
  form: {
    marginBottom: 24,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
  },
  formAction: {
    marginVertical: 24,
  },
  formFooter: {
    fontSize: 17,
    fontWeight: '600',
    color: '#222',
    textAlign: 'center',
    letterSpacing: 0.15,
  },
  input: {
    marginBottom: 16,
  },
  inputLabel: {
    fontSize: 17,
    fontWeight: '600',
    color: '#222',
    marginBottom: 8,
  },
  inputControl: {
    height: 44,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    borderRadius: 12,
    fontSize: 15,
    fontWeight: '500',
    color: '#222',
  },
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    backgroundColor: '#075eec',
    borderColor: '#075eec',
  },
  btnText: {
    fontSize: 18,
    lineHeight: 26,
    fontWeight: '600',
    color: '#fff',
  },
});

export default Login1;
