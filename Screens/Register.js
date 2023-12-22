
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

export default function Register(props) {
    const { navigation } = props;
    const [checked, setChecked] = useState(false);
    const [password, setPassword] = useState('');

    const handlePress = () => {
        setChecked(!checked);
    };
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.textTitle}>Register</Text>
            </View>
            <View style={styles.Illustration4}>
                <Image
                    source={require('../assets/Illustration4.png')}
                />
            </View>
            <View style={styles.VInputfields} >
                <View style={styles.inputfields}>
                    <View style={styles.name}>
                        <Image
                            source={require('../assets/IconName.png')}
                        />
                        <TextInput style={styles.textinput}></TextInput>
                    </View>
                    <View style={styles.email}>
                        <Image
                            source={require('../assets/IconEmail.png')}
                        />
                        <TextInput style={styles.textinput}></TextInput>
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
            <View style={styles.conditions}>
                <View>
                    <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity onPress={handlePress} >
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View
                                style={{
                                    width: 20,
                                    height: 20,
                                    borderRadius: 12,
                                    borderWidth: 2,
                                    borderColor: 'red',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginRight: 8,
                                    backgroundColor: checked ? 'white' : 'white',
                                }}
                            >
                                {checked && (
                                    <View
                                        style={{
                                            width: 12,
                                            height: 12,
                                            borderRadius: 6,
                                            backgroundColor: 'red',
                                        }}
                                    />
                                )}
                            </View>

                        </View>
                    </TouchableOpacity>
                    <Text>I here by agree to the T&C and Privacy Policy.</Text>
                    </View>
                </View>

            </View>
            <View style={styles.member}>
                <Text>Already a member? <View>
                    <TouchableOpacity >
                        <Text style={styles.login}>Login</Text>
                    </TouchableOpacity></View>           here.
                </Text>
            </View>
            <View style={styles.VRegister}>
                <TouchableOpacity style={styles.buttonRegister} onPress={() => {
                    navigation.navigate("Login")
                }}>
                    <Text style={styles.textRegister}> Register</Text>
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
        height: 60,
        width: 375,
        alignItems: 'center',
        justifyContent: 'center',


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
        marginTop: 60,
    },
    name: {
        elevation: 2,
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius: 1,
        paddingLeft: 12,
        height: 60,
        width: 335,
    },
    email: {
        elevation: 2,
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius: 1,
        paddingLeft: 12,
        height: 60,
        width: 335,
        marginTop: 20,
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
        flex :1,
    },

    conditions: {
        paddingLeft: 20,
        flexDirection: 'row',
        height: 20,
        width: 333,
        marginTop: 25,
    },
    textConditions: {
        marginLeft: 15,
        fontSize: 14,
    },

    member: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
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
    textTitle: {
        fontSize: 20,
        //flex: 1,
        textAlign: 'center',
        //marginTop: 25,
    }
});