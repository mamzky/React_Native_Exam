import React, { Component } from 'react'
import { ScrollView, Text, Image, View } from 'react-native'
import { CameraKitCamera } from 'react-native-camera-kit'



export default class PhotoScreen extends Component {
    render() {
        return (
            <View>
                <CameraKitCamera
                    ref={cam => this.camera = cam}
                    style={{ height: '100%', width: '100%' }}
                    cameraOptions={{
                        flashMode: 'auto',
                        focusMode: 'on',
                        zoomMode: 'on',
                        ratioOverlay: '1:1',
                        ratioOverlayColor: '#00000077'
                    }}
                    
                />
            </View>
        )
    }
}

