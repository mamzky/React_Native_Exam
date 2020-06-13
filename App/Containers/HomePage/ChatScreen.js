import React, { Component } from 'react'
import { ScrollView, Text, Image, View, Dimensions, TextInput, TouchableOpacity } from 'react-native'
const screenHeight = Dimensions.get('screen').height
const screenWidth = Dimensions.get('screen').width

export default class ChatScreen extends Component {
    constructor(props) {
        super(props)
        this.state = {
            onFocusText: false,
            textInputUser: '',
            chatData: [
                {
                    'id': '0',
                    'message': 'hello',
                    'time': '12 - 12 - 2020'
                },
                {
                    'id': '1',
                    'message': 'Hi',
                    'time': '06 - 12 - 2020'
                },
                {
                    'id': '0',
                    'message': 'This is me !',
                    'time': '12 - 12 - 2020'
                },
            ]
        }
    }
    render() {
        return (
            <View style={{ height: screenHeight, width: screenWidth, padding: 10 }}>
                {this.state.chatData.map((item, index) => {
                    return (
                        item.id == '0' ? (
                            <View key={item.id} style={{ width: '100%', height: 80, flexDirection: 'row-reverse' }}>
                                <View style={{ height: 50, width: 50, borderRadius: 25, backgroundColor: 'red' }}></View>
                                <View style={{ borderRadius: 5, backgroundColor: '#ffd4a3', justifyContent: 'center', flexWrap: 'wrap', maxWidth: '80%', margin: 5, padding: 5 }}>
                                    <Text style={{ width: '100%', textAlignVertical: 'center' }}>{item.message}
                                    </Text>
                                    <Text style={{ width: '100%', textAlignVertical: 'center' }}>{item.time}
                                    </Text>
                                </View>
                            </View>
                        )
                            :
                            (
                                <View key={item.id} style={{ width: '100%', height: 80, flexDirection: 'row' }}>
                                    <View style={{ height: 50, width: 50, borderRadius: 25, backgroundColor: 'blue' }}></View>
                                    <View style={{ borderRadius: 5, backgroundColor: '#5fa1ed', justifyContent: 'center', flexWrap: 'wrap', maxWidth: '80%', margin: 5, padding: 5 }}>
                                        <Text style={{ width: '100%', textAlignVertical: 'center', color: 'white' }}>{item.message}
                                        </Text>
                                        <Text style={{ width: '100%', textAlignVertical: 'center', color: 'white' }}>{item.time}
                                        </Text>
                                    </View>
                                </View>
                            )
                    )
                })}
                <View style={{position:'absolute',bottom:130, height: '10%', paddingTop: 10, width: screenWidth, flexDirection: 'row', justifyContent: 'center' }}>
                    <TextInput
                        style={{ marginRight: 10, height: 50, width: '80%', backgroundColor: 'white', borderRadius: 10, borderWidth:1, borderColor:'black'  }}
                        value={this.state.textInputUser}
                        onChangeText={(text) => {
                            this.setState({textInputUser : text})
                        }}
                    />
                    <TouchableOpacity style={{ width: '10%', height: 50, borderRadius: 10, backgroundColor: 'green', justifyContent:'center'}}
                        onPress={() => { this.pushMessage(this.state.textInputUser) }}>
                            <Text style={{color:'white', width:'100%', textAlign:'center'}}>Send</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    pushMessage(data) {
        this.state.chatData.push({
            'id': '0',
            'message': data,
            'time': '06 - 12 - 2020'
        })
        alert(JSON.stringify(this.state.chatData))
    }
}
