import React, { useState } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    TouchableOpacity,
} from 'react-native';

export default function HotelDescription(props) {
    const { navigation } = props; 
    return (
        <View style={styles.container}>
            <View>
                <Image
                    source={require('../assets/imgDescription.png')}
                />
                <View style={styles.buttonGalleryandBack}>
                    <TouchableOpacity onPress={() => {
                        navigation.goBack()
                    }} >
                        <Image
                            source={require('../assets/iconBack2.png')}
                            style={[styles.text, { top: 30, left: 15, }]}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.buttonGallery} onPress={""}>
                        <Text style={[styles.text, { fontSize: 20, color: 'white', marginRight: 3, }]}>Gallery</Text>
                        <Image
                            source={require('../assets/iconGallery.png')}
                        />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={[styles.text, { flexDirection: 'row', marginTop: 15 }]}>
                <Text style={[styles.text, { fontSize: 20, marginLeft: 20 }]}>Park Plaza</Text>
                <Text style={[styles.text, { fontSize: 8, color: 'red', marginTop: 12, marginLeft: 8 }]}> Most viewed</Text>
            </View>
            <View>
                <Text style={[styles.text, { fontSize: 14, marginLeft: 10 }]}>Marathalli, Bangalore - Show in Map</Text>
            </View>
            <View>
                <Text style={[styles.text, { fontSize: 14, marginLeft: 20 }]}>Nestled  in the  heart  of Bengaluru,
                    the Park  Plaza provides an  upscale  home base with  easy access to Bengaluru's Central Business
                    District. Our stylish hotel is conveniently located within a 5km radius of business and  entertainment
                    hot  spots and approx.  40-minute drive from Kempegowda International Aiport (BLR)</Text>
            </View>
            <View style={[styles.contact, { flexDirection: 'row', marginTop: 15, }]}>
                <Image
                    source={require('../assets/IconEmail.png')}
                    style={[styles.icon, { marginTop: 4, marginLeft: 20 }]}
                />
                <Text style={[styles.text, { marginLeft: 7 }]}>parkplaza@gmail.com</Text>
                <Image
                    source={require('../assets/iconPhone.png')}
                    style={[styles.img, { marginTop: 4, marginLeft: 40 }]}
                />
                <Text style={[styles.text, { marginLeft: 7 }]}>+91-8729838721</Text>
            </View>
            <View style={[styles.infor, { flexDirection: 'row', justifyContent: 'space-between' }]}>
                <View style={[styles.text, { marginLeft: 20, marginTop: 10 }]}>
                    <Text>Price</Text>
                    <View style={[styles.img, { flexDirection: 'row' }]}>
                        <Image
                            source={require('../assets/money.png')}
                            style={[styles.image, { marginTop: 5, }]}
                        />
                        <Text> 6999</Text>
                    </View>
                </View>
                <View style={[styles.text, { marginTop: 10 }]}>
                    <Image
                        source={require('../assets/Ratings.png')}
                        style={[styles.image, { marginTop: 3, }]}
                    />
                </View>
                <TouchableOpacity onPress={() => {
                        navigation.navigate("Reviews")
                    }}>
                       <View style={[styles.text, { marginTop: 10 }]}>
                    <Image
                        source={require('../assets/Reviews.png')}
                        style={[styles.image, { marginTop: 4, }]}
                    />
                </View>
                    </TouchableOpacity>
                
            </View>
            <View style={[styles.text, { width: 320, height: 68, marginTop: 80, marginLeft: 20 }]}>
                <View>
                    <Text>Amenities</Text>
                </View>
                <View style={[styles.text, { flexDirection: 'row', justifyContent: 'space-between' }]}>
                    <View>
                        <View style={styles.amenities} >
                            <Image
                                source={require('../assets/iconWifi.png')}
                            />
                        </View>
                        <Text style={[styles.text, { marginLeft: 2, marginTop: 5 }]}> Free Wifi</Text>
                    </View>
                    <View>
                        <View style={styles.amenities} >
                            <Image
                                source={require('../assets/iconBreakfast.png')}
                            />
                        </View>
                        <Text style={[styles.text, { marginLeft: 2, marginTop: 5 }]}>Breakfast</Text>
                    </View>
                    <View>
                        <View style={styles.amenities} >
                            <Image
                                source={require('../assets/iconPets.png')}
                            />
                        </View>
                        <Text style={[styles.text, { marginLeft: 17, marginTop: 5 }]}>Pets</Text>
                    </View>
                    <View>
                        <View style={styles.amenities} >
                            <Image
                                source={require('../assets/iconBar.png')}
                            />
                        </View>
                        <Text style={[styles.text, { marginLeft: 22, marginTop: 5 }]}>Bar</Text>
                    </View>
                    <View>
                        <View style={styles.amenities} >
                            <Image
                                source={require('../assets/iconPool.png')}
                            />
                        </View>
                        <Text style={[styles.text, { marginLeft: 19, marginTop: 5 }]}>Pool</Text>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.amenities} onPress={""}>
                            <Image
                                source={require('../assets/iconMore.png')}
                            />
                        </TouchableOpacity>
                        <Text style={[styles.text, { marginLeft: 17, marginTop: 5 }]}>More</Text>
                    </View>
                </View>
            </View>
            <View style={styles.Booknow}>
                <View>
                    <TouchableOpacity style={styles.buttonBooknow} onPress={() => {
                            navigation.navigate("BookingDetails")
                        }}>
                        <Text style={styles.textBooknow}>Book Now</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.booknowSave} onPress={""}>
                    <Image
                        source={require('../assets/iconSave.png')}
                    />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    buttonGalleryandBack: {
        position: 'absolute',
        flexDirection: 'row',
    },
    buttonGallery: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        marginRight: 15,
        backgroundColor: 'red',
        width: 100,
        height: 40,
        top: 227,
        left: 250,
    },
    amenities: {
        alignItems: 'center',
        justifyContent: 'center',
        elevation: 1,
        borderRadius: 2,
        width: 35,
        height: 35,
        marginLeft: 15,
        marginTop: 10,
    },
    Booknow: {
        flexDirection: "row",
        marginTop: 27,
    },
    buttonBooknow: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
        width: 265,
        height: 50,
        marginLeft: 15,
        backgroundColor: 'red',
    },
    textBooknow: {
        fontSize: 13,
        color: 'white',
    },
    booknowSave: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
        borderWidth: 1.5,
        borderColor: 'red',
        marginLeft: 10,
        width: 55,
        height: 50,
    },
});