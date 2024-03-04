//import liraries
import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

// create a component
const TabIcon = ({image, isFocused}) => {
    return (
        <View>
            <Image
                source={image}
                style={[styles.icon]}
            />
            {isFocused && <View style={styles.active}/>}

        </View>
    );
};

const styles = StyleSheet.create({
    icon: {
        width: 30,
        height: 30,
    },
    active: {
        marginTop: 3,
        height: 4,
        width: 30,
        backgroundColor: '#FB8500',
        borderRadius: 4
    }
});

//make this component available to the app
export default TabIcon;
