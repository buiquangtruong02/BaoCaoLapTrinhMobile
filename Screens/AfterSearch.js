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

export default function AfterSearch(props) {
    const {navigation} = props;
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity style={[styles.headerLocation, { flexDirection: 'row', }]} onPress={""}>
                    <Image
                        source={require('../assets/Location.png')}
                        style={[styles.imageMenu, { marginLeft: 15, }]}
                    />
                    <Text> Bangalore</Text>
                </TouchableOpacity>
                <Text style={[styles.headerExplore, { marginLeft: 65, fontSize: 18 }]}>Explore</Text>
                <TouchableOpacity style={[styles.headerExplore, { marginLeft: 115, }]} onPress={""}>
                    <Image
                        source={require('../assets/ic_search.png')}
                        style={[styles.Menuimage, { marginRight: 15, }]}
                    />
                </TouchableOpacity>
            </View>
            <ScrollView
                Vertical // Cho phép cuộn dọc
                showsVerticalScrollIndicator={false} // Ẩn thanh cuộn dọc
                contentContainerStyle={styles.scrollViewContent}
            >
                <View>
                    <View style={styles.notification} >
                        <Image
                            source={require('../assets/notification_box.png')}
                        />
                    </View>
                    <View>
                        <View>
                            <View>
                                <View style={[styles.nd1, { flexDirection: 'row', marginLeft: 15, marginTop: 20, }]}>
                                    <Text style={[styles.textTopHotel, { fontSize: 16, }]}>Top Hotels</Text>
                                    <TouchableOpacity >
                                        <Text style={[styles.textViewAll, { fontSize: 14, color: 'red', marginLeft: 210, }]}>View all</Text>
                                    </TouchableOpacity>
                                </View>
                                <ScrollView
                                    horizontal // Cho phép cuộn ngang
                                    showsHorizontalScrollIndicator={false} // Ẩn thanh cuộn ngang
                                    contentContainerStyle={styles.scrollViewContent}
                                >
                                    <View style={styles.TopHotel}>
                                        <View style={[styles.img, { width: 160, height: 168, elevation: 1, borderRadius: 1, }]}>
                                            <Image
                                                source={require('../assets/ht1.png')}
                                                style={[styles.image, { width: 160, height: 100, }]}
                                            />
                                            <Text style={[styles.NameHotel, { fontSize: 16, marginLeft: 10, marginTop: 10 }]}>Sheraton Grand</Text>
                                            <View style={[styles.money, { flexDirection: 'row' }]}>
                                                <Image
                                                    source={require('../assets/money.png')}
                                                    style={[styles.image, { marginTop: 5, marginLeft: 10, }]}
                                                />
                                                <Text> 5999</Text>
                                            </View>
                                        </View>
                                        <View style={[styles.img, { width: 160, height: 168, elevation: 1, borderRadius: 1, marginLeft: 20, }]}>
                                            <Image
                                                source={require('../assets/ht2.png')}
                                                style={[styles.image, { width: 160, height: 100, }]}
                                            />
                                            <Text style={[styles.NameHotel, { fontSize: 16, marginLeft: 10, marginTop: 10 }]}>Sheraton Grand</Text>
                                            <View style={[styles.money, { flexDirection: 'row' }]}>
                                                <Image
                                                    source={require('../assets/money.png')}
                                                    style={[styles.image, { marginTop: 5, marginLeft: 10, }]}
                                                />

                                                <Text> 6999</Text>
                                            </View>
                                        </View>
                                        <View style={[styles.img, { width: 160, height: 168, elevation: 1, borderRadius: 1, marginLeft: 20, }]}>
                                            <Image
                                                source={require('../assets/ht3.png')}
                                                style={[styles.image, { width: 160, height: 100, }]}
                                            />
                                            <Text style={[styles.NameHotel, { fontSize: 16, marginLeft: 10, marginTop: 10 }]}>Sheraton Grand</Text>
                                            <View style={[styles.money, { flexDirection: 'row' }]}>
                                                <Image
                                                    source={require('../assets/money.png')}
                                                    style={[styles.image, { marginTop: 5, marginLeft: 10, }]}
                                                />

                                                <Text> 3999</Text>
                                            </View>
                                        </View>
                                    </View>
                                </ScrollView>
                            </View>
                        </View>
                    </View>
                    <View>
                        <View>
                            <View>
                                <View style={[styles.nd1, { flexDirection: 'row', marginLeft: 15, marginTop: 20, }]}>
                                    <Text style={[styles.textTopHotel, { fontSize: 16, }]}>Top Deals</Text>
                                    <TouchableOpacity >
                                        <Text style={[styles.textViewAll, { fontSize: 14, color: 'red', marginLeft: 210, }]}>View all</Text>
                                    </TouchableOpacity>
                                </View>
                                <ScrollView
                                    horizontal // Cho phép cuộn ngang
                                    showsHorizontalScrollIndicator={false} // Ẩn thanh cuộn ngang
                                    contentContainerStyle={styles.scrollViewContent}
                                >
                                    <View style={styles.TopHotel}>
                                        <View style={[styles.img, { width: 160, height: 168, elevation: 1, borderRadius: 1, }]}>
                                            <Image
                                                source={require('../assets/ht3.png')}
                                                style={[styles.image, { width: 160, height: 100, }]}
                                            />
                                            <Text style={[styles.NameHotel, { fontSize: 16, marginLeft: 10, marginTop: 10 }]}>Sheraton Grand</Text>
                                            <View style={[styles.money, { flexDirection: 'row' }]}>
                                                <Image
                                                    source={require('../assets/money.png')}
                                                    style={[styles.image, { marginTop: 5, marginLeft: 10, }]}
                                                />

                                                <Text> 5999</Text>
                                            </View>
                                        </View>
                                        <View style={[styles.img, { width: 160, height: 168, elevation: 1, borderRadius: 1, marginLeft: 20, }]}>
                                            <Image
                                                source={require('../assets/ht4.png')}
                                                style={[styles.image, { width: 160, height: 100, }]}
                                            />
                                            <Text style={[styles.NameHotel, { fontSize: 16, marginLeft: 10, marginTop: 10 }]}>Sheraton Grand</Text>
                                            <View style={[styles.money, { flexDirection: 'row' }]}>
                                                <Image
                                                    source={require('../assets/money.png')}
                                                    style={[styles.image, { marginTop: 5, marginLeft: 10, }]}
                                                />

                                                <Text> 6999</Text>
                                            </View>
                                        </View>
                                        <View style={[styles.img, { width: 160, height: 168, elevation: 1, borderRadius: 1, marginLeft: 20, }]}>
                                            <Image
                                                source={require('../assets/ht3.png')}
                                                style={[styles.image, { width: 160, height: 100, }]}
                                            />
                                            <Text style={[styles.NameHotel, { fontSize: 16, marginLeft: 10, marginTop: 10 }]}>Sheraton Grand</Text>
                                            <View style={[styles.money, { flexDirection: 'row' }]}>
                                                <Image
                                                    source={require('../assets/money.png')}
                                                    style={[styles.image, { marginTop: 5, marginLeft: 10, }]}
                                                />

                                                <Text> 3999</Text>
                                            </View>
                                        </View>
                                    </View>
                                </ScrollView>
                            </View>
                        </View>
                    </View>
                    <View>
                        <View>
                            <View>
                                <View style={[styles.nd1, { flexDirection: 'row', marginLeft: 15, marginTop: 20, }]}>
                                    <Text style={[styles.textTopHotel, { fontSize: 16, }]}>Top Hotels</Text>
                                    <TouchableOpacity >
                                        <Text style={[styles.textViewAll, { fontSize: 14, color: 'red', marginLeft: 210, }]}>View all</Text>
                                    </TouchableOpacity>
                                </View>
                                <ScrollView
                                    horizontal // Cho phép cuộn ngang
                                    showsHorizontalScrollIndicator={false} // Ẩn thanh cuộn ngang
                                    contentContainerStyle={styles.scrollViewContent}
                                >
                                    <View style={styles.TopHotel}>
                                        <View style={[styles.img, { width: 160, height: 168, elevation: 1, borderRadius: 1, }]}>
                                            <Image
                                                source={require('../assets/ht1.png')}
                                                style={[styles.image, { width: 160, height: 100, }]}
                                            />
                                            <Text style={[styles.NameHotel, { fontSize: 16, marginLeft: 10, marginTop: 10 }]}>Sheraton Grand</Text>
                                            <View style={[styles.money, { flexDirection: 'row' }]}>
                                                <Image
                                                    source={require('../assets/money.png')}
                                                    style={[styles.image, { marginTop: 5, marginLeft: 10, }]}
                                                />
                                                <Text> 5999</Text>
                                            </View>
                                        </View>
                                        <View style={[styles.img, { width: 160, height: 168, elevation: 1, borderRadius: 1, marginLeft: 20, }]}>
                                            <Image
                                                source={require('../assets/ht2.png')}
                                                style={[styles.image, { width: 160, height: 100, }]}
                                            />
                                            <Text style={[styles.NameHotel, { fontSize: 16, marginLeft: 10, marginTop: 10 }]}>Sheraton Grand</Text>
                                            <View style={[styles.money, { flexDirection: 'row' }]}>
                                                <Image
                                                    source={require('../assets/money.png')}
                                                    style={[styles.image, { marginTop: 5, marginLeft: 10, }]}
                                                />

                                                <Text> 6999</Text>
                                            </View>
                                        </View>
                                        <View style={[styles.img, { width: 160, height: 168, elevation: 1, borderRadius: 1, marginLeft: 20, }]}>
                                            <Image
                                                source={require('../assets/ht3.png')}
                                                style={[styles.image, { width: 160, height: 100, }]}
                                            />
                                            <Text style={[styles.NameHotel, { fontSize: 16, marginLeft: 10, marginTop: 10 }]}>Sheraton Grand</Text>
                                            <View style={[styles.money, { flexDirection: 'row' }]}>
                                                <Image
                                                    source={require('../assets/money.png')}
                                                    style={[styles.image, { marginTop: 5, marginLeft: 10, }]}
                                                />

                                                <Text> 3999</Text>
                                            </View>
                                        </View>
                                    </View>
                                </ScrollView>
                            </View>
                        </View>
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