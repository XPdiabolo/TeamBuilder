import { observer } from 'mobx-react';
import React, { useContext, useEffect } from 'react';
//import Slider from '@react-native-community/slider';
import { ActivityIndicator, Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
import { DetailsContext, DetailsProvider } from '../models/DetailsModel';
import { ObjsContext, ObjsProvider } from '../models/ObjectsModel';


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
            <PokemonStats user={details.detail}/>
        )
    };
  });

const PokemonStats = (user) =>{
    return(
        
        <DetailsProvider>
        <ObjsProvider>
        <ImageBackground style={styles.page} source={require("../assets/background_team.png")}>
            <Profile user={user} />
            <Items user={user} />
            <Stats user={user} />
        </ImageBackground>
        </ObjsProvider>
        </DetailsProvider>
    );
};



const Profile =({user})=>{
    //https://play.pokemonshowdown.com/sprites/xyani/bulbasaur.gif
    //https://img.pokemondb.net/sprites/x-y/normal/
    return(
        <View style={styles.profile}>
            <Image source={{uri : "https://play.pokemonshowdown.com/sprites/xyani/"+ user.user.species.name +".gif"}}  style={styles.sprite}/>
            <Movements user={user} />
        </View>
    );
};

const Movements = ({user}) => {
    return(
        <View style={styles.moves}>
            <View>
                <Text style={styles.titles}>Movements</Text>
            </View>

            <View>
                <Text>{user.user.moves[0].move.name}</Text>
            </View>

            <View>
                <Text>{user.user.moves[1].move.name}</Text>
            </View>

            <View>
                <Text>{user.user.moves[2].move.name}</Text>
            </View>

            <View>
                <Text>{user.user.moves[3].move.name}</Text>
            </View>
        </View>
  
    );
};

const Items =({user})=>{
    return(
        <View style={styles.items}>
            <Item/>
            <Ability  user={user} />
            <Nature  user={user} />
        </View>
    );
};

const Item = observer(() =>{

    const objects = useContext(ObjsContext);
    useEffect(() => {
        objects.loadObjs();
      }, []);  

    //const allobjs = objects.objs.results.map(element=>element.name);

//<Dropdown label='select' data={allobjs} textColor="black" style={styles.dropdown}/>
    const datos = [{
        value: 'Banana',
      }, {
        value: 'Mango',
      }, {
        value: 'Pearl',
      }];

    return(
        <View style={styles.item}>
        <View>
            <Text style={styles.titles}>Item</Text>
        </View>
        <View>
        <Dropdown label='select' data={datos} textColor="black" style={styles.dropdown}/>
        </View>
    </View>
    );
});

//<Text>{JSON.stringify(objects.objs)}</Text>

const Ability = ({user}) =>{
    return(
        <View style={styles.item}>
        <View>
            <Text style={styles.titles}>Ability</Text>
        </View>

        <View>
            <Text style={styles.content}>{user.user.abilities[0].ability.name}</Text>
        </View>
    </View>
    );
};

const Nature = ({user}) =>{
    return(
        <View style={styles.item}>
        <View>
            <Text style={styles.titles}>Nature</Text>
        </View>

        <View>
            <Text style={styles.content}>Strong</Text> 
        </View>
    </View>
    );
};



const Stats =({user})=>{
    return(
        <View style={styles.stats}>
            <Text style={styles.titles}>Base Stats</Text>
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
        //marginBottom: 5,
        marginRight: 13.5,
        marginLeft: 13.5,
        marginBottom: 18.5,
        marginTop: 13.5,
        justifyContent: "space-evenly"
        //justifyContent: "space-around"
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
        flex: 1,
        marginRight: 25,
        marginLeft: 25,
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
        flex: 1,
        margin: 15,
        resizeMode: "contain"
    },
    moves:{
        flexDirection: 'column',
        backgroundColor: 'white',
        alignItems: "center",
        margin: 15,    
        borderRadius: 10,
        //flex: 1,
    },
    item:{
        flexDirection: 'column',
        backgroundColor: 'white',
        //alignItems: "center",
        //margin: 13.5,    
        borderRadius: 10,
        //flex: 1,
        
    },
    dropdown:{
    }

   
})