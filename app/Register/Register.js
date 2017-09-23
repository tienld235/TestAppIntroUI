import React, { Component } from 'react';
import {
    View, Text, Image, TouchableOpacity
} from 'react-native';
import {
    FormLabel, FormInput, Button, SocialIcon
} from 'react-native-elements';
import styles from './styles';

export default class Register extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={{ flexDirection: 'row' }}>
                    <Image
                        source={require('../truongkhoa.png')}
                        style={{ width: 60, height: 60, marginTop: 20, marginLeft: 10 }}
                    />
                    <TouchableOpacity style={styles.loginTextView}>
                        <Text style={styles.loginText}>Đăng nhập</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.inputView}>
                    <FormInput placeholder='HỌ TÊN' />
                    <FormInput placeholder='SỐ ĐIỆN THOẠI' />
                    <FormInput placeholder='MẬT KHẨU' />
                </View>

                <Button
                    title='Đăng kí'
                    fontSize={20}
                    buttonStyle={{ borderRadius: 20, marginTop: 30, backgroundColor: '#575757' }}

                />

                <View style={{ flexDirection: 'row', marginLeft: 30, marginTop: 60 }}>
                    <Text style={{ marginTop: 23, color: 'black' }}> Hoặc đăng nhập bằng:</Text>
                    <View style={{ flexDirection: 'row', marginLeft: 35 }}>
                        <TouchableOpacity>
                            <SocialIcon light type='facebook' />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <SocialIcon light type='google-plus-official' />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ marginTop: 20, marginLeft: 10 }}>
                    <Text>Bằng việc đăng nhập đăng kí{'\n'}</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Text>Bạn đã đồng ý với </Text>
                        <TouchableOpacity><Text style={{ color: 'black', fontWeight: 'bold' }}>điều khoản sử dụng</Text></TouchableOpacity>
                        <Text> của chúng tôi</Text>
                    </View>
                </View>
            </View>
        )
    }
}