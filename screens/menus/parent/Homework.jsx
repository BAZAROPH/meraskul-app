//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import PageSkeleton from '../../../navigator/components/PageSkeleton';
import arrow from '../../../assets/icon/arrow.png'
import matiere from '../../../assets/icon/matiere.png'

// create a component
const Homework = ({navigation}) => {
    return (
        <PageSkeleton 
            icon={arrow} 
            iconText='Retour' 
            title="Devoirs" 
            navigation={navigation}
            style={{
                paddingTop: 30,
                paddingHorizontal: 30
            }}
        >
            <ScrollView style={{
                borderTopRightRadius: 10,
                borderTopLeftRadius: 10,
            }}>
                <Work subject="Math" description="Faire exos 3 à 4 p85" deadline="10 Sept 2023"/>
                <Work subject="Math" description="Faire exos 3 à 4 p85" deadline="10 Sept 2023"/>
                <Work subject="Math" description="Faire exos 3 à 4 p85" deadline="10 Sept 2023"/>
                <Work subject="Math" description="Faire exos 3 à 4 p85" deadline="10 Sept 2023"/>
                <Work subject="Math" description="Faire exos 3 à 4 p85" deadline="10 Sept 2023"/>
                <Work subject="Math" description="Faire exos 3 à 4 p85" deadline="10 Sept 2023"/>
                <Work subject="Math" description="Faire exos 3 à 4 p85" deadline="10 Sept 2023"/>
            </ScrollView>
        </PageSkeleton>
    );
};

const Work = ({subject, description, deadline})=>{
    return (
        <View style={{
            position: 'relative',
            marginBottom: 15
        }}>
            <View style={{
                backgroundColor: '#F6F6F6',
                height: 90,
                borderRadius: 10,
                marginLeft: 30,
                paddingVertical: 10,
                paddingRight: 30,
                paddingLeft: 50,
                flex: 1,
                justifyContent: 'space-between'
            }}>
                <Text style={{
                    fontWeight: '500',
                    fontSize: 20,
                }}> {subject}</Text>
                <Text style={{
                    fontWeight: '300',
                    paddingLeft: 5
                }}>{description}</Text>
                <Text style={{
                    fontSize: 12,
                    fontWeight: '300',
                    textDecorationLine: 'underline',
                    paddingLeft: 5
                }}>Rendu, {deadline}</Text>
            </View>
            <Image source={matiere} style={{
                position: 'absolute',
                top: 12
            }}/>

        </View>
    )
}

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
export default Homework;
