//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import logo from '../assets/logo/logo.png';
import { useAuth } from '../context/AuthContext';

// create a component
const Landing = ({ navigation }) => {
    const { setRole } = useAuth()
    return (
        <View style={styles.container}>

            <View style={styles.violetBlock}>

                <Text style={styles.welcome}>
                    Bienvenu sur
                </Text>

                <View>
                    <Image source={logo} />
                </View>

                <Text style={styles.paragraph}>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                </Text>

            </View>

            <View style={styles.layout}>
                <Text style={styles.quesion}>
                    Êtes - vous un parent ou un professeur ?
                </Text>
                <Pressable style={styles.parentButton}
                    onPress={()=> { 
                        navigation.navigate('Register');
                        setRole('Parent')
                    }}
                >
                    <Text style={styles.parentButtonText}>Un parent</Text>
                </Pressable>
                <Pressable style={styles.teacherButton}
                    onPress={()=> { 
                        navigation.navigate('Register');
                        setRole('Teacher')
                    }}
                >
                    <Text style={styles.teacherButtonText}>Un professeur</Text>
                </Pressable>
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#8502DB',
    },
    violetBlock: {
        height: '55%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    welcome: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 35,
        textAlign: 'center'
    },
    paragraph: {
        maxWidth: '70%',
        textAlign: 'center',
        color: 'white'
    },
    layout: {
        backgroundColor: 'white',
        height: '45%',
        width: '100%',
        borderTopEndRadius: 40,
        borderTopStartRadius: 40,
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    quesion: {
        marginTop: 40,
        fontSize: 25,
        maxWidth: '65%',
        textAlign: 'center',
        fontWeight: '600',
        color: '#383939',
    },
    parentButton: {
        color: 'white',
        backgroundColor: '#8502DB',
        width: '75%',
        paddingHorizontal:10,
        paddingVertical:15,
        borderRadius: 10,
        marginVertical: 30
    },
    teacherButton: {
        color: '#8502DB',
        backgroundColor: 'white',
        width: '75%',
        paddingHorizontal:10,
        paddingVertical:15,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#8502DB'
    },
    parentButtonText: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
        fontWeight: '400'
    },
    teacherButtonText: {
        color: '#8502DB',
        fontSize: 20,
        textAlign: 'center',
        fontWeight: '400'
    }
});

//make this component available to the app
export default Landing;
