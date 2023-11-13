import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// import OnBoarding from './screens/OnBoarding';
// import LandingScreen from './screens/LandingScreen';
// import Register from './screens/Register';
// import Login from './screens/Login';
// import ktra0910 from './screens/ktra0910';
import PaymentCheckout from './Screens/PaymentCheckout';
import BookingConfirmation from './Screens/BookingConfirmation'; 
import StarList from './Screens/StarList'; 
import WriteAReview from './Screens/WriteAReview'; 

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // <Login />
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Register' screenOptions={{ headerShown: false }}>
         {/* <Stack.Screen name="LandingScreen" component={LandingScreen} /> */}
        {/* <Stack.Screen name="Register" component={Register} /> */}
        {/* <Stack.Screen name="Login" component={Login} /> */}
        {/* <Stack.Screen name="PaymentCheckout" component={PaymentCheckout} /> */}
        {/* <Stack.Screen name="BookingConfirmation" component={BookingConfirmation} /> */}
        {/* <Stack.Screen name="StarList" component={StarList} /> */}
        <Stack.Screen name="WriteAReview" component={WriteAReview} />
      </Stack.Navigator>
    </NavigationContainer >
  )
}