import { StatusBar } from 'expo-status-bar';
import React, { useRef, useState } from 'react';
import AppIntroSlider from 'react-native-app-intro-slider';
import { NavigationContainer } from '@react-navigation/native';


import {
    SafeAreaView,
    StyleSheet,
    View,
    Text,
    Image,
    Button,
    TouchableOpacity,
} from 'react-native';
const RenderItem = ({ item }) => {
    return (
        <View
            style={{
                flex: 1,
                backgroundColor: item.backgroundColor,
                alignItems: 'center',
                paddingBottom: 100,
            }}>
            <Image
                style={[
                    styles.introImageStyle,
                    {
                        width: item.imageWidth || 200, // Sử dụng kích thước cụ thể từ dữ liệu hoặc giá trị mặc định là 200
                        height: item.imageHeight || 200,
                        marginTop: item.imageMarginTop || 10,
                    },
                ]}
                source={item.image}
            />
            <Text
                style={{
                    fontSize: item.titleFontSize || 20,
                    color: item.titleColor || 'red',
                    fontWeight: item.titleFontWeight || 'bold',
                    marginTop: item.titleMarginTop || 10, // Khoảng cách dưới title
                    textAlign: 'center',
                }}
            >
                {item.title}
            </Text>
            <Text
                style={{
                    fontSize: item.textFontSize || 16,
                    marginTop: item.textMarginTop || 10, // Khoảng cách dưới text
                    textAlign: 'center',
                }}
            >
                {item.text}
            </Text>
        </View>

    );
};

export default function Onboarding(props) {
    const {navigation} = props;
    const [activeIndex, setActiveIndex] = useState(0);
    const [slideChanged, setSlideChanged] = useState(false); // Thêm state slideChanged
    const sliderRef = useRef(null);

    const onNextButton = () => {
        if (!slideChanged && sliderRef.current) { // Kiểm tra slideChanged trước khi chuyển slide mới
            setSlideChanged(true); // Đánh dấu rằng slide đang thay đổi
            sliderRef.current.goToSlide(activeIndex + 1);
            setActiveIndex(activeIndex + 1);
        }
    };
    const onDoneButton = () => {
        navigation.navigate("Register");
        // Xử lý khi người dùng click Done
        // Ví dụ: Đóng màn hình giới thiệu, chuyển sang màn hình chính của ứng dụng
        // Thường là điều hướng đến trang chính sau khi hoàn thành giới thiệu
    };

    const _renderNextButton = () => {
        return (
            <TouchableOpacity onPress={onDoneButton} style={styles.buttonNext}>
                <Text style={{ color: 'white' }}>Next</Text>
                
            </TouchableOpacity>

        );

    };

    const _renderDoneButton = () => {
        return (
            <TouchableOpacity  onPress={() => {
                navigation.navigate("Register")
            }} style={styles.buttonNext}>
                <Text style={{ color: 'white' }}>Done</Text>
                
            </TouchableOpacity>

        );
    };

    return (
        
        
        <AppIntroSlider
            renderItem={RenderItem}
            data={slides}
            onPress={onDoneButton}
            renderNextButton={_renderNextButton}
            renderDoneButton={_renderDoneButton}
            ref={sliderRef}
        />
        
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 191,
    },
    buttonNext: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 280,
        height: 40,
        position: 'absolute',
        right: 24,
        top: -50,
        backgroundColor: 'red',

    },
    buttonDone: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 280,
        height: 40,
        position: 'absolute',
        right: 24,
        top: -50,
        backgroundColor: 'red',
    },

});


const slides = [
    {
        key: 's1',
        image: require('../assets/Illustration.png'),
        imageWidth: 208, // Thiết lập kích thước cho slide 3
        imageHeight: 212,
        imageMarginTop: 91,
        title: 'Search and save your preference',
        titleMarginTop: 80,
        text: 'Browse best hotels from 40,000+ database that fits your unique needs',
        textMarginTop: 20,
    },
    {
        key: 's2',
        image: require('../assets/Illustration2.png'),
        imageWidth: 249, // Thiết lập kích thước cho slide 3
        imageHeight: 212,
        imageMarginTop: 91,
        title: 'Find the best deals',
        titleMarginTop: 80,
        text: 'Find the best deals from any season and book from a curated list',
        textMarginTop: 20,
    },
    {
        key: 's3',
        image: require('../assets/Illustration3.png',),
        imageWidth: 249, // Thiết lập kích thước cho slide 3
        imageHeight: 110,
        imageMarginTop: 142,
        title: 'Book and enjoy your stay',
        titleMarginTop: 131,
        text: 'Select the hotel and date as per your preference to book and have a pleasant stay',
        textMarginTop: 20,
    },
];