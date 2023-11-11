import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet } from 'react-native';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

export default function Register() {
    const [state, setState] = useState({
        email: '',
        password: '',
        name: ''
    });

    const onSignUp = () => {
        const { email, password, name } = state;
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((result) => {
                firebase.firestore().collection("users")
                    .doc(firebase.auth().currentUser.uid)
                    .set({
                        name,
                        email,
                    })
                console.log(result)
            })
            .catch((error) => {
                console.log(error)
            })
    }

    return (
        <View style={styles.container}>
            <Text style={styles.label}>Name</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter your name"
                onChangeText={(name) => setState({ ...state, name })}
            />

            <Text style={styles.label}>Email</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter your email"
                onChangeText={(email) => setState({ ...state, email })}
                keyboardType="email-address"
            />

            <Text style={styles.label}>Password</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter your password (at least 8 characters)"
                secureTextEntry={true}
                onChangeText={(password) => setState({ ...state, password })}
            />

            <Button
                onPress={onSignUp}
                title="Sign Up"
                style={styles.signupButton}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
    },
    label: {
        marginBottom: 8,
        fontSize: 16,
        fontWeight: 'bold',
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 16,
        paddingHorizontal: 10,
    },
    signupButton: {
        backgroundColor: '#4CAF50', // Green color as an example
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
    },
});
