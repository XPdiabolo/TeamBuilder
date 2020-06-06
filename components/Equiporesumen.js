import React from 'react';
import { StyleSheet, Image, Text, View, ImageBackground, TouchableWithoutFeedback, Picker } from 'react-native';





const PokeTeam = ({user}) =>{


    return(
        <ImageBackground style={styles.page} source={require("../assets/background_team.png")}>
            <Pokemons user={user} />
            <Weakness user={user} />
            <Stats user={user} />
        </ImageBackground>
    );
};

/*const Name =({user})=>{
    return(
        <View style={styles.name}>
            
        </View>
    );
};*/

const Pokemons =({user})=>{
    /*const goToPokedex = () => {
        navigation.navigate("Pokedex");
    };
    
    const goToStatsPoke = () => {
        navigation.navigate("Poke");
    };

    <View style={styles.button}>
    <Button title="Go to Pokedex" onPress={goToPokedex}></Button>
    </View>
    <View style={styles.button}>
    <Button title="Go to Pokemon" onPress={goToStatsPoke}></Button>
    </View>*/
    
    return(
        <View style={styles.description}>

            <Text style={styles.titles}>Team 01</Text>
            

                <View style={styles.content}>
                    <View style={styles.grup1}>

                        <Image source={{ uri : user.slot1.avatar }}  style={[styles.sprite]}/>
                        <Image source={{ uri : user.slot2.avatar }}  style={[styles.sprite]}/>
                        <Image source={{ uri : user.slot3.avatar }}  style={[styles.sprite]}/>
                        
                    </View>

                    

                    <View style={styles.grup1text}>

                        <Text style={[styles.pokename, {flex: 0.8}]}>{user.slot1.name}</Text>
                        <Text style={[styles.pokename, {flex: 0.8}]}>{user.slot2.name}</Text>
                        <Text style={[styles.pokename, {flex: 0.8}]}>{user.slot3.name}</Text>
                    
                    </View>


                    <View style={styles.grup1}>
                        <Image source={{ uri : user.slot4.avatar }}  style={[styles.sprite]}/>                        
                        <Image source={{ uri : user.slot5.avatar }}  style={[styles.sprite]}/>
                        <Image source={{ uri : user.slot6.avatar }}  style={[styles.sprite]}/>
                        
                    </View>

                    <View style={styles.grup1text}>

                        <Text style={[styles.pokename, {flex: 0.8}]}>{user.slot4.name}</Text>
                        <Text style={[styles.pokename, {flex: 0.8}]}>{user.slot5.name}</Text>
                        <Text style={[styles.pokename, {flex: 0.8}]}>{user.slot6.name}</Text>
                    
                    </View>
                
            
                </View>  
           
        </View>

    );
};


const Measures = ({user}) => {
    return(
        <View style={styles.measures}>
            <View style={styles.measdet}>
               
                <View style={[styles.mer2]}>
                    <Text style={styles.measwidth}>{user.type}</Text> 
                </View>
            </View>

        </View>
    );
};

const Stats =({user})=>{

  
    return(
        <View style={styles.description}>
            <Text style={styles.titles}>Weaknesses</Text>
            <Text style={styles.content}>Hola</Text>
            
        </View>
    );
};

const Weakness =({user})=>{
    return(
        <View style={styles.stats}>
            <Text style={styles.titles}>Stats</Text>
            <Text style={styles.content}>Here The Stats</Text>
        </View>
    );
};

export default PokeTeam

const styles = StyleSheet.create({
    page:{
        flex: 1,
        
        
       
        backgroundColor: "orange"
    },
    pokamios:{
        
        margin: 10,
        justifyContent: "center",
        alignItems: "center",        
        flexDirection: "column",
    },
    grup1:{ 
        
               
        flexDirection: "row",
        //alignItems: "center",
        justifyContent: "center"

    },
    grup1text:{
        flexDirection: "row",
        
        position:"relative",
    },
    header:{
        flex: 0.8,
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
        
        height: 35,
        marginTop: 10,
        marginRight: 15,
        marginLeft: 15,
        marginBottom: 15,
        alignItems: "center",
        backgroundColor: '#4B4B4B',
        borderTopRightRadius: 17 ,
        borderTopLeftRadius: 17
    },
    pokename:{
        color: "black",
        fontSize: 15,
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
        flex: 1,
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
        backgroundColor: '#E0E0E0',
        color: 'black',
        
        fontSize: 20
    },
    content:{
        
    },
    sprite:{
        height: 90,
        width: 75,
        flex: 1
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

    button: {
        marginTop: 15
      },
})