//import liraries
import React, { Component } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import PageSkeleton from '../../../navigator/components/PageSkeleton';
import arrow from '../../../assets/icon/arrow.png';
import chat from '../../../assets/icon/chat.png'
import bookw from '../../../assets/icon/bookw.png'
import science from '../../../assets/icon/science.png'
import piano from '../../../assets/icon/piano.png'
import matiere from '../../../assets/icon/matiere.png'
// create a component
const Subject = ({navigation}) => {
    return (
        <PageSkeleton 
            icon={arrow} 
            iconText="Retour" 
            title="Matières"
            navigation={navigation}
            style={{
                paddingTop: 30,
                paddingHorizontal: 30
            }}
        >
            <ScrollView>

                <View style={{
                    flex: 1,
                    flexWrap: 'wrap',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    rowGap: 60
                }}>
                    <SubjectUnit title="Math" icon={bookw}/>
                    <SubjectUnit title="Français" icon={chat}/>
                    <SubjectUnit title="Histoire" icon={piano}/>
                    <SubjectUnit title="Physique" icon={science}/>
                    <SubjectUnit title="Anglais" icon={matiere}/>
                    <SubjectUnit title="Musique" icon={bookw}/>
                </View>
            </ScrollView>

        </PageSkeleton>
    );
};

const SubjectUnit = ({icon, title})=>{
    return (
        <View style={{
            width: 100,
            height: 98,
        }}>
            <Image source={icon} style={{
                width: '100%',
                height: '100%'
            }}/>
            <Text style={{
                fontSize: 20,
                textTransform: 'uppercase',
                color: '#9AA0B5',
                textAlign: 'center',
                marginTop: 15,
                fontWeight: '700'
            }}>{title}</Text>
        </View>
    )
}

//make this component available to the app
export default Subject;
