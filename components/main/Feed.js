import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function Feed() {
    return (
        <View>
            <Text style= {styles.text }>Feed</Text>
        </View>
    )
}

const styles = StyleSheet.create( {
    text: {
    fontSize: 50,
}

} )