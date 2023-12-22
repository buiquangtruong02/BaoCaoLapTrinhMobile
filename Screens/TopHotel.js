import { StatusBar } from 'expo-status-bar';
import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    Image,
    Button,
    TextInput,
    TouchableOpacity,
    ScrollView,
} from 'react-native';

export default function TopHotel(props) {
    const { navigation } = props;
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity style={[styles.headerLocation, { flexDirection: 'row', }]} onPress={() => {
                    navigation.goBack()
                }} >
                    <Image
                        source={require('../assets/backIcon.png')}
                        style={[styles.imageMenu, { marginLeft: 15, }]}
                    />
                </TouchableOpacity>
                <Text style={[styles.headerExplore, { marginLeft: 120, fontSize: 18, }]}>Top Hotels</Text>
                <TouchableOpacity style={[styles.headerExplore, { marginLeft: 90, }]} onPress={""}>
                    <Image
                        source={require('../assets/ic_search.png')}
                    />
                </TouchableOpacity>
            </View>
            <ScrollView
                Vertical // Cho phép cuộn dọc
                showsVerticalScrollIndicator={false} // Ẩn thanh cuộn dọc
                contentContainerStyle={styles.scrollViewContent}
            >
                <View style={styles.location}>
                    <Image
                        source={require('../assets/Location.png')}
                        style={[styles.Menuimage, { marginRight: 5, marginTop: 2 }]}
                    />
                    <Text style={[styles.text, { fontSize: 16, }]}>Bangalorea</Text>
                    <TouchableOpacity style={[styles.headerExplore, { marginTop: 5, marginLeft: 185 }]} onPress={""}>
                        <Image
                            source={require('../assets/Filter.png')}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.hotel1}>
                    <View>
                        <Image
                            source={require('../assets/topHT1.png')}
                        />
                        <View style={styles.inforhotel}>
                            <View style={[styles.text, { top: 110, left: 15 }]}>
                                <Text style={[styles.text, { fontSize: 24, color: 'white' }]}>Sarovar Portico</Text>
                                <View style={[styles.text, { flexDirection: 'row', }]}>
                                    <Text style={[styles.text, { fontSize: 14, color: 'white' }]}>4 star hotel • 96%</Text>
                                    <Image
                                        source={require('../assets/IconLike.png')}

                                    />
                                </View>
                            </View>
                            <View>
                                <View style={[styles.text, { top: 120, left: 90 }]}>
                                    <Image
                                        source={require('../assets/moneyHT1.png')}

                                    />
                                    <Text style={[styles.text, { fontSize: 12, color: 'white' }]}>per night</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={[styles.button, { flexDirection: 'row', marginTop: 15 }]}>
                        <TouchableOpacity style={[styles.headerExplore, { flexDirection: 'row', marginLeft: 10, }]} onPress={""}>
                            <Image
                                source={require('../assets/iconSave.png')}
                            />
                            <Text style={[styles.text, { color: 'red', marginLeft: 5 }]}>Save</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonBooknow} onPress={""}>
                            <Text style={[styles.text, { color: 'red' }]}>Booknow</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.hotel1}>
                    <View>
                        <Image
                            source={require('../assets/TopHT2.png')}
                        />
                        <View style={styles.inforhotel}>
                            <View style={[styles.text, { top: 110, left: 15 }]}>
                                <Text style={[styles.text, { fontSize: 24, color: 'white' }]}>Park Plaza</Text>
                                <View style={[styles.text, { flexDirection: 'row', }]}>
                                    <Text style={[styles.text, { fontSize: 14, color: 'white' }]}>4 star hotel • 96%</Text>
                                    <Image
                                        source={require('../assets/IconLike.png')}

                                    />
                                </View>
                            </View>
                            <View>
                                <View style={[styles.text, { top: 120, left: 135 }]}>
                                    <Image
                                        source={require('../assets/moneyHT2.png')}

                                    />
                                    <Text style={[styles.text, { fontSize: 12, color: 'white' }]}>per night</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={[styles.button, { flexDirection: 'row', marginTop: 15 }]}>
                        <TouchableOpacity style={[styles.headerExplore, { flexDirection: 'row', marginLeft: 10, }]} onPress={""}>
                            <Image
                                source={require('../assets/iconSave.png')}
                            />
                            <Text style={[styles.text, { color: 'red', marginLeft: 5 }]}>Save</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonBooknow} onPress={""}>
                            <Text style={[styles.text, { color: 'red' }]}>Booknow</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.hotel1}>
                    <View>
                        <Image
                            source={require('../assets/topHT1.png')}
                        />
                        <View style={styles.inforhotel}>
                            <View style={[styles.text, { top: 110, left: 15 }]}>
                                <Text style={[styles.text, { fontSize: 24, color: 'white' }]}>Sarovar Portico</Text>
                                <View style={[styles.text, { flexDirection: 'row', }]}>
                                    <Text style={[styles.text, { fontSize: 14, color: 'white' }]}>4 star hotel • 96%</Text>
                                    <Image
                                        source={require('../assets/IconLike.png')}

                                    />
                                </View>
                            </View>
                            <View>
                                <View style={[styles.text, { top: 120, left: 90 }]}>
                                    <Image
                                        source={require('../assets/moneyHT1.png')}

                                    />
                                    <Text style={[styles.text, { fontSize: 12, color: 'white' }]}>per night</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={[styles.button, { flexDirection: 'row', marginTop: 15 }]}>
                        <TouchableOpacity style={[styles.headerExplore, { flexDirection: 'row', marginLeft: 10, }]} onPress={""}>
                            <Image
                                source={require('../assets/iconSave.png')}
                            />
                            <Text style={[styles.text, { color: 'red', marginLeft: 5 }]}>Save</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonBooknow} onPress={""}>
                            <Text style={[styles.text, { color: 'red' }]}>Booknow</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>


            <View style={styles.menu}>
                {/* Explore item */}
                <View style={styles.menuItem}>
                    <Image
                        source={require('../assets/explore.png')}
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
                        source={require('../assets/profile1.png')}
                        style={styles.iconmenu}
                    />
                    <TouchableOpacity onPress={() => {
                        navigation.navigate("Profile")
                    }}>
                        <Text style={styles.menuText}>Profile</Text>
                    </TouchableOpacity>

                </View>
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        borderBottomWidth: 1,
        borderBlockColor: '#FFCCCC',
        marginTop: 18,
        height: 51,
        width: 375,
        alignItems: 'center',
        flexDirection: "row",

    },
    notification: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },
    TopHotel: {
        marginRight: 20,
        paddingTop: 10,
        paddingHorizontal: 15,
        flexDirection: 'row',
    },
    buttonMenu: {
        flexDirection: "row",
        justifyContent: 'center',
        marginTop: 20,
    },
    location: {
        flexDirection: 'row',
        marginTop: 20,
        marginLeft: 12,
        borderBottomWidth: 1,
        borderStyle: 'dashed',
        alignItems: "center",
        width: 335,
        height: 40,
    },
    hotel1: {
        marginLeft: 10,
        marginTop: 20,
        width: 335,
        height: 225,
        elevation: 2,
        borderRadius: 2,
    },
    buttonBooknow: {
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: 'red',
        width: 87,
        height: 24,
        marginLeft: 180,
    },
    inforhotel: {
        flexDirection: 'row',
        position: 'absolute',
    },
    menu: {
        //marginTop: 40,
        //flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: 'white',
        height: 60,
    },
    menuText: {
        marginTop: 5,
    },
    menuItem: {
        flexDirection: 'column',
        alignItems: 'center',
        //flex: 1,
    },
});