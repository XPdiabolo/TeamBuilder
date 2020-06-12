import { observer } from "mobx-react";
import React, { useContext, useEffect } from "react";
import { ActivityIndicator, Button, FlatList, Image, ImageBackground, ScrollView, StyleSheet, Text, View } from "react-native";
import { DetailsProvider } from "../models/DetailsModel";
import { PokemonsContext, PokemonsProvider } from "../models/Pokemonsmodel";
import { Feather } from "@expo/vector-icons";

const flag = null;

const GeneratePokemons = observer(({navigation}) => {
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

      <FlatList data={pokemons.pokemon} renderItem={(props)=><PokemonItem {...props} navigation={navigation}/>} />
    </View>
  );
});

const PokemonItem = ({ item, navigation }) => {
  const url =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"; 
  const number = item.url.substr(34, 37);
  const numberdef = number.slice(0, -1);
  const goToPokemon = () => {
    navigation.navigate("PokePage", {pokeName: item.name}); 
  };

  return (
    
    <View style={styles.box}>      
      <Text style={styles.pokedexName}>
        Nº {numberdef} {item.name.toUpperCase(1)}
      </Text>
      <Image
          source={{ uri: url + numberdef + ".png" }}
          style={styles.sprite}
        />
      <Button title="Go to Pokemon" onPress={goToPokemon}></Button>
    </View>
  );
};

export default function Pokedex({navigation}) {
  return (
    <PokemonsProvider>
      <DetailsProvider>
        <ImageBackground
          style={styles.container}
          source={require("../assets/background-pdx.png")}
        >
          <ScrollView style={styles.scroll}>
            <GeneratePokemons navigation={navigation}/>
          </ScrollView>
        </ImageBackground>
      </DetailsProvider>
    </PokemonsProvider>
  );
}

Pokedex.Icon = ({color, size}) => (
  <Feather name="info" size={size} color={color} />
);

const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: "center",
  },

  box: {
    backgroundColor: 'white',
    flex: 1,
    alignItems: "center",
    margin: 12,
    marginLeft: 20,
    paddingTop: 1,
    paddingBottom: 10,
    borderRadius: 25,
  },

  pokedexName: {
    flex: 1,
    alignItems: "center",
    paddingBottom: 9,
    paddingTop: 9,
    paddingLeft: 1,
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
  },

  scroll: {
    flex: 1,
  },

  sprite: {
    flex: 1,
    width: 50,
    height: 50,
    position: "relative",
  },

});
