import { observer } from "mobx-react";
import React, { useContext, useEffect } from "react";
import {
  ActivityIndicator,
  Button,
  FlatList,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { DetailsProvider } from "../models/DetailsModel";
import { PokemonsContext, PokemonsProvider } from "../models/Pokemonsmodel";

const GeneratePokemons = observer(({ navigation, setName }) => {
  const pokemons = useContext(PokemonsContext);

  useEffect(() => {
    pokemons.loadPokemon();
  }, []);

  return pokemons.pokemon == null ? (
    <View>
      <ActivityIndicator size="large" lightTheme round editable />
    </View>
  ) : (
    <View>
      <FlatList
        data={pokemons.pokemon}
        renderItem={(props) => (
          <PokemonItem {...props} setName={setName} navigation={navigation} />
        )}
      />
    </View>
  );
});

const PokemonItem = ({ item, navigation, setName }) => {
  const url =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"; 
  const number = item.url.substr(34, 37);
  const numberdef = number.slice(0, -1);
  const goToPokemon = () => {
    setName(numberdef);
    navigation.goBack(); 
  };

  return (
    <View style={styles.box}>
      <Text style={styles.pokedexName}>
        N.º {numberdef} {item.name.toUpperCase(1)}
      </Text>
      <Image source={{ uri: url + numberdef + ".png" }} style={styles.sprite} />
      <Button title="Add Pokemon" onPress={goToPokemon}></Button>
    </View>
  );
};


export default function Pokedex({ navigation, route }) {
  const { setName } = route.params;
  return (
    <PokemonsProvider>
      <DetailsProvider>
        <ImageBackground
          style={styles.container}
          source={require("../assets/background_team.png")}
        >
          <ScrollView style={styles.scroll}>
            <GeneratePokemons setName={setName} navigation={navigation} />
          </ScrollView>
        </ImageBackground>
      </DetailsProvider>
    </PokemonsProvider>
  );
}


const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: "center",
  },

  box: {
    backgroundColor: "white",
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
    color: "#424242",
  },

  scroll: {
    flex: 1,
  },

  sprite: {
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

});
