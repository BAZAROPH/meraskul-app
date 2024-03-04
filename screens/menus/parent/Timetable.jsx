//import liraries
import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable, Image, ScrollView } from 'react-native';
import PageSkeleton from '../../../navigator/components/PageSkeleton';
import arrow from '../../../assets/icon/arrow.png';
import Card from '../../../navigator/components/Card';
import chat from '../../../assets/icon/chat.png'
import bookw from '../../../assets/icon/bookw.png'
import science from '../../../assets/icon/science.png'
import piano from '../../../assets/icon/piano.png'

// create a component
const Timetable = ({navigation}) => {
    const days = [
        'Lun',
        'Mar',
        'Mer',
        'Jeu',
        'Ven',
        'Sam',
    ]
    const [dayActive, setDayActive] = useState('Lun')
    return (
        <PageSkeleton 
            title="Emploi du temps" 
            icon={arrow} 
            iconText="Retour" 
            navigation={navigation}
            style={{
                paddingVertical: 30
            }}
        >
            <View style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
                maxHeight: '7%',
                paddingHorizontal: 30
            }}>
                {days.map((day, index)=>(
                    <Pressable key={index} onPress={()=>setDayActive(day)}>
                        <Text style={[{
                            fontSize: 15
                        }, dayActive === day ? {color: '#8502DB'} : null]}>{day}</Text>
                        {dayActive === day &&
                            <View style={{ height:1, width: '100%', backgroundColor: '#8502DB', marginTop: 1}}/>
                        }
                    </Pressable>
                ))}
            </View>
            <ScrollView 
                style={{height: 300, marginTop: 20, padding: 5, paddingHorizontal: 20}}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
            >
                <Subsject image={chat}/>
                <Subsject image={science}/>
                <Subsject image={bookw}/>
                <Subsject image={piano}/>
            </ScrollView>
        </PageSkeleton>
    );
};

const Subsject = (props)=>{
    return (
        <Card style={{
            flex: 1,
            flexDirection: 'row',
            marginBottom: 20,
            maxHeight: 93,
            margin: 10
        }}>
            <View style={{marginRight: 20}}>
                <Image source={props.image}/>
            </View>
            <View style={{
                flex: 1,
                justifyContent: 'space-between'
            }}>
                <Text style={{
                    fontSize: 17,
                    fontWeight: '600'
                }}>08h00 - 9h30</Text>
                <Text style={{
                    fontWeight: '300'
                }}>Matière</Text>
                <Text style={{
                    fontWeight: '300'
                }}>Nom prof</Text>
            </View>
        </Card>
    )
}

//make this component available to the app
export default Timetable;
