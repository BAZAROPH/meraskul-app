import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'

export default function PageSkeleton(props) {
    return (
        <View style={styles.container}>
            <View style={styles.firstBlock}>
                <View style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    alignItems: 'center'
                }}>
                    <Pressable onPress={()=>props.navigation.goBack()}>
                        <Image source={props.icon}/>
                    </Pressable>
                    <Text style={{
                        fontSize: 18,
                        marginLeft: 15,
                        color: 'white',
                        fontWeight: 'bold'
                    }}>{props.iconText}</Text>
                </View>
                {
                    !props.hideTitlte && (
                        <View>
                            <Text style={{
                                fontSize: 30,
                                color: 'white',
                                fontWeight: '600'
                            }}>{props.title}</Text>
                            <View style={{
                                height: 3,
                                maxWidth: '50%',
                                backgroundColor: 'white',
                                marginTop: 5
                            }}/>
                        </View>
                    )
                }
            </View>
            <View style={[styles.secondBlock, props.style]}>
                {props.children}
            </View>
        </View>
    )
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#8502DB'
    },
    firstBlock: {
        height: '15%',
        width: '75%',
        marginTop: '15%'
    },
    secondBlock: {
        marginTop: '20%',
        flex: 1,
        backgroundColor: 'white',
        width: '100%',
        borderTopEndRadius: 40,
        borderTopStartRadius: 40,
    }
});