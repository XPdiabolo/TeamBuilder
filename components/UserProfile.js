import { observer } from 'mobx-react';
import React, { useContext, useEffect } from 'react';
import { ActivityIndicator, Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import { DetailsContext, DetailsProvider } from '../models/DetailsModel';

const PokemonDetails = observer(({route}) =>{

    const details = useContext(DetailsContext);


    const {pokeName} = route.params;


    useEffect(() => {
    
    details.loadDetails(pokeName);
    }, [pokeName]);  
  
    if (details.detail == null) {
      return (
        <View>
            <Text>{pokeName}</Text>
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
        <ImageBackground style={styles.page} source={require("../assets/background-pdx.png")}>
            <Name user={user} />
            <Profile user={user} />
            <Description user={user} />
            <Moves user={user} />
            <Shiny user={user} />
        </ImageBackground>
        </DetailsProvider>
    );
};

const Name =({user})=>{
    return(
        <View style={styles.name}>
            <Text style={styles.pokename} >Nº {user.user.id}</Text><Text style={styles.pokename}>{user.user.name.toUpperCase(1)}</Text>
        </View>
    );
};


const Profile =({user})=>{
    return(
        <View style={styles.profile}>
            <Image source={{uri : "https://play.pokemonshowdown.com/sprites/xyani/"+ user.user.species.name +".gif"}}  style={styles.sprite}/>
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
                    <Text style={styles.measwidth}>{user.user.types.map(element=>element.type.name)}</Text> 
                </View>
            </View>

            <View style={[{borderTopWidth: 2, borderBottomWidth: 2, borderColor: 'gray'}, styles.measdet]}>
                <View style={styles.mer1}>
                    <Text style={styles.measwidth}>Height</Text>  
                </View>
                <View style={styles.mer2}>
                    <Text style={styles.measwidth}>{user.user.height} m</Text>
                </View>
            </View>

            <View style={styles.measdet}>
                <View style={[{borderBottomLeftRadius:10}, styles.mer1]}>
                    <Text style={styles.measwidth}>Weight</Text>
                </View>
                <View style={[{borderBottomRightRadius:10}, styles.mer2]}>
                    <Text style={styles.measwidth}>{user.user.weight} kg</Text>
                </View>
            </View>
        </View>
    );
};

const Description =({user})=>{
    return(
        <View style={styles.description}>
            <Text style={styles.titles}>Ability</Text>
            <Text style={styles.content}>{user.user.abilities.map(element=>element.ability.name)}</Text>
        </View>
    );
};

const Moves =({user})=>{
   
    return(
        <View style={styles.Moves}>
            <Text style={styles.titles}>Moves</Text>

            <View style={styles.movesText}>
            
                <Text style={styles.contentMoves}><Text>{user.user.moves[0].move.name}</Text></Text>
                <Text style={styles.contentMoves}><Text>{user.user.moves[1].move.name}</Text></Text>

            </View>

            <View style={styles.movesText}>
                
                <Text style={styles.contentMoves}><Text>{user.user.moves[2].move.name}</Text></Text>
                <Text style={styles.contentMoves}><Text>{user.user.moves[3].move.name}</Text></Text>

            </View>

        </View>
    );
};

const Shiny =({user})=>{
   
    return(
        <View style={styles.Shiny}>
            <Text style={styles.titles}>Shiny</Text>

            <View style={styles.SpritesShiny}>
                <Image source={{ uri : user.user.sprites.front_shiny }}  style={styles.spritesh}/>

                <Image source={{ uri : user.user.sprites.back_shiny }}  style={styles.spritesh}/>

            </View>

            <View style={styles.SpritesShinyText}>
                <Text style={styles.content}>Front</Text>
                <Text style={styles.contentBack}>Back</Text>

            </View>

        </View>
    );
};

export default PokemonDetails

const styles = StyleSheet.create({
    page:{
        flex: 1,
        
        backgroundColor: "orange"
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
    profile:{

        marginRight: 15,
        marginLeft: 15,
        height: 150,
        flexDirection: "row",
        justifyContent: "space-around",
        paddingLeft: 10,
        paddingRight: 10
    },
    description:{
        borderRadius: 10,
        margin: 15,
        backgroundColor: 'white'
    },
    Shiny:{
        borderRadius: 10,
        flex: 0.8,
        flexDirection: "column",
        marginRight: 15,
        marginLeft: 15,
        backgroundColor: 'white'
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
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 10,
        paddingBottom: 20
    },
    sprite:{
        flex: 1,
        resizeMode: "contain"
    },
    spritesh:{
        marginTop: 0,
        height: 150,
        width: 150,
    },
    measures:{
        flexDirection: 'column',
        flex: 1,
        alignSelf: "center",
        backgroundColor: '#E0E0E0',
        justifyContent: "space-around",
        borderRadius: 10,
    },
    measdet:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: "center",
    },
    measwidth:{
        alignItems: "center",
        fontWeight: 'bold'
    },
    mer1:{
        paddingLeft: 10,
        flex: 0.75,
        justifyContent: "center",
        
        backgroundColor: '#E0E0E0',
    },
    mer2:{
        flex: 1.25,
        
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:'white'
    },
    SpritesShiny:{
        flexDirection: "row",
        justifyContent: "space-around"
        
    },

    Moves:{
        borderRadius: 10,
        flex: 0.3,
        flexDirection: "column",
        marginRight: 15,
        marginLeft: 15,
        marginBottom: 15,
        paddingBottom: 1,
        backgroundColor: 'white'
    },

    movesText:{
        flex: 0.6,
        flexDirection: "row",
        justifyContent: "space-around",
        paddingTop: 5
    },

    SpritesShinyText:{
        flexDirection: "row",
        justifyContent: "space-evenly",
        
    },

    contentBack:{
        paddingLeft: 100,
        paddingRight: 15,
        paddingTop: 10,
        paddingBottom: 20
    },

    contentMoves:{

        justifyContent: "space-evenly"
    },
})
