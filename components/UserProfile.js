
//import { StyleSheet, Image, Text, View, TouchableWithoutFeedback } from 'react-native';
import React, { useContext, useEffect } from 'react';
//import Slider from '@react-native-community/slider';
import { StyleSheet, Image, Text, View, ImageBackground, ActivityIndicator, StatusBarIOS } from 'react-native';
import { DetailsProvider, DetailsContext } from '../models/DetailsModel';
import { observer } from 'mobx-react';
//import { Dropdown } from 'react-native-material-dropdown';


const RenderDetails = observer(() =>{

    const details = useContext(DetailsContext);
    const pokemonexemple = "articuno";
  
    useEffect(() => {
      details.loadDetails(pokemonexemple);
    }, []);  
  
    if (details.detail == null) {
      return (
        <View>
          <ActivityIndicator size="large" />
        </View>
      )
    }else{
        return(
            <UserProfile user={details.detail}/>
        )
    };
  });


const UserProfile = (user) =>{
    return(

        <DetailsProvider>
        <ImageBackground style={styles.page} source={require("../assets/background_team.png")}>
            <Name user={user} />
            <Profile user={user} />
            <Description user={user} />
            <Stats user={user} />
        </ImageBackground>
        </DetailsProvider>
    );
};

//user.user.height
const Name =({user})=>{
    return(
        <View style={styles.name}>
            <Text style={styles.number} >Nº {user.poknum}</Text><Text style={styles.pokename}>{user.user.name}</Text>
        </View>
    );
};

const Profile =({user})=>{
    return(
        <View style={styles.profile}>
            <Image source={{ uri : user.avatar }}  style={styles.sprite}/>
            <Measures user={user} />
        </View>
    );
};

const Measures = ({user}) => {
    return(
        <View style={styles.measures}>
            <View style={styles.measdet}>
                <View style={[{borderTopLeftRadius:10}, styles.mer1]}>
                    <Text style={styles.measwidth}>Type</Text>
                </View>
                <View style={[{borderTopRightRadius:10}, styles.mer2]}>
                    <Text style={styles.measwidth}>{user.type}</Text> 
                </View>
            </View>

            <View style={[{borderTopWidth: 2, borderBottomWidth: 2, borderColor: 'gray'}, styles.measdet]}>
                <View style={styles.mer1}>
                    <Text style={styles.measwidth}>Height</Text>  
                </View>
                <View style={styles.mer2}>
                    <Text style={styles.measwidth}>{user.height} m</Text>
                </View>
            </View>

            <View style={styles.measdet}>
                <View style={[{borderBottomLeftRadius:10}, styles.mer1]}>
                    <Text style={styles.measwidth}>Weight</Text>
                </View>
                <View style={[{borderBottomRightRadius:10}, styles.mer2]}>
                    <Text style={styles.measwidth}>{user.weight} kg</Text>
                </View>
            </View>
        </View>
    );
};

const Description =({user})=>{
    return(
        <View style={styles.description}>
            <Text style={styles.titles}>Description</Text>
            <Text style={styles.content}>{user.description}</Text>
        </View>
    );
};

const Stats =({user})=>{
    return(
        <View style={styles.stats}>
            <Text style={styles.titles}>Stats</Text>
            <Text style={styles.content}>Here the stats/map</Text>
        </View>
    );
};

export default RenderDetails

const styles = StyleSheet.create({
    page:{
        flex: 1,
        
        backgroundColor: "orange"
    },
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
    name:{
        flexDirection: 'row',
        height: 35,
        marginTop: 10,
        marginRight: 15,
        marginLeft: 15,
        marginBottom: 15,
        alignItems: "center",
        backgroundColor: '#4B4B4B',
        borderTopRightRadius: 17 ,
        borderBottomRightRadius: 17
    },
    pokename:{
        color: "white",
        fontSize: 24,
        fontWeight: "bold",
        paddingLeft: 15
    },
    number:{
        //backgroundColor: '#2A2A2A',
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
        paddingLeft: 15,
        paddingRight: 15
    },
    profile:{
        borderRadius: 10,
        marginRight: 15,
        marginLeft: 15,
        height: 150,
        flexDirection: "row",
        justifyContent: "space-around",
        paddingLeft: 10,
        paddingRight: 10
    },
    description:{
        // flex: 1,
        borderRadius: 10,
        margin: 15,
        //paddingRight: 15,
        //paddingLeft: 15,
        backgroundColor: 'white'
    },
    stats:{
        borderTopRightRadius:10,
        borderTopLeftRadius: 10,
        flex: 2,
        marginRight: 15,
        marginLeft: 15,
        //paddingLeft: 15,
        //paddingRight: 15,
        backgroundColor: 'white'
    },
    footer:{
        flex: 1,
        height: 80,
        backgroundColor: 'pink'
    },
    titles:{
        borderTopRightRadius:10,
        borderTopLeftRadius: 10,
        paddingLeft: 15,
        paddingRight: 15,
        paddingBottom: 5,
        fontWeight: 'bold',
        paddingTop: 5,
        flex: 1,
        backgroundColor: '#E0E0E0',
        color: 'black',
        fontSize: 20
    },
    content:{
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 10,
        paddingBottom: 20
    },
    sprite:{
        height: 125,
        width: 125,
    },
    measures:{
        flexDirection: 'column',
        flex: 1,
        alignSelf: "center",
        backgroundColor: 'aquamarine',
        justifyContent: "space-around",
        //paddingBottom: 5,
        //paddingTop: 5,
        //paddingLeft: 12,
        borderRadius: 10
    },
    measdet:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: "center"
    },
    measwidth:{
        alignItems: "center",
        fontWeight: 'bold'
    },
    mer1:{
        paddingLeft: 10,
        flex: 0.75,
        justifyContent: "center",
        //alignItems: "center",
        
        backgroundColor: '#E0E0E0',
    },
    mer2:{
        flex: 1.25,
        
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:'white'
    },
})
//paupp98@gmail.com