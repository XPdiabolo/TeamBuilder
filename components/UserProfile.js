
//import { StyleSheet, Image, Text, View, TouchableWithoutFeedback } from 'react-native';
import React, { useContext, useEffect } from 'react';
//import Slider from '@react-native-community/slider';
import { StyleSheet, Image, Text, View, ImageBackground, ActivityIndicator, StatusBarIOS } from 'react-native';
import { DetailsProvider, DetailsContext } from '../models/DetailsModel';
import { observer } from 'mobx-react';
//import { Dropdown } from 'react-native-material-dropdown';


const RenderDetails = observer(() =>{

    const details = useContext(DetailsContext);
    const pokemonexemple = "mew";
  
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
        <ImageBackground style={styles.page} source={require("../assets/background-pdx.png")}>
            <Name user={user} />
            <Profile user={user} />
            <Description user={user} />
            <Shiny user={user} />
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

/*const Profile =({user})=>{
    return(
        <View style={styles.profile}>
            <Image source={{ uri : user.user.avatar }}  style={styles.sprite}/>
            <Measures user={user} />
        </View>
    );
};*/
const Profile =({user})=>{
    //https://play.pokemonshowdown.com/sprites/xyani/bulbasaur.gif
    //https://img.pokemondb.net/sprites/x-y/normal/
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

const Shiny =({user})=>{
   
    return(
        <View style={styles.Shiny}>
            <Text style={styles.titles}>Shiny</Text>

            <View style={styles.SpritesShiny}>
                <Image source={{ uri : user.user.sprites.front_shiny }}  style={styles.sprite}/>
                <Text style={styles.content}>Front</Text>
                <Image source={{ uri : user.user.sprites.back_shiny }}  style={styles.sprite}/>
                <Text style={styles.content}>Back</Text>
            </View>

        </View>
    );
};
//<Image source={{uri : url+numberdef+".png"}}  style={styles.sprite}/>

/*  const url = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"; //https://img.pokemondb.net/sprites/x-y/normal/
  const number = item.url.substr(34, 37);
  const numberdef = number.slice(0,-1);*/





  /*const Profile =({user})=>{
    return(
        <View style={styles.profile}>
            <Image source={{ uri : user.user.avatar }}  style={styles.sprite}/>
            <Measures user={user} />
        </View>
    );
};*/

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

        //borderRadius: 10,
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
    Shiny:{
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
        margin: 20,
        height: 120,
        width: 120,

  
    },
    measures:{
        flexDirection: 'column',
        flex: 1,
        alignSelf: "center",
        backgroundColor: '#E0E0E0',
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
    SpritesShiny:{
        flexDirection: "row",

    }
})
