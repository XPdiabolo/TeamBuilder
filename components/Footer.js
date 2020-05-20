import React from 'react';
import { StyleSheet, Image, Text, View} from 'react-native';

const Footer =()=>{
    return(
        <View style={{flexDirection:'row'}}>
            <View style={[styles.footer, {backgroundColor:'green'}]}>
                <Text>Team</Text>
            </View>
            <View style={[styles.footer, {backgroundColor:'blue'}]}>
                <Text>Pokedex</Text>
            </View>
            <View style={[styles.footer, {backgroundColor:'red'}]}>
               <Text>Details</Text>
            </View>
        </View>
    );
};

export default Footer

const styles = StyleSheet.create({
    footer:{
        flex: 1,
        height: 80,
        backgroundColor: 'pink'
    },
})
