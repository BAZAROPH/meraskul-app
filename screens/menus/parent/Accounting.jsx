//import liraries
import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable, Image, ScrollView } from 'react-native';
import arrow from '../../../assets/icon/arrow.png';
import avatar2 from '../../../assets/avatar/avatar2.png'
import arrow2 from '../../../assets/icon/arrow2.png'
import bill from '../../../assets/icon/bill.png'

// create a component
const Accounting = ({navigation}) => {
    const [childActive, setChildActive] = useState(0);
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
            <View style={styles.firstBlock}>
                <View style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    alignItems: 'center'
                }}>
                    <Pressable onPress={()=>navigation.goBack()}>
                        <Image source={arrow}/>
                    </Pressable>
                    <Text style={{
                        fontSize: 18,
                        marginLeft: 15,
                        color: 'white',
                        fontWeight: 'bold'
                    }}>Retour</Text>
                </View>
                <View>
                    <Text style={{
                        fontSize: 30,
                        color: 'white',
                        fontWeight: '600'
                    }}>Ma compta</Text>
                    <View style={{
                        height: 3,
                        maxWidth: '50%',
                        backgroundColor: 'white',
                        marginTop: 5
                    }}/>
                </View>
            </View>

            <View style={{
                    marginTop: '15%', 
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
            <View style={[styles.secondBlock, {paddingTop: 5}]}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={{
                            marginBottom: 20
                        }}>
                        <View>
                            <Text style={{
                                fontSize: 20,
                                paddingTop: 20,
                                paddingHorizontal: 18
                            }}>Paiement Scolarité</Text>
                            <View style={{
                                height: 2,
                                width: '100%',
                                backgroundColor: '#F1F1F1',
                                marginTop: 6,
                                flex: 1,
                                paddingLeft: 18
                            }}> 
                                <View style={{
                                    height: 2,
                                    maxWidth: 163,
                                    backgroundColor: '#8502DB',
                                }} />
                            </View>
                        </View>

                        <ScrollView horizontal pagingEnabled showsHorizontalScrollIndicator={false} style={{
                            padding: 20
                        }}>
                            <Box period={'Trimestre 1'} color='#0CBC8B' amount={'XXX'} state={'Réglé'}/>
                            <Box period={'Trimestre 2'} color='#F5927E' amount={'XXX'} state={'Non Réglé'}/>
                            <Box period={'Trimestre 1'} color='#0CBC8B' amount={'XXX'} state={'Réglé'}/>
                            <Box period={'Trimestre 2'} color='#F5927E' amount={'XXX'} state={'Non Réglé'}/>
                        </ScrollView>
                    </View>
                    {/* Frais annexes */}
                    <View style={{
                        marginBottom: 20
                    }}>
                        <View>
                            <Text style={{
                                fontSize: 20,
                                paddingTop: 20,
                                paddingHorizontal: 18
                            }}>Paiement Frais annexes</Text>
                            <View style={{
                                height: 2,
                                width: '100%',
                                backgroundColor: '#F1F1F1',
                                marginTop: 6,
                                flex: 1,
                                paddingLeft: 18
                            }}> 
                                <View style={{
                                    height: 2,
                                    maxWidth: 163,
                                    backgroundColor: '#8502DB',
                                }} />
                            </View>
                        </View>

                        <ScrollView horizontal pagingEnabled showsHorizontalScrollIndicator={false} style={{
                            padding: 20
                        }}>
                            <Box period={'Intitulé'} color='#0CBC8B' amount={'XXX'} state={'Réglé'}/>
                            <Box period={'Intitulé'} color='#F5927E' amount={'XXX'} state={'Non Réglé'}/>
                            <Box period={'Intitulé'} color='#0CBC8B' amount={'XXX'} state={'Réglé'}/>
                            <Box period={'Intitulé'} color='#F5927E' amount={'XXX'} state={'Non Réglé'}/>
                        </ScrollView>
                    </View>

                    {/* History */}
                    <View style={{
                        marginBottom: 20
                    }}>
                        <View>
                            <Text style={{
                                fontSize: 20,
                                paddingTop: 20,
                                paddingHorizontal: 18
                            }}>Historique des versements</Text>
                            <View style={{
                                height: 2,
                                width: '100%',
                                backgroundColor: '#F1F1F1',
                                marginTop: 6,
                                flex: 1,
                                paddingLeft: 18
                            }}> 
                                <View style={{
                                    height: 2,
                                    maxWidth: 163,
                                    backgroundColor: '#8502DB',
                                }} />
                            </View>
                        </View>
                        <ScrollView showsVerticalScrollIndicator={false}>
                            <Payment title={'Scolarité Trimestre 1'} student={'Nom de l\'enfant'} amount={'XXX'} />
                            <Payment title={'Scolarité Trimestre 1'} student={'Nom de l\'enfant'} amount={'XXX'} />
                            <Payment title={'Scolarité Trimestre 1'} student={'Nom de l\'enfant'} amount={'XXX'} />
                            <Payment title={'Scolarité Trimestre 1'} student={'Nom de l\'enfant'} amount={'XXX'} />
                        </ScrollView>
                    </View>
                </ScrollView>
            </View>
        </View>
    );
};

const Box = ({period, color, amount, state})=>{
    return (
        <View style={{
            flex:1,
            justifyContent: 'space-between',
            alignItems: 'center',
            marginRight: 30,
            width: 170,
            shadowColor: '#9AA0B5',
            shadowOffset: {width: -2, height: 2},
            shadowOpacity: 0.4,
            shadowRadius: 10,
        }}>
            <View style={{
                backgroundColor: color,
                width: '100%',
                paddingVertical: 5,
                paddingHorizontal: 15,
                borderTopRightRadius: 10,
                borderTopLeftRadius: 10
            }}>
                <Text style={{
                    color: 'white',
                    fontSize: 18,
                    fontWeight: '600'
                }}>{period}</Text>
            </View>
            <View style={{
                paddingVertical: 8,
                paddingHorizontal: 15,
                backgroundColor: '#F9F9F9',
                width: '100%',
                borderBottomEndRadius: 10,
                borderBottomStartRadius: 10,
                flex: 1,
                justifyContent: 'space-between',
                gap: 15
            }}>
                <View>
                    <Text style={{
                        color: '#9AA0B5',
                        fontWeight: '600'
                    }}>Montant</Text>
                    <Text style={{
                        fontSize: 11,
                        paddingTop: 2,
                        color: '#9AA0B5'
                    }}>
                        {amount} fCFA
                    </Text>
                </View>

                <View>
                    <Text style={{
                        color: '#9AA0B5',
                        fontWeight: '600'
                    }}>Statut</Text>
                    <Text style={{
                        fontSize: 11,
                        paddingTop: 2,
                        color: '#9AA0B5'
                    }}>
                        {state}
                    </Text>
                </View>

                <Pressable style={{
                    backgroundColor: color === '#0CBC8B' ? '#0CBC8B' : '#9AA0B5',
                    paddingVertical: 5,
                    paddingHorizontal: 10,
                    borderRadius: 10,
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }}>
                    <Text style={{
                        color: 'white',
                        fontWeight: '500'
                    }}>Voir le reçu</Text>
                    <Image source={arrow2} />
                </Pressable>
            </View>
        </View>
    )
}

const Payment = ({title, student, amount})=>{
    return (
        <View style={{
            flex: 1,
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: 'row',
            padding: 18
        }}>
            <View style={{
                flex:1,
                justifyContent: 'flex-start',
                flexDirection: 'row',
                alignItems: 'center',
                gap: 10
            }}>
                <Image source={bill} />
                <View>
                    <Text>{title}</Text>
                    <Text style={{
                        marginTop: 2,
                        fontWeight: '400'
                    }}>{student}</Text>
                </View>
            </View>
            <Text>{amount} fCFA</Text>
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
        flex: 1,
        backgroundColor: 'white',
        width: '100%',
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
export default Accounting;
