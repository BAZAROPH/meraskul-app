import { StyleSheet, Text, View, ScrollView, Pressable, Image } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import PageSkeleton from '../../../navigator/components/PageSkeleton'
import Child from './Child'
import arrow from '../../../assets/icon/arrow.png';
import avatar3 from '../../../assets/avatar/avatar3.png';

export default function Children() {
    const Stack = createStackNavigator()
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name='ChildrenScreen' component={ChildrenScreen} />
            <Stack.Screen name='Child' component={Child} />
        </Stack.Navigator>
    )
}

const ChildrenScreen = ({navigation})=>{
    const children = [
        {
            first_name: 'Prénom',
            last_name: 'Nom'
        },
        {
            first_name: 'Prénom',
            last_name: 'Nom'
        },
        {
            first_name: 'Prénom',
            last_name: 'Nom'
        },
        {
            first_name: 'Prénom',
            last_name: 'Nom'
        },
        {
            first_name: 'Prénom',
            last_name: 'Nom'
        },
        {
            first_name: 'Prénom',
            last_name: 'Nom'
        },
        {
            first_name: 'Prénom',
            last_name: 'Nom'
        },
        {
            first_name: 'Prénom',
            last_name: 'Nom'
        },
        {
            first_name: 'Prénom',
            last_name: 'Nom'
        },
    ]
    return (
        <PageSkeleton title="Mes enfants" navigation={navigation} iconText="Retour" icon={arrow}>
            <View>
                <Text style={{
                    paddingTop: 30,
                    paddingHorizontal: 30,
                    paddingBottom: 10,
                    fontSize: 18,
                    fontWeight: '600'
                }}>Liste de mes enfants</Text>
                <View style={{
                    height: 2,
                    width: '100%',
                    backgroundColor: '#F1F1F1'
                }}/>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{
                    flex: 1,
                    paddingHorizontal: 15,
                    paddingVertical: 15,
                    gap: 20
                }}>
                    {
                        children.map((child, index)=>{
                            return (
                                <Pressable key={index} style={{
                                        flex: 1,
                                        justifyContent: 'flex-start',
                                        gap: 20,
                                        flexDirection: 'row',
                                        alignItems: 'center',
                                        borderBottomWidth: 1,
                                        paddingBottom: 10,
                                        borderBottomColor: '#F1F1F1',
                                        paddingHorizontal: 15
                                    }}
                                    onPress={()=>{navigation.navigate('Child')}}
                                >
                                    <Image source={avatar3} />
                                    <Text style={{
                                        fontSize: 18,
                                        fontWeight: '600',
                                        color: '#9AA0B5'
                                    }}> <Text style={{
                                        textTransform: 'uppercase'
                                    }}>{child.last_name}</Text> - {child.first_name}</Text>
                                </Pressable>
                            )
                        })
                    }
                </View>
            </ScrollView>
        </PageSkeleton>
    )
}

const styles = StyleSheet.create({})