//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import PageSkeleton from '../../../navigator/components/PageSkeleton';
import arrow from '../../../assets/icon/arrow.png';

// create a component
const Exam = ({navigation}) => {
    return (
        <PageSkeleton 
            title="Examens / Interro"
            icon={arrow}
            iconText="Retour"
            navigation={navigation}
        >
            <View style={{
                flex:1,
                flexDirection: 'row',
                justifyContent:'space-between',
                alignItems: 'center',
                paddingHorizontal: 30,
                maxHeight: '10%',
            }}>
                <Text style={{
                    fontSize: 20,
                    color: '#262626',
                    width: '50%'
                }}>
                    Examen
                </Text>
                <Text style={{
                    fontSize: 20,
                    color: '#262626',
                    width: '25%',
                    textAlign:'center'
                }}>
                    Date
                </Text>
                <Text style={{
                    fontSize: 20,
                    color: '#262626',
                    width: '25%',
                    textAlign:'right'
                }}>
                    Note
                </Text>
            </View>
            
            <View 
                style={{
                    height: 3,
                    width: '100%',
                    backgroundColor:'#F1F1F1',
                }}
            />
            <ScrollView style={{
                flex: 1,
                paddingBottom: 25,
                paddingTop: 10
            }}>
                <ExamRow exam="Les fractions Math" date="6 sept" rating="12/20"/>
                <ExamRow exam="Les fractions Math" date="6 sept" rating="12/20"/>
                <ExamRow exam="Les fractions Math" date="6 sept" rating="12/20"/>
                <ExamRow exam="Les fractions Math" date="6 sept" rating="12/20"/>
                <ExamRow exam="Les fractions Math" date="6 sept" rating="12/20"/>
                <ExamRow exam="Les fractions Math" date="6 sept" rating="12/20"/>
                <ExamRow exam="Les fractions Math" date="6 sept" rating="12/20"/>
                <ExamRow exam="Les fractions Math" date="6 sept" rating="12/20"/>
                <ExamRow exam="Les fractions Math" date="6 sept" rating="12/20"/>
                <ExamRow exam="Les fractions Math" date="6 sept" rating="12/20"/>
                <ExamRow exam="Les fractions Math" date="6 sept" rating="12/20"/>
                <ExamRow exam="Les fractions Math" date="6 sept" rating="12/20"/>
                <ExamRow exam="Les fractions Math" date="6 sept" rating="12/20"/>
                <ExamRow exam="Les fractions Math" date="6 sept" rating="12/20"/>
            </ScrollView>
        </PageSkeleton>
    );
};

const ExamRow = ({exam, date, rating})=>{
    return (
        <View style={{
            flex:1,
            flexDirection: 'row',
            justifyContent:'space-between',
            alignItems: 'center',
            paddingHorizontal: 30,
            maxHeight: '10%',
            marginBottom: 20,
        }}>
            <Text style={{
                fontSize: 15,
                color: '#9AA0B5',
                width: '50%'
            }}>
                {exam}
            </Text>
            <Text style={{
                fontSize: 15,
                color: '#9AA0B5',
                width: '25%',
                textAlign:'center'
            }}>
                {date}
            </Text>
            <Text style={{
                fontSize: 15,
                color: '#9AA0B5',
                width: '25%',
                textAlign:'right'
            }}>
                {rating}
            </Text>
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
export default Exam;
