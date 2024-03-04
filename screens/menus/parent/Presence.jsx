//import liraries
import React, { useState, useMemo } from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import PageSkeleton from '../../../navigator/components/PageSkeleton';
import arrow from '../../../assets/icon/arrow.png'
import { Calendar } from 'react-native-calendars';
import Card from '../../../navigator/components/Card';

// create a component
const Presence = ({navigation}) => {
    const currentDate = new Date(); // Obtenez la date actuelle
    const twoDaysFromNow = new Date();
    twoDaysFromNow.setDate(currentDate.getDate() + 2); // Obtenez la date du surlendemain

    // Créez un objet pour marquer les dates
    const markedDates = useMemo(() => {
        const result = {};
        result[currentDate.toISOString().split('T')[0]] = { selected: true, selectedColor: '#FE696E', borderRadius: 5 }; // Marquer la date actuelle en rouge
        result[twoDaysFromNow.toISOString().split('T')[0]] = { selected: true, selectedColor: '#3ECD98' }; // Marquer le surlendemain en vert
        return result;
    }, [currentDate, twoDaysFromNow]);

    const customTheme = {
        arrowColor: 'black', // Couleur de la flèche
    };

    return (
        <PageSkeleton 
            title="Présence" 
            icon={arrow} 
            iconText="Retour" 
            navigation={navigation}
            style={{
                padding: 30
            }}
        >
            <SafeAreaView style={styles.container}>
                <Card style={{width:'100%'}}>
                    <Calendar 
                        markedDates={markedDates}
                        theme={{
                            arrowColor: 'black'
                        }}
                    />
                </Card>
                <View style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    width: '90%',
                    marginTop: 30
                }}>
                    <View style={{
                        backgroundColor: '#3ECD98',
                        maxWidth: 130,
                        height: 120,
                        padding: 10,
                        borderRadius: 20,
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Text style={{
                            color: 'white',
                            fontSize: 15,
                            textAlign: 'center',
                            fontWeight: '600'
                        }}>Total des Présences</Text>
                        <View style={{
                            backgroundColor: 'white',
                            width: 40,
                            height: 40,
                            borderRadius: 30,
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginTop: 10
                        }}>
                            <Text style={{
                                fontSize: 25,
                                fontWeight: '600',
                                color: '#3ECD98'
                            }}> 1 </Text>
                        </View>
                    </View>

                    <View style={{
                        backgroundColor: '#FE696E',
                        maxWidth: 130,
                        height: 120,
                        padding: 10,
                        borderRadius: 20,
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <Text style={{
                            color: 'white',
                            fontSize: 15,
                            textAlign: 'center',
                            fontWeight: '600'
                        }}>Total des Absences</Text>
                        <View style={{
                            backgroundColor: 'white',
                            width: 40,
                            height: 40,
                            borderRadius: 30,
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginTop: 10
                        }}>
                            <Text style={{
                                fontSize: 25,
                                fontWeight: '600',
                                color: '#FE696E'
                            }}> 4 </Text>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        </PageSkeleton>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

//make this component available to the app
export default Presence;
