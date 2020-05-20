import React from 'react';
import { StyleSheet, Image, Text, View} from 'react-native';

const Header =()=>{
    return(
        <View style={styles.header}>
            <Text style={styles.headertitle}>Pokédex</Text>
        </View>
    );
};

export default Header


const styles = StyleSheet.create({
    header:{
        height: 100,
        //flex: 0.8,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#4B4B4B',
    },
    headertitle:{
        color: "white",
        fontWeight: "bold",
        fontSize: 33,
        paddingTop: 25
    },
})
