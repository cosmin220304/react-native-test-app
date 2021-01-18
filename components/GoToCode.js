import React from 'react'
import { TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons'

export default function GoToCode({ navigation, buttonStyle }) {
    const goToCode = () => {
        navigation.navigate("CodeAnalyze")
    }

    return (
        <TouchableOpacity style={buttonStyle} >
            <AntDesign
                onPress={goToCode}
                name="codesquare"
                style={{ color: "#fff", fontSize: 40 }}
            />
        </TouchableOpacity>
    )
}