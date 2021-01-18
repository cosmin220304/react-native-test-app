import React from 'react'
import { Text, View, StyleSheet, Dimensions } from 'react-native'

const { width } = Dimensions.get("screen")

export default function CodeAnalyze({ }) {
    return (
        <View>
            <Text style={styles.title}>
                test
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        color: "green",
        backgroundColor: '#fff',
        fontSize: 24,
        width: width,
        padding: "15%"
    },
});
