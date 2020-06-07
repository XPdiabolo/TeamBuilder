import React from "react";
import { Button, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";


const PokeTeam = ({ user, navigation}) => {

  return (
    <ImageBackground
      style={styles.page}
      source={require("../assets/background_team.png")}
    >
      <Pokemons user={user} navigation={navigation} />
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

const Pokemons = ({ user, navigation }) => {
  const goToPokedex = () => {
    navigation.navigate("AñadirPoke");
  };

  const goToStatsPoke = () => {
    navigation.navigate("PokePage");
  };

  const equipo = 'charizard';

  return (
    <View style={styles.description}>
      <Text style={styles.titles}>Team 01</Text>

      <View style={styles.button}>
        <Button
          title="Go to Pokedex"   onPress={() => navigation.navigate('AñadirPoke')}/>
      </View>
      <View style={styles.button}>
        <Button title="Go to Pokemon" onPress={() => navigation.navigate('PokeStats', {pokename: equipo})}/>
      </View>
      <View style={styles.content}>
        <View style={styles.grup1}>
          <TouchableOpacity title="Go to Pokedex"   onPress={() => navigation.navigate('AñadirPoke')}>
            <View style={styles.button}>
              <Pokemon />
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Añadir</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Añadir</Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.grup1}>
          <TouchableOpacity>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Añadir</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Añadir</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Añadir</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const Pokemon =(item) =>{
  return(
    <View><Text>Name</Text></View>
  );
};

const Measures = ({ user }) => {
  return (
    <View style={styles.measures}>
      <View style={styles.measdet}>
        <View style={[styles.mer2]}>
          <Text style={styles.measwidth}>{user.type}</Text>
        </View>
      </View>
    </View>
  );
};

const Stats = ({ user }) => {
  return (
    <View style={styles.description}>
      <Text style={styles.titles}>Weaknesses</Text>
      <Text style={styles.content}>Hola</Text>
    </View>
  );
};

const Weakness = ({ user }) => {
  return (
    <View style={styles.stats}>
      <Text style={styles.titles}>Stats</Text>
      <Text style={styles.content}>Hola</Text>
    </View>
  );
};

export default PokeTeam;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "orange",
  },
  grup1: {
    flexDirection: "row",
    justifyContent: "center",
  },
  pokamios: {
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },

  header: {
    flex: 0.8,
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
  name: {
    height: 35,
    marginTop: 10,
    marginRight: 15,
    marginLeft: 15,
    marginBottom: 15,
    alignItems: "center",
    backgroundColor: "#4B4B4B",
    borderTopRightRadius: 17,
    borderTopLeftRadius: 17,
  },
  pokename: {
    color: "black",
    fontSize: 15,
    fontWeight: "bold",
    paddingLeft: 15,
  },
  number: {
    //backgroundColor: '#2A2A2A',
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    paddingLeft: 15,
    paddingRight: 15,
  },
  profile: {
    borderRadius: 10,
    marginRight: 15,
    marginLeft: 15,
    height: 150,
    flexDirection: "row",
    justifyContent: "space-around",
    paddingLeft: 10,
    paddingRight: 10,
  },
  description: {
    // flex: 1,
    borderRadius: 10,
    margin: 15,
    //paddingRight: 15,
    //paddingLeft: 15,
    backgroundColor: "white",
  },
  stats: {
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    flex: 1,
    marginRight: 15,
    marginLeft: 15,
    //paddingLeft: 15,
    //paddingRight: 15,
    backgroundColor: "white",
  },
  footer: {
    flex: 1,
    height: 80,
    backgroundColor: "pink",
  },
  titles: {
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 5,
    fontWeight: "bold",
    paddingTop: 5,
    backgroundColor: "#E0E0E0",
    color: "black",

    fontSize: 20,
  },
  content: {},
  sprite: {
    height: 90,
    width: 75,
    flex: 1,
  },
  measures: {
    flexDirection: "column",
    flex: 1,
    alignSelf: "center",
    backgroundColor: "aquamarine",
    justifyContent: "space-around",
    //paddingBottom: 5,
    //paddingTop: 5,
    //paddingLeft: 12,
    borderRadius: 10,
  },
  measdet: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  measwidth: {
    alignItems: "center",
    fontWeight: "bold",
  },
  mer1: {
    paddingLeft: 10,
    flex: 0.75,
    justifyContent: "center",
    //alignItems: "center",

    backgroundColor: "#E0E0E0",
  },
  mer2: {
    flex: 1.25,

    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  button: {
    marginLeft: 40,
    marginRight: 40,
    paddingTop: 35,
    paddingBottom: 35,
    backgroundColor: 'red'
  },
});
