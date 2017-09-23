import React, { Component } from 'react';
import {
    View, Text, Image, TouchableOpacity
} from 'react-native';
import { FormInput, Button, SocialIcon } from 'react-native-elements';
import styles from './styles'

export default class Login extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image
                    source={require('../truongkhoa.png')}
                    style={{ width: 60, height: 60, alignSelf: 'center', marginTop: 60 }}
                />

                <View style={{ marginTop: 50 }}>
                    <Text style={{ marginLeft: 20, fontSize: 20, color: 'black', marginBottom: 20 }}>Đăng nhập</Text>
                    <FormInput placeholder='SỐ ĐIỆN THOẠI' />
                    <FormInput placeholder='MẬT KHẨU' />

                    <Button
                        title='Đăng nhập'
                        fontSize={20}
                        buttonStyle={{ borderRadius: 20, marginTop: 30, backgroundColor: '#575757' }}
                    />

                    <View style={{ flexDirection: 'row', alignSelf: 'center', marginTop: 30 }}>
                        <TouchableOpacity style={{ marginRight: 10 }}>
                            <SocialIcon light type='facebook' />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <SocialIcon light type='google-plus-official' />
                        </TouchableOpacity>
                    </View>

                </View>

                <View style={{ flexDirection: 'row', marginTop:40 }}>
                    <TouchableOpacity style={{flex:1, alignSelf:'flex-start', marginLeft:20}}>
                        <Text style={styles.loginText}>Đăng kí</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.loginTextView}>
                        <Text style={{ flex: 1, alignSelf: 'flex-end', marginRight:10 }}>Quên mật khẩu?</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
} 