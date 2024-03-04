//import liraries
import React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, useIsFocused } from "@react-navigation/native";
import TabIcon from './components/TabIcon';

//Screens
import ParentHome from '../screens/menus/parent/Home';
import Children from '../screens/menus/parent/Children';
import Accounting from '../screens/menus/parent/Accounting';
import Profile from '../screens/menus/Profile';


// icon
import home from '../assets/icon/home.png'
import wallet from '../assets/icon/wallet.png'
import student from '../assets/icon/student.png'
import profile from '../assets/icon/profile.png'

// create a component
const ParentNavigator = () => {
    const Tab = createBottomTabNavigator();
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={{ headerShown: false }}>
                <Tab.Screen 
                    name='ParentHome'
                    component={ParentHome}
                    options={{
                        tabBarShowLabel: false,
                        tabBarIcon: ()=>{
                            const isFocused = useIsFocused()
                            return (
                                <>
                                    <TabIcon image={home} isFocused={isFocused}/>
                                </>
                            )
                        }
                    }}
                />
                <Tab.Screen
                    name='Accounting'
                    component={Accounting}
                    options={{
                        tabBarShowLabel: false,
                        tabBarIcon: ()=>{
                            const isFocused = useIsFocused()
                            return (
                                <>
                                    <TabIcon image={wallet} isFocused={isFocused}/>
                                </>
                            )
                        }
                    }}
                />
                <Tab.Screen
                    name='Children'
                    component={Children}
                    options={{
                        tabBarShowLabel: false,
                        tabBarIcon: ()=>{
                            const isFocused = useIsFocused()
                            return (
                                <>
                                    <TabIcon image={student} isFocused={isFocused}/>
                                </>
                            )
                        }
                    }}
                />
                <Tab.Screen
                    name='Profile'
                    component={Profile}
                    options={{
                        tabBarShowLabel: false,
                        tabBarIcon: ()=>{
                            const isFocused = useIsFocused()
                            return (
                                <>
                                    <TabIcon image={profile} isFocused={isFocused}/>
                                </>
                            )
                        }
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

// define your styles
const styles = StyleSheet.create({
    icon: {
        width: 30,
        height: 30,
    },
});

//make this component available to the app
export default ParentNavigator;
