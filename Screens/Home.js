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
import MainStackNavigator from '../App';
export default function Home(props) {
    const {navigation} = props;
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={{ fontSize: 20 }}>Explore</Text>
            </View>
            <ScrollView
                Vertical // Cho phép cuộn dọc
                showsVerticalScrollIndicator={false} // Ẩn thanh cuộn dọc
                contentContainerStyle={styles.scrollViewContent}
            >
                <View>
                    <View style={styles.VInputfields} >
                        <View style={styles.inputfields}>
                            <View style={styles.location}>
                                <Image
                                    source={require('../assets/Iconlocation.png')}
                                />
                                <TextInput style={styles.textinput}></TextInput>
                            </View>
                            <View style={styles.startdate}>
                                <Image
                                    source={require('../assets/IconCalendar.png')}
                                />
                                 <TextInput style={styles.textinput}></TextInput>
                            </View>
                            <View style={styles.enddate}>
                                <Image
                                    source={require('../assets/IconCalendar.png')}
                                />
                                <TextInput style={styles.textinput}></TextInput>
                            </View>
                            <View style={styles.people}>
                                <Image
                                    source={require('../assets/iconPeople3.png')}
                                />
                                <TextInput style={styles.textinput}></TextInput>
                            </View>
                        </View>
                    </View>
                    <View style={styles.Search}>
                        <View>
                            <TouchableOpacity style={styles.buttonSearch}
                            onPress={() => {
                                navigation.navigate("AfterSearch")
                                }}>
                                
                                <Text style={styles.textSearch}>Search</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.searchLocation}>
                            <Image
                                source={require('../assets/Iconlocation.png')}
                            />
                        </View>
                    </View>
                    <View>
                        <View>
                            <View>
                                <View style={[styles.nd1, { flexDirection: 'row', marginLeft: 15, marginTop: 20, }]}>
                                    <Text style={[styles.textTopHotel, { fontSize: 16, }]}>Top Hotels</Text>
                                    <TouchableOpacity 
                                    onPress={() => {
                                        navigation.navigate("TopHotel")
                                    }}
                                    >
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
                                                    source={require('../assets/deal1.png')}
                                                    style={[styles.image, { marginTop: 1, marginLeft: 10, }]}
                                                />
                                                <Image
                                                    source={require('../assets/money.png')}
                                                    style={[styles.image, { marginTop: 5, marginLeft: 10, }]}
                                                />

                                                <Text style={[styles.image, { color: 'red' }]}> 2999</Text>
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
                                                    source={require('../assets/deal2.png')}
                                                    style={[styles.image, { marginTop: 1, marginLeft: 10, }]}
                                                />
                                                <Image
                                                    source={require('../assets/money.png')}
                                                    style={[styles.image, { marginTop: 5, marginLeft: 10, }]}
                                                />

                                                <Text style={[styles.image, { color: 'red' }]}> 1999</Text>
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
                                                    source={require('../assets/deal1.png')}
                                                    style={[styles.image, { marginTop: 1, marginLeft: 10, }]}
                                                />
                                                <Image
                                                    source={require('../assets/money.png')}
                                                    style={[styles.image, { marginTop: 5, marginLeft: 10, }]}
                                                />

                                                <Text style={[styles.image, { color: 'red' }]}> 2999</Text>
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
        backgroundColor: 'white',
        height: 61,
        width: 375,
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: 18,
    },
    VInputfields: {
        alignItems: 'center',
        justifyContent: 'center',
        witdth: 335,
        height: 320,
    },
    inputfields: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 190,
        width: 335,
        marginTop: 50,
    },
    location: {
        elevation: 2,
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius: 1,
        paddingLeft: 12,
        height: 60,
        width: 335,
    },
    textinput: {
        marginLeft: 10,
        flex:1,
    },
    startdate: {
        elevation: 2,
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius: 1,
        paddingLeft: 12,
        height: 60,
        width: 335,
        marginTop: 20,
    },
    enddate: {
        elevation: 2,
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius: 1,
        paddingLeft: 12,
        height: 60,
        width: 335,
        marginTop: 20,
    },
    people: {
        elevation: 2,
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius: 1,
        paddingLeft: 12,
        height: 60,
        width: 335,
        marginTop: 20,
    },
    Search: {
        flexDirection: "row",
        marginTop: 40,
    },
    buttonSearch: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
        width: 265,
        height: 50,
        marginLeft: 15,
        backgroundColor: 'red',
    },
    textSearch: {
        fontSize: 13,
        color: 'white',
    },
    searchLocation: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius:4,
        borderWidth: 1.5,
        borderColor: 'red',
        marginLeft: 10,
        width: 55,
        height: 50,
    },

    TopHotel: {
        marginRight: 20,
        paddingTop: 10,
        paddingHorizontal: 15,
        flexDirection: 'row',
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