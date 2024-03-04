import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Card(props) {
  return (
    <View style={[props.style, { 
        backgroundColor: 'white',
        borderRadius: 10,
        shadowColor: 'black', // Couleur de l'ombre
        shadowOffset: {
          width: 0,
          height: 2,
        }, // Décalage de l'ombre (x, y)
        shadowOpacity: 0.15, // Opacité de l'ombre (0-1)
        elevation: 5, // Sur Android, utilisez elevation pour l'ombre (prend en charge des valeurs numériques)
        padding: 10,
    }]}>
        {props.children}
    </View>
  )
}

const styles = StyleSheet.create({})