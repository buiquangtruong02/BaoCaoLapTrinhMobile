import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Image, FlatList, TouchableOpacity, StyleSheet, Text, TextInput } from 'react-native';

const StarList = () => {
    const [selectedStar, setSelectedStar] = useState(null);

    const stars = [
        { id: 1, image: require('../assets/Star.png') },
        { id: 2, image: require('../assets/Star.png') },
        { id: 3, image: require('../assets/Star.png') },
        { id: 4, image: require('../assets/Star.png') },
        { id: 5, image: require('../assets/Star.png') },
    ];

    const renderItem = ({ item }) => (
        <TouchableOpacity onPress={() => handleStarPress(item.id)}>
            <Image
                source={item.image}
                style={[
                    styles.starImage,
                    selectedStar && selectedStar >= item.id ? { tintColor: 'yellow' } : { tintColor: 'black' },
                ]}
            />
        </TouchableOpacity>
    );

    const handleStarPress = (starId) => {
        setSelectedStar(starId);
    };

    return (
        <View>
            <FlatList
                data={stars}
                keyExtractor={item => item.id.toString()}
                renderItem={renderItem}
                horizontal
            />
        </View>
    );
};

const App = () => {
    return (
        <View style={styles.container}>
            <View style={styles.head}>
                <TouchableOpacity onPress={() => {
                    navigation.goBack()
                }}>
                    <Image
                        source={require('../assets/iconTroVe.png')}
                        style={styles.iconTroVe}
                    />
                </TouchableOpacity>
                <Text style={styles.title}>Write A Review</Text>
            </View>
            <View style={styles.noidung}>
                <View style={styles.ngoiSao}>
                    <StarList />
                </View>
                <View style={styles.txtChamSao}>
                    <Text >Tap a star to rate</Text>
                </View>
                <View style={styles.textReview}>
                    <TextInput
                        placeholder="Review..."
                    />
                </View>
            </View>
            <StatusBar style="auto" />

        </View>
    );
};

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
        height: 60,
    },
    starImage: {
        width: 25,
        height: 25,
        margin: 5,
    },
    ngoiSao: {
        marginTop: 15,
        alignItems: 'center',
    },
    txtChamSao: {
        alignItems: 'center',
        fontSize: 23,
    },
    textReview: {
        marginTop: 15,
        height: 217,
        width: 335,
        backgroundColor: 'white', // You might need to set a background color for elevation to be visible
        padding: 10, // Add padding for better appearance
        borderRadius: 8, // Add border radius for a rounded appearance
    },
    iconTroVe: {
        marginLeft: 15,
        marginTop: 25,
    },

});

export default App;
