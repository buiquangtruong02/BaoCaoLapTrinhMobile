import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import BookingDetails from './Screens/BookingDetails';
import PaymentCheckout from './Screens/PaymentCheckout';
import BookingConfirmation from './Screens/BookingConfirmation';
import StarList from './Screens/StarList';
import WriteAReview from './Screens/WriteAReview';
import Profile from './Screens/Profile';
import Home from './Screens/Home';
import Onboarding from './Screens/Onboarding';
import Register from './Screens/Register';
import Login from './Screens/Login';
import AfterSearch from './Screens/AfterSearch';
import TopHotel from './Screens/TopHotel';
import Wishlist from './Screens/Wishlist';
import HotelDescription from './Screens/HotelDescription';
import Reviews from './Screens/Reviews';



const Stack = createStackNavigator();

const MainStackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Onboarding" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="AfterSearch" component={AfterSearch} />
        <Stack.Screen name="TopHotel" component={TopHotel} />
        <Stack.Screen name="Wishlist" component={Wishlist} />
        <Stack.Screen name="PaymentCheckout" component={PaymentCheckout} />
        <Stack.Screen name="BookingConfirmation" component={BookingConfirmation} />
        <Stack.Screen name="StarList" component={StarList} />
        <Stack.Screen name="BookingDetails" component={BookingDetails} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Profile" component={Profile} /> 
        <Stack.Screen name="HotelDescription" component={HotelDescription} />
        <Stack.Screen name="Reviews" component={Reviews} />
        <Stack.Screen name="WriteAReview" component={WriteAReview} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainStackNavigator;
