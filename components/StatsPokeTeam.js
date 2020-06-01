import React, { useContext, useEffect } from 'react';
//import Slider from '@react-native-community/slider';
import { StyleSheet, Image, Text, View, ActivityIndicator } from 'react-native';
import { DetailsProvider, DetailsContext } from '../models/DetailsModel';
import { observer } from 'mobx-react';


const RenderDetails = observer(() =>{

    const details = useContext(DetailsContext);
    const pokemonexemple = "rayquaza";
  
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
            <PokemonStats user={details.detail}/>
        )
    };
  });

const PokemonStats = (user) =>{
    return(
        <DetailsProvider>
        <View style={styles.page}>
            <Profile user={user} />
            <Items user={user} />
            <Stats user={user} />
        </View>
        </DetailsProvider>
    );
};



const Profile =({user})=>{
    return(
        <View style={styles.profile}>
            <Image source={"https://img.pokemondb.net/sprites/x-y/normal/"+ user.user.species.name +".png"}  style={styles.sprite}/>
            <Movements user={user} />
        </View>
    );
};

const Movements = ({user}) => {
    return(
        <View style={styles.moves}>
            <View style={styles.movedet1}>
                <Text style={styles.titles}>Movements</Text>
            </View>

            <View style={[styles.movedet2]}>
                <Text style={styles.content}>{user.user.moves[0].move.name}</Text>
            </View>

            <View style={styles.movedet2}>
                <Text style={styles.content}>{user.user.moves[1].move.name}</Text>
            </View>

            <View style={styles.movedet2}>
                <Text style={styles.content}>{user.user.moves[2].move.name}</Text>
            </View>

            <View style={styles.movedet2}>
                <Text style={styles.content}>{user.user.moves[3].move.name}</Text>
            </View>
        </View>
  
    );
};

const Items =({user})=>{
    return(
        <View style={styles.items}>
            <Item  user={user} />
            <Ability  user={user} />
            <Nature  user={user} />
        </View>
    );
};

const Item = ({user}) =>{
    return(
        <View style={styles.item}>
        <View style={styles.movedet1}>
            <Text style={styles.titles}>Item</Text>
        </View>

        <View style={[styles.movedet2]}>
            <Text style={styles.content}>{user.item}</Text>
        </View>
    </View>
    );
};

const Ability = ({user}) =>{
    return(
        <View style={styles.item}>
        <View style={styles.movedet1}>
            <Text style={styles.titles}>Ability</Text>
        </View>

        <View style={[styles.movedet2]}>
            <Text style={styles.content}>{user.user.abilities[0].ability.name}</Text>
        </View>
    </View>
    );
};

const Nature = ({user}) =>{
    return(
        <View style={styles.item}>
        <View style={styles.movedet1}>
            <Text style={styles.titles}>Nature</Text>
        </View>

        <View style={[styles.movedet2]}>
            <Text style={styles.content}>Strong</Text> 
        </View>
    </View>
    );
};



const Stats =({user})=>{
    return(
        <View style={styles.stats}>
            <Text style={styles.titles}>Stats</Text>
            <Text style={styles.content2}>Speed: {user.user.stats[0].base_stat}</Text>
            <Text style={styles.content2}>Sp. Defense: {user.user.stats[1].base_stat}</Text>
            <Text style={styles.content2}>SP. Attack: {user.user.stats[2].base_stat}</Text>
            <Text style={styles.content2}>Defense: {user.user.stats[3].base_stat}</Text>
            <Text style={styles.content2}>Attack: {user.user.stats[4].base_stat}</Text>
            <Text style={styles.content2}>Hp: {user.user.stats[5].base_stat}</Text>
        </View>
    );
};

export default RenderDetails

const styles = StyleSheet.create({
    page:{
        flex: 1,
        height: "90vh",
        backgroundColor: "orange"
    },
    header:{
        height: 100,
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
    items:{
        flexDirection: 'row',
        marginBottom: 5
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
   
    stats:{
        borderTopRightRadius:10,
        borderTopLeftRadius: 10,
        flex: 2,
        marginRight: 15,
        marginLeft: 15,
        backgroundColor: 'white',
        alignItems: 'stretch'
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
        width: '100%',
        backgroundColor: '#E0E0E0',
        color: 'black',
        fontSize: 20,
    },
    content:{
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 10,
        paddingBottom: 20
    },
    content2:{
        paddingLeft: 15,
        paddingRight: 15,
        paddingTop: 5,
        paddingBottom: 10
    },
    sprite:{
        height: 125,
        width: 125,
    },
    moves:{
        flexDirection: 'column',
        backgroundColor: 'white',
        alignItems: "center",
        margin: 15,    
        borderRadius: 10,
        height: '90%'
    },
    item:{
        flexDirection: 'column',
        backgroundColor: 'white',
        alignItems: "center",
        margin: 13.5,    
        borderRadius: 10,
        height: '80%',
        
    },
    movedet1:{
        flex: 1,
        backgroundColor: '#E0E0E0',
        width: "100%",
        alignItems: "center",
        borderTopRightRadius:10,
        borderTopLeftRadius: 10,
    },
    movedet2:{
        flex: 1,
        marginBottom: -5,
        marginTop: -5
    },
    sliders:{
        maximumValue: 200,
        minimumValue: 0
    }
})