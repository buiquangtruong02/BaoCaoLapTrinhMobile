import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    Image,
    Button,
    TextInput,
    TouchableOpacity,
} from 'react-native';

export default function Login(props) {
    const {navigation} = props;
    const [password, setPassword] = useState('');
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={{ fontSize: 20 }}>Login</Text>
            </View>
            <View style={styles.Illustration4}>
                <Image
                    source={require('../assets/Illustration4.png')}
                />
            </View>
            <View style={styles.VInputfields} >
                <View style={styles.inputfields}>
                    <View style={styles.Text}>
                        <Text style={styles.Text}>Welcome Back,</Text>
                    </View>
                    <View style={styles.email}>
                        <Image
                            source={require('../assets/IconEmail.png')}
                        />
                        <TextInput style={styles.textinput}>
                            
                        </TextInput>
                    </View>
                    <View style={styles.password}>
      <Image source={require('../assets/IconPassword.png')} />
      <TextInput
        style={styles.textinput}
        secureTextEntry={true}  // Sử dụng prop này để ẩn văn bản và thay thế bằng dấu *
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
    </View>
                </View>
            </View>
            <View>

                <TouchableOpacity >
                    <Text style={styles.forgotpassword}>Forgot Password?</Text>
                </TouchableOpacity>

            </View>
            <View style={styles.member}>
                <Text>Don’t have account? <View>
                    <TouchableOpacity onPress={() => {
                    navigation.navigate("Register")
                    }}>
                        <Text style={styles.login}>Register</Text>
                    </TouchableOpacity></View>                here.
                </Text>
            </View>
            <View style={styles.VRegister}>
                <TouchableOpacity style={styles.buttonRegister} onPress={() => {
                    navigation.navigate("Home")
                    }}>
                    <Text style={styles.textRegister}> Login</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
backgroundColor: 'white',
        height: 61,
        width: 375,
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 18,

    },
    Illustration4: {
        alignItems: 'center',
        marginTop: 50,
    },
    VInputfields: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputfields: {
        alignItems: 'center',
        justifyContent: 'center',

        height: 190,
        width: 335,
        marginTop: 50,
    },
    Text: {
        fontSize: 18,
        height: 22,
        width: 313,
    },
    email: {
        elevation: 2,
        alignItems: 'center',
        flexDirection: 'row',
        paddingLeft: 12,
        height: 60,
        width: 335,
        marginTop: 20,
        borderRadius: 1,
    },
    password: {
        elevation: 2,
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius: 1,
        paddingLeft: 12,
        height: 60,
        width: 335,
        marginTop: 20,
    },
    textinput: {
        marginLeft: 10,
        flex: 1,
    },
    forgotpassword: {
        marginLeft: 259,
        fontSize: 12,
    },
    member: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 35,
        fontSize: 14,
    },
    login: {
        color: 'blue',
        position: 'absolute',
        bottom: -4,
    },
    VRegister: {
        marginTop: 80,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonRegister: {
        borderRadius: 4,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        width: 280,

    },
    textRegister: {
        color: 'white',
        fontSize: 15,
    },
});