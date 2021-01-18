import React from 'react'
import { TouchableOpacity } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Camera } from 'expo-camera'

export default function SwapCamera({ setType, buttonStyle }) {
    const swap = () => {
        const back = Camera.Constants.Type.back
        const front = Camera.Constants.Type.front
        setType(prev => prev === back ? front : back)
    }

    return (
        <TouchableOpacity style={buttonStyle} onPress={swap} >
            <MaterialCommunityIcons
                name="camera-switch"
                style={{ color: "#fff", fontSize: 40 }}
            />
        </TouchableOpacity>
    )
}
