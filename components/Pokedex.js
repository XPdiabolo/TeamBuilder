import React, { useContext, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, ImageBackground, ScrollView, ActivityIndicator } from 'react-native';
import { PokemonsProvider, PokemonsContext } from '../models/Pokemonsmodel';
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
    <FlatList esto iba entre imagebaxkgrounds
          data={pokemons.pokemon}
          renderItem={renderItem}
        />
    </View>
  )
});

const renderItem = ({ item }) => {
  return <View style={styles.box}>
    <Text style={styles.pokedexName}>Nº {item.name}</Text>
  </View>
};

export default function Pokedex() {
  return (
    <PokemonsProvider>
      <ImageBackground style={styles.container} source={require("../assets/background-pdx.png")}>
        <GeneratePokemons/>
      </ImageBackground>
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
});