//import liraries
import React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, useIsFocused } from '@react-navigation/native';
import TabIcon from './components/TabIcon';


//Screens
import Home from '../screens/menus/teacher/Home'
import Classroom from '../screens/menus/teacher/Classroom'
import Course from '../screens/menus/teacher/Course'
import Profile from '../screens/menus/Profile'

// icon
import home from '../assets/icon/home.png'
import calendar from '../assets/icon/calendar.png'
import student from '../assets/icon/student.png'
import profile from '../assets/icon/profile.png'


// create a component
const TeacherNavigator = () => {
    const Tab = createBottomTabNavigator();
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={{ headerShown: false }}>
                <Tab.Screen 
                    name='Home' 
                    component={Home}
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
                    name='Course' 
                    component={Course}
                    options={{
                        tabBarShowLabel: false,
                        tabBarIcon: ()=>{
                            const isFocused = useIsFocused()
                            return (
                                <>
                                    <TabIcon image={calendar} isFocused={isFocused}/>
                                </>
                            )
                        }
                    }}
                />
                <Tab.Screen 
                    name='Classroom' 
                    component={Classroom}
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
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

//make this component available to the app
export default TeacherNavigator;
