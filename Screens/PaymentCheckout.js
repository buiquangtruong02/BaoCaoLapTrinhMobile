import { StatusBar } from 'expo-status-bar';
import { Shadow } from 'react-native-shadow-2';

import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    Dimensions,
    TextInput,
} from 'react-native';

export default function App() {
    return (
        <View style={styles.container}>
            <View style={styles.head}>
                <TouchableOpacity>
                    <Image
                        source={require('../assets/iconTroVe.png')}
                        style={styles.iconTroVe}
                    />
                </TouchableOpacity>
                <Text style={styles.title}>Payment Options</Text>
            </View>
            <View style={styles.noidung}>
                <Text style={styles.title2}>Amount to be paid</Text>
                <View style={styles.priceContainer}>
                    <Image
                        source={require('../assets/iconTien.png')}
                        style={styles.iconTien}
                    />
                    <Text style={styles.giaTien}>6999.00</Text>
                </View>
                <Text style={styles.txtPhuongThucTT}>Choose a payment method</Text>
                <TouchableOpacity>
                    <View style={styles.txtName}>
                        <View style={styles.khoi}>
                            <Image
                                source={require('../assets/icongooglePay.png')}
                                style={styles.icon}
                            />
                            <Text style={styles.txticon}>Google Pay</Text>
                            <Image
                                source={require('../assets/iconThemThongTin.png')}
                                style={styles.iconThemThongTin}
                            />
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={styles.txtName}>
                        <View style={styles.khoi}>
                            <Image
                                source={require('../assets/iconVisa.png')}
                                style={styles.icon}
                            />
                            <Text style={styles.txticon}>VISA</Text>
                            <Image
                                source={require('../assets/iconThemThongTin.png')}
                                style={styles.iconThemThongTin}
                            />
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={styles.txtName}>
                        <View style={styles.khoi}>
                            <Image
                                source={require('../assets/iconMasterCard.png')}
                                style={styles.icon}
                            />
                            <Text style={styles.txticon}>Master Card</Text>
                            <Image
                                source={require('../assets/iconThemThongTin.png')}
                                style={styles.iconThemThongTin}
                            />
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={styles.txtName}>
                        <View style={styles.khoi}>
                            <Image
                                source={require('../assets/debitCard.png')}
                                style={styles.icon}
                            />
                            <Text style={styles.txticon}>Debit Card</Text>
                            <Image
                                source={require('../assets/iconThemThongTin.png')}
                                style={styles.iconThemThongTin}
                            />
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={styles.txtName}>
                        <View style={styles.khoi}>
                            <Image
                                source={require('../assets/iconPaytm.png')}
                                style={styles.icon}
                            />
                            <Text style={styles.txticon}>Paytm</Text>
                            <Image
                                source={require('../assets/iconThemThongTin.png')}
                                style={styles.iconThemThongTin}
                            />
                        </View>
                    </View>
                </TouchableOpacity>

            </View>
            <StatusBar style="auto" />
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    head: {
        height: 90,
        backgroundColor: 'white',
        elevation: 3,
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconTroVe: {
        marginLeft: 15,
        marginTop: 25,
    },
    title: {
        flex: 1,
        textAlign: 'center',
        fontSize: 20,
        marginTop: 25,
    },
    noidung: {
        marginTop: 20,
        width: 335,
    },
    title2: {
        marginLeft: 105,
        fontSize: 20, // Đặt font size thành 20
    },
    giaTien: {
        marginTop: 20,
        fontSize: 42,
    },
    iconTien: {
        // marginLeft: 35,
        marginTop: 25,
    },
    priceContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    txtPhuongThucTT: {
        marginTop: 20,
        fontSize: 18,
    },
    khoi: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 0.5, // Độ dày của đường viền
        // backgroundColor: 'red',
        height: 65,
    },
    icon: {
        height: 51,
        width: 51,
        marginLeft: 10,
    },
    txticon: {
        width: 225,
        fontSize: 14,
        marginLeft: 30,
    },
});
