//import liraries
import React from 'react';
import { View, Text, StyleSheet, TextInput, Pressable } from 'react-native';

// create a component
const Register = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.create}>Créer un compte</Text>
            <View style={styles.inputBox}>
                <TextInput style={styles.input} placeholder='Prénom'/>
                <TextInput style={styles.input} placeholder='Nom'/>
                <TextInput style={styles.input} placeholder='Mail'/>
                <TextInput style={styles.input} placeholder='Mot de passe'/>
            </View>
            <View style={styles.buttonBox}>
                <Pressable style={styles.pressable}
                    onPress={()=> navigation.navigate('Login')}
                >
                    <Text style={styles.buttonText}>Envoyer</Text>
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
        // justifyContent: 'space-evenly'
        marginTop: 20
    },
    input: {
        height: 55,
        backgroundColor: '#F5F5F5',
        paddingHorizontal: 20,
        borderRadius: 8,
        marginBottom: 20,
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
export default Register;
