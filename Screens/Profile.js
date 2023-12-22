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
    TouchableHighlight,
} from 'react-native';

export default function Profile(props) {
    const { navigation } = props;
    return (
        <View style={styles.container}>
            <View style={styles.head}>
                <Text style={styles.title}>Profile</Text>
            </View>
            <View style={styles.noidung}>
                <View style={styles.anhDaiDien}>
                    <Image
                        source={require('../assets/Avatar.png')}
                        style={styles.anhDaiDien}
                    />
                    <Text style={styles.Ten}>Bùi Quang Trường</Text>
                </View>

                <TouchableOpacity>
                    <View style={styles.txtName}>
                        <View style={styles.khoi}>
                            <Text style={styles.txticon}>My Account</Text>
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
                            <Text style={styles.txticon}>Payments & Refunds</Text>
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
                            <Text style={styles.txticon}>Past Bookings</Text>
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
                            <Text style={styles.txticon}>Help & Support</Text>
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
                            <Text style={styles.txticon}>Privacy Policy</Text>
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
                            <Text style={styles.txticon}>Logout</Text>
                            <Image
                                source={require('../assets/iconThemThongTin.png')}
                                style={styles.iconThemThongTin}
                            />
                        </View>
                    </View>
                </TouchableOpacity>
            </View>

            <View style={styles.menu}>
                {/* Explore item */}
                <View style={styles.menuItem}>
                    <Image
                        source={require('../assets/IconExplore2.png')}
                        style={styles.iconmenu}
                    />
                    <TouchableOpacity onPress={() => {
                        navigation.navigate("Home")
                    }}>

                        <Text style={styles.menuText}>Explore</Text>
                    </TouchableOpacity>

                </View>

                {/* Wishlist item */}
                <View style={styles.menuItem}>
                    <Image
                        source={require('../assets/IconWishlist.png')}
                        style={styles.iconmenu}
                    />
                    <TouchableOpacity onPress={() => {
                        navigation.navigate("Wishlist")
                    }}>
                        <Text style={styles.menuText}>Wishlist</Text>
                    </TouchableOpacity>

                </View>

                {/* Profile item */}
                <View style={styles.menuItem}>
                    <Image
                        source={require('../assets/profile.png')}
                        style={styles.iconmenu}
                    />
                    <TouchableOpacity>
                        <Text style={styles.menuText}>Profile</Text>
                    </TouchableOpacity>

                </View>
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
    khoi: {
        // marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 0.5, // Độ dày của đường viền
        // backgroundColor: 'red',
        height: 65,
    },
    txticon: {
        width: 225,
        fontSize: 19,
        // marginLeft: 30,
    },
    iconThemThongTin: {
        marginLeft: 100,
    },
    anhDaiDien: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    Ten: {
        marginLeft: 20,
    },
    menu: {
        marginTop: 160,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: 'white',
    },
    menuText: {
        marginTop: 5,
    },
    menuItem: {
        flexDirection: 'column',
        alignItems: 'center',
        flex: 1,
    },
  

});
