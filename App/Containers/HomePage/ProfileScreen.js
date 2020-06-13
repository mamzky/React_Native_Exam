import React, { Component } from 'react'
import { ScrollView, Text, Alert, View, Dimensions, AsyncStorage, TouchableOpacity } from 'react-native'
import { prop } from 'ramda'
const screenHeight = Dimensions.get('screen').height
const screenWidth = Dimensions.get('screen').width


export default class ProfileScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dataAvailable: false,
            name: '-',
            email: '-',
            nik: '-',
            address: '-',
            phone: '-',
            password: '-'
        }
    }
    render() {
        return (
            <ScrollView style={{ width: screenWidth, padding: 10 }}>
                <Text style={{ fontSize: 28, fontWeight: '400', marginBottom: 20 }}>User Profile</Text>
                <View style={{ height: 80, width: '100%' }}>
                    <Text style={{ fontSize: 18, fontWeight: "400" }}>Email</Text>
                    <Text style={{ marginLeft: 10 }}>{this.state.email}</Text>
                </View>
                <View style={{ height: 80, width: '100%' }}>
                    <Text style={{ fontSize: 18, fontWeight: "400" }}>Name</Text>
                    <Text style={{ marginLeft: 10 }}>{this.state.name}</Text>
                </View>
                <View style={{ height: 80, width: '100%' }}>
                    <Text style={{ fontSize: 18, fontWeight: "400" }}>NIK</Text>
                    <Text style={{ marginLeft: 10 }}>{this.state.nik}</Text>
                </View>
                <View style={{ height: 80, width: '100%' }}>
                    <Text style={{ fontSize: 18, fontWeight: "400" }}>Phone Number</Text>
                    <Text style={{ marginLeft: 10 }}>{this.state.phone}</Text>
                </View>
                <View style={{ height: 80, width: '100%' }}>
                    <Text style={{ fontSize: 18, fontWeight: "400" }}>Address</Text>
                    <Text style={{ marginLeft: 10 }}>{this.state.address}</Text>
                </View>
                <View style={{ height: 80, width: '100%', marginBottom: 10, justifyContent: 'center', paddingHorizontal: 30, paddingVertical: 10, flexDirection: 'row' }}>
                    {this.state.dataAvailable && (
                        <TouchableOpacity
                            onPress={() => { this.clearData() }}
                            style={{ backgroundColor: '#f54242', marginRight: 5, flex: 1, borderRadius: 10, justifyContent: 'center', flex: 1 }}>
                            <Text style={{ width: '100%', textAlign: 'center', fontSize: 18, fontWeight: '500', color: 'white' }}>Clear Data</Text>
                        </TouchableOpacity>
                    )}
                    <TouchableOpacity
                        onPress={() => { this._navigateToRegister() }}
                        style={{ backgroundColor: '#39a3d4', marginLeft: 5, flex: 1, borderRadius: 10, justifyContent: 'center', flex: 1 }}>
                        <Text style={{ width: '100%', textAlign: 'center', fontSize: 18, fontWeight: '500', color: 'white' }}>
                            {this.state.dataAvailable ? 'Edit Data' : 'Register'}
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        )
    }

    componentDidMount() {
        
        AsyncStorage.getItem('email', (error, result) => {
            if (result) {
                this.setState({
                    email: result, dataAvailable: true
                });
            }
        });
        AsyncStorage.getItem('name', (error, result) => {
            if (result) {
                this.setState({
                    name: result
                });
            }
        });
        AsyncStorage.getItem('nik', (error, result) => {
            if (result) {
                this.setState({
                    nik: result
                });
            }
        });
        AsyncStorage.getItem('phone', (error, result) => {
            if (result) {
                this.setState({
                    phone: result
                });
            }
        });
        AsyncStorage.getItem('address', (error, result) => {
            if (result) {
                this.setState({
                    address: result
                });
            }
        });
    }
    _navigateToRegister() {
        this.props.navigation.navigate('RegisterScreen')
    }
    clearData() {
        Alert.alert(
            "Success",
            "Are you sure want to clear data ?",
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                {
                    text: "Ok",
                    onPress: () => {
                        AsyncStorage.clear()
                        this.props.navigation.goBack()
                    }
                },
            ])
    }
}
