import React from 'react';
import { Text, View, Button } from 'react-native';

export default function Landing({ navigation }) {
  return (
    <View style={styles.container}>
      <Button
        title="Register"
        onPress={() => navigation.navigate("Register")}
        style={styles.button}
        color="#4CAF50" // You can change the color to your preference
      />
      <Button
        title="Login"
        onPress={() => navigation.navigate("Login")}
        style={styles.button}
        color="#2196F3" // You can change the color to your preference
      />
    </View>
  );
}

const styles = {
  container: {
    width: '100%',
    top: 500,
    //justifyContent: 'center',
   // paddingHorizontal: 20, // Add padding for better spacing
  },
  button: {
    marginVertical: 10, // Add vertical margin to separate the buttons
    borderRadius: 8, // Add border radius for rounded corners
  },
};
