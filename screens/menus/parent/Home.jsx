//import liraries
import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Pressable, ScrollView} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import avatar1 from '../../../assets/avatar/avatar1.png'
import avatar2 from '../../../assets/avatar/avatar2.png'
import alarm from '../../../assets/icon/alarm.png'
import report from '../../../assets/icon/report.png'
import absent from '../../../assets/icon/absent.png'
import books from '../../../assets/icon/books.png'
import calendar1 from '../../../assets/icon/calendar1.png'
import exam from '../../../assets/icon/exam.png'
import homework from '../../../assets/icon/homework.png'
import Swiper from 'react-native-swiper';

//Stack Screens
import Timetable from './Timetable';
import Exam from './Exam';
import Presence from './Presence';
import Homework from './Homework';
import Subject from './Subject'
import Report from './Report'

const Home = ()=>{
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name='Home' component={HomeScreen}/>
            <Stack.Screen name='Timetable' component={Timetable}/>
            <Stack.Screen name='Exam' component={Exam}/>
            <Stack.Screen name='Presence' component={Presence}/>
            <Stack.Screen name='Homework' component={Homework}/>
            <Stack.Screen name='Subject' component={Subject}/>
            <Stack.Screen name='Report' component={Report}/>
        </Stack.Navigator>
    )
}
// create a component
const HomeScreen = ({navigation}) => {
    const children = [
        {
            photo: avatar2,
            name: 'Aïda Souaré'
        },
        {
            photo: avatar2,
            name: 'Ben Souaré'
        },
        {
            photo: avatar2,
            name: 'Audrey Tekpo'
        },
        {
            photo: avatar2,
            name: 'Audrey Tekpo'
        },
        {
            photo: avatar2,
            name: 'Audrey Tekpo'
        },
        {
            photo: avatar2,
            name: 'Audrey Tekpo'
        },
        {
            photo: avatar2,
            name: 'Audrey Tekpo'
        },
        {
            photo: avatar2,
            name: 'Audrey Tekpo'
        },
    ]
    return (
        <View style={styles.container}>
            <View style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'center',
                width: '85%',
                marginTop: 10
            }}>
                <Image source={avatar1} style={{
                    marginRight: 30
                }} />
                <View>
                    <Text style={{
                        color: 'white',
                        fontWeight: '500',
                        fontSize: 25
                    }}>
                        Bonjour Paloma
                    </Text>
                    <Text style={{
                        color: 'white',
                        fontWeight: '500',
                        fontSize: 15,
                        paddingTop: 5
                    }}>
                        Comment allez vous ?
                    </Text>
                </View>
            </View>
            <View style={{maxHeight:170}}>
                <Swiper dot={<CustomsDot/>} activeDot={<CustomsDot active/>}>
                    <View style={styles.slide}>
                        <Notification image={alarm} text1={'Reunion'} text2={'Reunion parent professeur le'} text3={'25 Septembre 2023 à 18h00'}/>
                    </View>
                    <View style={styles.slide}>
                        <Notification image={alarm} text1={'Reunion'} text2={'Reunion parent professeur le'} text3={'25 Septembre 2023 à 18h00'}/>
                    </View>
                    <View style={styles.slide}>
                        <Notification image={alarm} text1={'Reunion'} text2={'Reunion parent professeur le'} text3={'25 Septembre 2023 à 18h00'}/>
                    </View>
                    <View style={styles.slide}>
                        <Notification image={alarm} text1={'Reunion'} text2={'Reunion parent professeur le'} text3={'25 Septembre 2023 à 18h00'}/>
                    </View>
                </Swiper>
            </View>

            <View style={{width:'85%'}}>
                <Text style={{textAlign: 'left', fontSize: 25, fontWeight: '500', color: 'white'}}>
                    Mes enfants
                </Text>
                <View style={{height: 3, backgroundColor:'white', marginTop: 2, width: 150}}></View>
            </View>

            <View style={{'height': '50%', width:'100%'}}>
                <ChildrenMenu children={children} navigation={navigation}/>
            </View>
        </View>
    );
};

const Notification = ({image, text1, text2, text3 })=>(
    <View style={styles.notificationBlock}>
        <Image source={image}/>
        <View>
            <Text style={{fontWeight: '700'}}>
                {text1}
            </Text>

            <Text style={{paddingTop: 8, paddingBottom: 2}}>
                {text2}
            </Text>
            <Text style={{fontWeight: '600'}}>
                {text3}
            </Text>
        </View>
    </View>
)

const CustomsDot = ({active})=>(
    <View style={[styles.dot, active ? styles.activeDot : null]} />
)

const ChildrenMenu = ({children, navigation})=>{
    const [childActive, setChildActive] = useState(0);
    return (
        <>
            <View style={{
                marginTop: 10, 
                flex: 1,
                flexDirection: 'row', 
                justifyContent: 'flex-start',
                maxHeight: 90
            }}>
                <ScrollView 
                    horizontal
                    showsVerticalScrollIndicator={false}
                    showsHorizontalScrollIndicator={false}
                >
                    {children.map((child, index)=>(
                        <Pressable onPress={()=>setChildActive(index)} key={index} style={[styles.childHeader, childActive === index ? {borderColor: '#FBC130'} : null]}>
                            <Image source={avatar2} style={{marginBottom: 8, height:35, width:35}}/>
                            <Text style={[{color: '#9AA0B5', fontWeight: '600', fontSize:13}, childActive === index ? {color: 'black'} : null]}>{child.name}</Text>
                        </Pressable>
                    ))}
                </ScrollView>
            </View>
            <View style={{
                flex:1, 
                alignContent:'center',
                justifyContent: 'center',
                backgroundColor:'white',
                paddingHorizontal: 10,
                flexDirection: 'row',
                flexWrap: 'wrap',
            }}>
                <ChildrenMenuItem icon={calendar1} title='Emploi du temps' navigation={navigation} navigateTo='Timetable'/>
                <ChildrenMenuItem icon={exam} title='Examens' navigation={navigation} navigateTo='Exam'/>
                <ChildrenMenuItem icon={absent} title='Présence' navigation={navigation} navigateTo='Presence'/>
                <ChildrenMenuItem icon={homework} title='Devoirs' navigation={navigation} navigateTo='Homework'/>
                <ChildrenMenuItem icon={books} title='Matières' navigation={navigation} navigateTo='Subject'/>
                <ChildrenMenuItem icon={report} title='Bulletins' navigation={navigation} navigateTo='Report'/>
            </View>
        </>
    )
}

const ChildrenMenuItem = ({icon, title, navigation, navigateTo})=>{
    return (
        <View style={{width: 110, alignItems: 'center', margin:5, marginBottom: 16}}>
            <Pressable onPress={()=>navigation.navigate(navigateTo)}>
                <View style={{backgroundColor: '#9E53DE', padding:14, borderRadius: 3, marginBottom:8}}>
                    <Image source={icon}/>
                </View>
                <Text style={{textAlign: 'center', color: '#9AA0B5', fontWeight: '600'}}>
                    {title}
                </Text>
            </Pressable>
        </View>
    )
}
// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#8502DB',
    },
    notificationBlock: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '85%',
        backgroundColor: 'white',
        borderRadius: 16,
        height: 90,
        marginBottom: 50
    },
    slide: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    dot: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: '#D9D9D9',
        marginHorizontal: 5,
    },
    activeDot: {
        backgroundColor: '#FBC130'
    },
    childHeader: {
        paddingVertical: 8, 
        paddingHorizontal: 13, 
        backgroundColor: 'white', 
        borderTopEndRadius: 30, 
        borderTopStartRadius: 30, 
        alignItems: 'center', 
        marginEnd: 20,
        borderTopWidth: 5, 
        borderLeftWidth:5, 
        borderRightWidth:5,
        borderColor: 'white',
        maxWidth: 120,
        width: '100%'
    }
});


//make this component available to the app
export default Home;
