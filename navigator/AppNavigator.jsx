import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';

//Screens
import Landing from '../screens/Landing'
import Register from '../screens/auth/Register'
import Login from '../screens/auth/Login'
import ForgetPassword from '../screens/auth/ForgetPassword'

const AppNavigator = () => {
    const Stack = createNativeStackNavigator()
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen name='Landing' component={Landing} />
                <Stack.Screen name='Register' component={Register} />
                <Stack.Screen name='Login' component={Login} />
                <Stack.Screen name='ForgetPassword' component={ForgetPassword} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator