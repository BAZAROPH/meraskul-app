import { StyleSheet, Text, View, Image} from 'react-native'
import React from 'react'
import PageSkeleton from '../../../navigator/components/PageSkeleton'
import arrow from '../../../assets/icon/arrow.png';
import avatar3 from '../../../assets/avatar/avatar3.png';

export default function Child({navigation}) {
  return (
    <PageSkeleton hideTitlte={true} icon={arrow} iconText="Retour" navigation={navigation} style={{
        position: 'relative'
    }}>
        <Image source={avatar3} style={{
            height: 100,
            width: 100,
            position: 'absolute',
            top: -50,
            right: '40%',
        }}/>
        <Text style={{
            marginTop: 60,
            textAlign: 'center',
            fontSize: 20,
            fontWeight: '500',
            color: '#9AA0B5'
        }}>Prénom Nom</Text>
        <Text style={{
            textAlign: 'center',
            color: '#9AA0B5',
            marginTop: 5
        }}>Classe 5e C</Text>

        <View style={{
            paddingVertical: 30,
            paddingLeft: 50,
            paddingRight: 30,
            gap: 40
        }}>
            <Text style={{
                fontSize: 16,
                color: '#9AA0B5'
            }}>Information #1</Text>
            <Text style={{
                fontSize: 16,
                color: '#9AA0B5'
            }}>Information #1</Text>
            <Text style={{
                fontSize: 16,
                color: '#9AA0B5'
            }}>Information #1</Text>
            <Text style={{
                fontSize: 16,
                color: '#9AA0B5'
            }}>Information #1</Text>
            <Text style={{
                fontSize: 16,
                color: '#9AA0B5'
            }}>Information #1</Text>
            <Text style={{
                fontSize: 16,
                color: '#9AA0B5'
            }}>Information #1</Text>

        </View>
    </PageSkeleton>
  )
}

const styles = StyleSheet.create({})