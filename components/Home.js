import React, { useState, useEffect, useRef } from 'react'
import { ActivityIndicator, Text, View, StyleSheet } from 'react-native'
import TesseractOcr, { LANG_ENGLISH } from 'react-native-tesseract-ocr';
import { Camera } from 'expo-camera'
import SwapCamera from './SwapCamera'
import TakePhoto from './TakePhoto'
import GoToCode from './GoToCode'

export default function Home({ navigation }) {
    const [hasPermission, setHasPermission] = useState(null)
    const [type, setType] = useState(Camera.Constants.Type.back)
    const [waitForOcr, setWaitForOcr] = useState(false)
    let cameraRef = useRef()

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestPermissionsAsync()
            setHasPermission(status === 'granted')
        })()
    }, [])

    const takePhoto = async () => {
        setWaitForOcr(true)

        let photo = await cameraRef.current.takePictureAsync({ base64: true })
        console.log(photo)

        const base64Str = 'data:image/jpg;base64,' + photo

        const tessOptions = {};
        TesseractOcr.recognize(base64Str, LANG_ENGLISH, tessOptions);
        setWaitForOcr(false)
    }

    if (hasPermission === null) {
        return <View />;
    }

    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    return (
        <View style={styles.container}>
            <Camera style={styles.camera} type={type} ref={cameraRef}>
                <View style={styles.buttonContainer}>
                    {
                        waitForOcr === true
                        ? <ActivityIndicator color="white" size="large" />
                        : <Text> </Text>
                    }
                    <SwapCamera setType={setType} buttonStyle={styles.button} />
                    <TakePhoto waitForOcr={waitForOcr} buttonStyle={styles.button} takePhoto={takePhoto} />
                    <GoToCode navigation={navigation} buttonStyle={styles.button} />
                </View>
            </Camera>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    camera: {
        flex: 1,
    },
    buttonContainer: {
        flex: 1,
        backgroundColor: 'transparent',
        flexDirection: 'row',
        margin: 20,
        justifyContent: 'space-between'
    },
    button: {
        flex: 1,
        alignSelf: 'flex-end',
        alignItems: 'center',
    },
    wait: {
        flex: 1,
        alignItems: 'center',
    }
});