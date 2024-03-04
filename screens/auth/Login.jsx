//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Pressable } from 'react-native';

// create a component
const Login = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.create}>Se connecter</Text>
            <View style={styles.inputBox}>
                <TextInput style={styles.input} placeholder='Mail'/>
                <TextInput style={styles.input} placeholder='Mot de passe'/>
                <Text style={{color: '#8502DB', marginTop: 25, fontWeight: '600'}}>Mot de passe oublié ?</Text>
            </View>
            <View style={styles.buttonBox}>
                <Pressable style={styles.pressable}
                    onPress={()=> navigation.navigate('ForgetPassword')}
                >
                    <Text style={styles.buttonText}>Se connecter</Text>
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
        backgroundColor: 'white',
    },
    create: {
        color: '#262626',
        fontWeight: '700',
        fontSize: 30,
        textAlign: 'left',
        width: '90%',
        height: '10%',
    },
    inputBox: {
        width: '90%',
        height: '40%',
        justifyContent: 'flex-start',
        marginTop: 5
    },
    input: {
        height: 55,
        backgroundColor: '#F5F5F5',
        paddingHorizontal: 20,
        borderRadius: 8,
        marginTop: 20
    },
    buttonBox:{
        width: '90%',
    },
    pressable: {
        backgroundColor: '#8502DB',
        borderRadius: 8,
        textAlign: 'center',
        paddingHorizontal:10,
        paddingVertical:15,
        marginTop: 40
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
        fontWeight: '400'

    }
});

//make this component available to the app
export default Login;
