import React, { useContext, useEffect } from 'react';
import { StyleSheet, Image, Text, View, FlatList, ImageBackground, ScrollView, ActivityIndicator } from 'react-native';
import { PokemonsProvider, PokemonsContext } from '../models/Pokemonsmodel';
import { DetailsProvider, DetailsContext } from '../models/DetailsModel';
import { observer } from 'mobx-react';


const GeneratePokemons = observer(() => {  // (length) entre los dos =
  // let numbers = [];
  //for (let i = 0; i < length; i++) {
  //  numbers.push({ number: i+1 });
  //}
  //return numbers;
  const pokemons = useContext(PokemonsContext);

  useEffect(() => {
    pokemons.loadPokemon();
  }, []);

  if (pokemons.pokemon == null) {
    return (
      <View>
        <ActivityIndicator size="large" />
      </View>
    )
  };
  return(
    <View>
    <FlatList
          data={pokemons.pokemon}
          renderItem={renderItem}
        />
    </View>
  )
});

//esta funcion al final no se usa
const RenderSprites = observer(({pokemonname}) =>{

  const details = useContext(DetailsContext);
  const namesarray = [];

  useEffect(() => {
    details.loadDetails(pokemonname);
  }, []);

  if (details.detail == null) {
    return (
      <View>
        <ActivityIndicator size="large" />
      </View>
    )
  }else{
    namesarray.push(details.detail.front_default);
    const lastname = namesarray[namesarray.length - 1];
    return(
      <View>
        <Image source={namesarray[namesarray.length - 1]}  style={styles.sprite}/>
      </View>
      )
  };
});

const renderItem = ({ item }) => {
  const url = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"; //https://img.pokemondb.net/sprites/x-y/normal/
  const number = item.url.substr(34, 37);
  const numberdef = number.slice(0,-1);

  return <View style={styles.box}>
    <Text style={styles.pokedexName}>Nº {numberdef} {item.name.toUpperCase(1)}  <Image source={url+numberdef+".png"}  style={styles.sprite}/> </Text>
    
  </View>
};
//Pokemon database https://pokemondb.net/sprites/bulbasaur
//https://pokemondb.net/pokedex/all


export default function Pokedex() {
  return (
    <PokemonsProvider>
      <DetailsProvider>
      <ImageBackground style={styles.container} source={require("../assets/background-pdx.png")}>
      <ScrollView style={styles.scroll}>
      
        <GeneratePokemons/>
      
      </ScrollView>
      </ImageBackground>
      </DetailsProvider>
    </PokemonsProvider>
  );
};

//<FlatList esto iba entre imagebaxkgrounds
//          data={generateNumbers()}
//          renderItem={renderItem}
//        />

const styles = StyleSheet.create({

  header: {
    height: 100,
    //flex: 0.8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#4B4B4B',
  },
  headertitle: {
    color: "white",
    fontWeight: "bold",
    fontSize: 33,
    paddingTop: 25,
  },
  container: {
    width: "100vw",
    height: "200vw",
    //flex: 1,
    //backgroundColor: "#ef503b",
    alignItems: "center",
    //justifyContent: "center",
    //marginTop: 30,
  },
  footer: {
    flex: 1,
    height: 80,
    backgroundColor: 'pink'
  },
  box: {
    backgroundColor: "white",
    width: "90%",
    margin: 15,
    marginLeft: 20,
    padding: 10,
    paddingLeft: 60,
    borderRadius: 25,
  },
  pokedexName: {
    fontSize: 18,
  },
  scroll:{
    flow: 1,
    marginBottom: 90
  },
  sprite:{
    width: 50,
    height: 50,
  },
});