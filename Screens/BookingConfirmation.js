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

export default function BookingConfirmation(props) {
    const {navigation} = props; 
    return (
        <View style={styles.container}>
            <View style={styles.head}>
                <Text style={styles.title}>Booking</Text>
            </View>
            <View style={styles.noidung}>
                <Text style={styles.title2}>Booking Details</Text>
                <Image
                    source={require('../assets/imgBooking.png')}
                    style={styles.imgBooking}
                />
                <Text style={styles.txtChucMung}>Congratulations!</Text>
                <Text style={styles.txtChucMung2}>Your booking has been confirmed</Text>
            </View>
            <TouchableOpacity onPress={() => {
                        navigation.navigate("Home")
                    }}>
                    <View style={styles.bookNow}>
                        <Text style={styles.textBookNow}>Go back to Home</Text>
                    </View>
                </TouchableOpacity>
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
        fontSize: 20, // Đặt font size thành 20
    },
    imgBooking: {
        marginTop: 50,
    },
    txtChucMung: {
        textAlign: 'center',
        marginTop: 60,
        fontSize: 30,
    },
    txtChucMung2: {
        textAlign: 'center',
        fontSize: 14,
    },
    bookNow: {
        marginTop: 180,
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
