import React, { Component } from 'react'
import { ScrollView, Text, Image, View, Dimensions, TextInput, TouchableOpacity, AsyncStorage, Alert } from 'react-native'
import R from 'ramda'
const screenHeight = Dimensions.get('screen').height
const screenWidth = Dimensions.get('screen').width
const regex_number = /^[0-9\s]*$/

export default class RegisterScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            nik: '',
            address: '',
            phone: '',
            password: '',
            repassword: ''
        }
    }
    render() {
        return (
            <ScrollView style={{ width: screenWidth, padding: 10 }}>
                <Text style={{ fontSize: 28, fontWeight: '400', marginBottom: 20 }}>Registrasi</Text>
                <View style={{ height: 80, width: '100%' }}>
                    <Text>Email<Text style={{ color: 'red' }}>*</Text></Text>
                    <TextInput
                        value={this.state.email}
                        onChangeText={(value) => { this.setState({ email: value }) }}
                        keyboardType={"email-address"}
                        style={{ width: '100%', borderBottomWidth: 1, borderBottomColor: 'grey', marginTop: -10 }}
                        placeholder={"Input Email anda"}
                    >
                    </TextInput>
                </View>
                <View style={{ height: 80, width: '100%' }}>
                    <Text>Nama<Text style={{ color: 'red' }}>*</Text></Text>
                    <TextInput
                        value={this.state.name}
                        onChangeText={(value) => { this.setState({ name: value }) }}
                        style={{ width: '100%', borderBottomWidth: 1, borderBottomColor: 'grey', marginTop: -10 }}
                        placeholder={"Masukkan nama anda"}
                    >
                    </TextInput>
                </View>
                <View style={{ height: 80, width: '100%' }}>
                    <Text>NIK<Text style={{ color: 'red' }}>*</Text></Text>
                    <TextInput
                        value={this.state.nik}
                        onChangeText={(value) => {
                            if (regex_number.test(value) === false) {
                                return false
                            } else {
                                this.setState({ nik: value.replace(/\s/g, '') })
                            }
                        }}
                        keyboardType={'number-pad'}
                        style={{ width: '100%', borderBottomWidth: 1, borderBottomColor: 'grey', marginTop: -10 }}
                        placeholder={"Input 16 digit NIK anda"}
                    >
                    </TextInput>
                </View>
                <View style={{ height: 80, width: '100%' }}>
                    <Text>Nomor Telpon<Text style={{ color: 'red' }}>*</Text></Text>
                    <TextInput
                        value={this.state.phone}
                        onChangeText={(value) => { 
                            if (regex_number.test(value) === false) {
                                return false
                            } else {
                                this.setState({ phone: value.replace(/\s/g, '') })
                            } }}
                        keyboardType={'number-pad'}
                        style={{ width: '100%', borderBottomWidth: 1, borderBottomColor: 'grey', marginTop: -10 }}
                        placeholder={"cth. 087728926915"}
                    >
                    </TextInput>
                </View>
                <View style={{ height: 80, width: '100%' }}>
                    <Text>Alamat<Text style={{ color: 'red' }}>*</Text></Text>
                    <TextInput
                        value={this.state.address}
                        onChangeText={(value) => { this.setState({ address: value }) }}
                        style={{ width: '100%', borderBottomWidth: 1, borderBottomColor: 'grey', marginTop: -10 }}
                        placeholder={"Masukkan alamat anda"}
                    >
                    </TextInput>
                </View>
                <View style={{ height: 80, width: '100%' }}>
                    <Text>Password<Text style={{ color: 'red' }}>*</Text></Text>
                    <TextInput
                        value={this.state.password}
                        onChangeText={(value) => { this.setState({ password: value }) }}
                        secureTextEntry={true}
                        style={{ width: '100%', borderBottomWidth: 1, borderBottomColor: 'grey', marginTop: -10 }}
                        placeholder={"Masukkan password anda"}
                    >
                    </TextInput>
                </View>
                <View style={{ height: 80, width: '100%' }}>
                    <Text>Re-Input password</Text>
                    <TextInput
                        value={this.state.repassword}
                        onChangeText={(value) => { this.setState({ repassword: value }) }}
                        secureTextEntry={true}
                        style={{ width: '100%', borderBottomWidth: 1, borderBottomColor: 'grey', marginTop: -10 }}
                        placeholder={"Masukkan kembali password anda"}
                    >
                    </TextInput>
                </View>
                <View style={{ height: 80, width: '100%', marginBottom: 10, justifyContent: 'center', paddingHorizontal: 30, paddingVertical: 10 }}>
                    <TouchableOpacity
                        onPress={() => { this.register() }}
                        style={{ backgroundColor: '#39a3d4', flex: 1, borderRadius: 10, justifyContent: 'center' }}>
                        <Text style={{ width: '100%', textAlign: 'center', fontSize: 18, fontWeight: '500', color: 'white' }}>Register</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        )
    }

    pushMessage(data) {
        this.state.chatData.push({
            'id': '0',
            'message': data,
            'time': '06 - 12 - 2020'
        })
    }

    register() {
        if (R.isEmpty(this.state.email)) {
            alert('Email Harus diisi')
        } else if (R.isEmpty(this.state.name)) {
            alert('Nama Harus diisi')
        } else if (R.isEmpty(this.state.nik)) {
            alert('NIK Harus diisi')
        } else if (R.isEmpty(this.state.phone)) {
            alert('Nomor Telepon  Harus diisi')
        } else if (R.isEmpty(this.state.address)) {
            alert('Alamat Harus diisi')
        } else if (R.isEmpty(this.state.password)) {
            alert('Password Harus diisi')
        } else if (R.isEmpty(this.state.repassword)) {
            alert('Masukkan kembali password anda')
        } else if (this.state.password != this.state.repassword) {
            alert('Password tidak cocok')
        }
        else {
            AsyncStorage.setItem('email',this.state.email)
            AsyncStorage.setItem('name',this.state.name)
            AsyncStorage.setItem('nik',this.state.nik)
            AsyncStorage.setItem('phone',this.state.phone)
            AsyncStorage.setItem('address',this.state.address)
            AsyncStorage.setItem('password',this.state.password)
            Alert.alert(
                "Success",
                "Registration Success ! \n Go Back ?",
                [
                    {text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"},
                    {text: "Ok",
                    onPress: () => {
                        this.props.navigation.navigate('LaunchScreen')
                    }},
                ])
        }
    }
}
