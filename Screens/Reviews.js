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

export default function Reviews(props) {
    const { navigation } = props;
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
                <Text style={styles.title}>Ratings</Text>
            </View>
            <View style={styles.noidung}>
                <View style={styles.btnReview}>
                    <TouchableOpacity onPress={() => {
                        navigation.navigate("WriteAReview")
                    }}>
                        <Image
                            source={require('../assets/btnWriteReview.png')}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.Rating}>
                    <Image
                        source={require('../assets/Rating.png')}
                    />

                </View>

                <View style={styles.Rating}>
                    <Image
                        source={require('../assets/TopInfo.png')}
                    />
                    <Text style={styles.cmt}>
                        FAMILY FRIENDLY !!! Stayed for four nights, extremely friendly and cooperative staffs and lovely ambience, the best thing about this place is the quality of the food.
                    </Text>
                </View>

                <View style={styles.Rating}>
                    <Image
                        source={require('../assets/TopInfo2.png')}
                    />
                    <Text style={styles.cmt}>
                        Neat and Clean. Courteous staff. Excellent food, south Indian as well as North Indian. Good location as per my requirements. Away from crowd.
                    </Text>
                </View>

                <View style={styles.Rating}>
                    <Image
                        source={require('../assets/TopInfo3.png')}
                    />
                    <Text style={styles.cmt}>
                        Overall experience was good. only one thing would like to tell is there is no intercom in the room so bit difficult to call them.
                    </Text>
                </View>

                <View style={styles.Rating}>
                    <Image
                        source={require('../assets/TopInfo4.png')}
                    />
                    <Text style={styles.cmt}>
                    They have amazing facilities for senior citizens. They took extra care of us
                    </Text>
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
    btnReview: {
        marginLeft: 230,
    },
    Rating: {
        marginTop: 15,
    },
    cmt: {
        marginTop: 10,

    },
    iconTroVe: {
        marginLeft: 15,
        marginTop: 25,
    },

});
