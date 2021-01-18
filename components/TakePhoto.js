import React from 'react'
import { TouchableOpacity } from 'react-native'
import { FontAwesome, Feather  } from '@expo/vector-icons'

export default function TakePhoto({ waitForOcr, buttonStyle, takePhoto }) {
    if (waitForOcr) {
        return (
            <TouchableOpacity style={buttonStyle} >
                <Feather
                    name="camera-off"
                    style={{ color: "#fff", fontSize: 40 }}
                />
            </TouchableOpacity>
        )
    }

    return (
        <TouchableOpacity style={buttonStyle} onPress={takePhoto}>
            <FontAwesome
                name="camera"
                style={{ color: "#fff", fontSize: 40 }}
            />
        </TouchableOpacity>
    )
}