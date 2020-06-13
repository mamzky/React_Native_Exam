import React, { Component } from 'react'
import { ScrollView, Text, Image, View, TouchableOpacity, Dimensions, ImageBackground } from 'react-native'
import { Images } from '../Themes'

// Styles
import styles from './Styles/LaunchScreenStyles'

export default class LaunchScreen extends Component {
  render() {
    return (
      <View style={{ width: Dimensions.get('screen').width, height: Dimensions.get('screen').height }}>
        <ImageBackground source={Images.background} style={styles.backgroundImage} resizeMode='stretch'>

          <View style={{ borderRadius: 10, elevation: 1, backgroundColor: 'white', height: 250, width: 250 }}>
            <View style={{ flex: 1, flexDirection: "row" }}>
              <TouchableOpacity
                onPress={() => { this._navigateToRegister() }}
                activeOpacity={.7}
                style={{ flex: 1, justifyContent: "center", borderTopLeftRadius: 10, borderWidth: 1, borderColor: '#F5F5F5' }}>
                <Text style={{ textAlign: "center" }}>Register</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => { this._navigateToPhoto() }}
                activeOpacity={.7}
                style={{ flex: 1, justifyContent: "center", borderTopRightRadius: 10, borderWidth: 1, borderColor: '#F5F5F5' }}>
                <Text style={{ textAlign: "center" }}>Photo</Text>
              </TouchableOpacity>
            </View>

            <View style={{ flex: 1, flexDirection: "row" }}>
              <TouchableOpacity
                onPress={() => { this._navigateToChat() }}
                activeOpacity={.7}
                style={{ flex: 1, justifyContent: "center", borderBottomLeftRadius: 10, borderWidth: 1, borderColor: '#F5F5F5' }}>
                <Text style={{ textAlign: "center" }}>Chat</Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => { this._navigateToProfile() }}
                activeOpacity={.7}
                style={{ flex: 1, justifyContent: "center", borderBottomRightRadius: 10, borderWidth: 1, borderColor: '#F5F5F5' }}>
                <Text style={{ textAlign: "center" }}>Profile</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </View>
    )
  }

  _test() {
    alert('hello')
  }

  _navigateToRegister() {
    this.props.navigation.navigate('RegisterScreen')
  }
  _navigateToPhoto() {
    this.props.navigation.navigate('PhotoScreen')
  }
  _navigateToChat() {
    this.props.navigation.navigate('ChatScreen')
  }
  _navigateToProfile() {
    this.props.navigation.navigate('ProfileScreen')
  }
}
