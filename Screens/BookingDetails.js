import { StatusBar } from 'expo-status-bar';
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    Dimensions,
    TextInput,
} from 'react-native';

export default function BookingDetails(props) {
    const {navigation} = props;
    return (
        <View style={styles.container}>
            <View style={styles.head}>
                <TouchableOpacity>
                    <Image
                        source={require('../assets/iconTroVe.png')}
                        style={styles.iconTroVe}
                    />
                </TouchableOpacity>
                <Text style={styles.title}>Booking</Text>
            </View>
            <View style={styles.noidung}>
                <Text style={styles.textNoiDung}>Booking Details</Text>
                <View style={styles.txtName}>
                    <View style={styles.inputContainer}>
                        <Image
                            source={require('../assets/iconUser.png')}
                            style={styles.iconUser}
                        />
                        <TextInput
                            style={styles.textInput}
                            placeholder="Name"
                        />
                    </View>
                </View>

                <View style={styles.txtPhoneNumber}>
                    <View style={styles.inputContainer}>
                        <Image
                            source={require('../assets/iconPhoneNumber.png')}
                            style={styles.iconUser}
                        />
                        <TextInput
                            style={styles.textInput}
                            placeholder="Contact Number"
                        />
                    </View>
                </View>

                <View style={styles.txtCheckIn}>
                    <View style={styles.inputContainer}>
                        <Image
                            source={require('../assets/iconLich.png')}
                            style={styles.iconUser}
                        />
                        <TextInput
                            style={styles.textInput}
                            placeholder="Check In"
                        />
                    </View>
                </View>

                <View style={styles.txtPhoneNumber}>
                    <View style={styles.inputContainer}>
                        <Image
                            source={require('../assets/iconLich.png')}
                            style={styles.iconUser}
                        />
                        <TextInput
                            style={styles.textInput}
                            placeholder="Check Out"
                        />
                    </View>
                </View>

                <View style={styles.txtPhoneNumber}>
                    <View style={styles.inputContainer}>
                        <Image
                            source={require('../assets/iconPeople.png')}
                            style={styles.iconUser}
                        />
                        <TextInput
                            style={styles.textInput}
                            placeholder="People"
                        />
                    </View>
                </View>

                <View style={styles.txtPhoneNumber}>
                    <View style={styles.inputContainer}>
                        <Image
                            source={require('../assets/iconRooms.png')}
                            style={styles.iconUser}
                        />
                        <TextInput
                            style={styles.textInput}
                            placeholder="Rooms"
                        />
                    </View>
                </View>
                <TouchableOpacity onPress={() => {
                        navigation.navigate("PaymentCheckout")
                    }} >
                    <View style={styles.bookNow}>
                        <Text style={styles.textBookNow}>Book Now</Text>
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
    textNoiDung: {
        fontSize: 20,
    },
    txtName: {
        marginTop: 20,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 60,
        backgroundColor: 'white',
        elevation: 2,
    },
    iconUser: {
        // width: 20,
        // height: 20,
        marginRight: 15, // Khoảng cách giữa biểu tượng và TextInput
        marginLeft: 15,
    },
    textInput: {
        flex: 1,
    },
    txtPhoneNumber: {
        marginTop: 20,
    },
    txtCheckIn: {
        marginTop: 20,
    },
    bookNow: {
        marginTop: 100,
        height: 50,
        width: 280,
        backgroundColor: '#EF4339',
        alignSelf: 'center', // được sử dụng để căn giữa thành phần con trong phần tử mẹ của nó khi sử dụng bố cục Flexbox. 
        borderRadius: 5,
        justifyContent: 'center', // Để căn giữa theo chiều dọc
    },
    textBookNow: {
        fontSize: 15,
        color: 'white',
        textAlign: 'center',
    }
});
