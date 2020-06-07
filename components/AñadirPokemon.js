import { observer } from "mobx-react";
import React, { useContext, useEffect } from "react";
import { ActivityIndicator, Button, FlatList, Image, ImageBackground, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { DetailsProvider } from "../models/DetailsModel";
import { PokemonsContext, PokemonsProvider } from "../models/Pokemonsmodel";

const GeneratePokemons = observer(({navigation, setName}) => {
  // (length) entre los dos =
  const pokemons = useContext(PokemonsContext);

  useEffect(() => {
    pokemons.loadPokemon();
  }, []);

  if (pokemons.pokemon == null) {
    return (
      <View>
        <ActivityIndicator size="large" lightTheme round editable={true} />
      </View>
    );
  }
  return (
    <View>

      <TextInput style={styles.textinput} />
      <FlatList data={pokemons.pokemon} renderItem={(props)=><PokemonItem {...props} setName={setName} navigation={navigation}/>} />
    </View>
  );
});

const PokemonItem = ({ item,navigation, setName}) => {
  const url =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"; //https://img.pokemondb.net/sprites/x-y/normal/
  const number = item.url.substr(34, 37);
  const numberdef = number.slice(0, -1);
  const goToPokemon = () => {
    navigation.goBack({setName1:item.name}); //Aqui s'indica a la pagina que va
  };

  return (

    
    <View style={styles.box}>      
      <Text style={styles.pokedexName}>
  Nº {numberdef} {item.name.toUpperCase(1)}{" "}
        {" "}
      </Text>
      <Image
          source={{ uri: url + numberdef + ".png" }}
          style={styles.sprite}
        />
      <Button title="Add Pokemon" onPress={goToPokemon}></Button>
    </View>
  );
};
//Pokemon database https://pokemondb.net/sprites/bulbasaur
//https://pokemondb.net/pokedex/all

export default function Pokedex({navigation, route}) {
  const {setName} = route.params;
  return (
    <PokemonsProvider>
      <DetailsProvider>
        <ImageBackground
          style={styles.container}
          source={require("../assets/background_team.png")}
        >
          <ScrollView style={styles.scroll}>
            <GeneratePokemons setName={setName} navigation={navigation}/>
          </ScrollView>
        </ImageBackground>
      </DetailsProvider>
    </PokemonsProvider>
  );
}

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
    backgroundColor: "#4B4B4B",
  },
  headertitle: {
    color: "white",
    fontWeight: "bold",
    fontSize: 33,
    paddingTop: 25,
  },
  container: {
    flex: 1,
    //flex: 1,
    //backgroundColor: "#ef503b",
    alignItems: "center",
    //justifyContent: "center",
    //marginTop: 30,
  },
  footer: {
    flex: 1,
    height: 80,
    backgroundColor: "pink",
  },
  box: {
    backgroundColor: "white",
    flex: 1,
    alignItems: "center",
    //justifyContent: "center",
    margin: 12,
    marginLeft: 20,
    paddingTop: 1,
    paddingBottom: 10,
    //paddingLeft: 90,
    //paddingRight: 90,
    borderRadius: 25,
  },
  pokedexName: {
    flex: 1,
    alignItems: "center",
    paddingBottom: 9,
    paddingTop: 9,
    paddingLeft: 1,
    //paddingRight: 20,
    fontSize: 16,
    fontWeight: "bold",
    color: "#424242",
    //alignItems: "left",
  },
  scroll: {
    flex: 1,
  },
  sprite: {
    /*alignContent: "right",
    alignSelf: 'flex-start',
    width: 70,
    height: 70,
    padding: 10,
    paddingRight: 100,
    paddingBottom: 100,
    resizeMode: "contain"*/
    flex: 1,
    width: 50,
    height: 50,
    position: "relative",
    margin: 10,
  },
  textinput: {
    height: 30,
    borderRadius: 15,
    paddingLeft: 15,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 15,
    marginBottom: 10,
    backgroundColor: "white",
  },
  hidden: {
    display: "none",
  },
});
