import { observer } from 'mobx-react';
import React, { useState } from "react";
import {
  Button,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { DetailsContext, DetailsProvider } from '../models/DetailsModel';

const PokeTeam = ({ user, navigation }) => {
  return (
    <ImageBackground
      style={styles.page}
      source={require("../assets/background_team.png")}
    >
      <Pokemons user={user} navigation={navigation} />
      <Stats />
    </ImageBackground>
    //<Weakness user={user} />
  );
};

const RenderDetails = observer((pokemon) =>{

  const details = useContext(DetailsContext);

  useEffect(() => {
    details.loadDetails(pokemon);
  }, []);  

  if (details.detail == null) {
    return (
      <View>
        <ActivityIndicator size="large" />
      </View>
    )
  }else{
      return(
      <Text>{pokemon.stats[0].base_stat}</Text>
      )
  };
});

const Pokemons = ({ user, navigation }) => {
  const url =
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"; //https://img.pokemondb.net/sprites/x-y/normal/

  const equipo = "mewtwo";

  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");
  const [name3, setName3] = useState("");
  const [name4, setName4] = useState("");
  const [name5, setName5] = useState("");
  const [name6, setName6] = useState("");
  console.log(name1);
  return (
    <View style={styles.description}>
      <Text style={styles.titles}>Team 01</Text>

      <View style={styles.grup1}>
        <View style={styles.button1}>
          {name1 ? (
            <Image
              source={{ uri: url + name1 + ".png" }}
              style={styles.sprite}
            />
          ) : (
            <Button
              title="Add"
              onPress={() =>
                navigation.navigate("AñadirPoke", { setName: setName1 })
              }
            />
          )}
        </View>
        <View style={styles.button2}>
          <Button
            title="Inf"
            onPress={() =>
              navigation.navigate("PokeStats", { pokename: name1 })
            }
          />
        </View>
        <View style={styles.button1}>
        {name2 ? (
            <Image
              source={{ uri: url + name2 + ".png" }}
              style={styles.sprite}
            />
          ) : (
            <Button
              title="Add"
              onPress={() =>
                navigation.navigate("AñadirPoke", { setName: setName2 })
              }
            />
          )}
        </View>
        <View style={styles.button2}>
          <Button
            title="Inf"
            onPress={() =>
              navigation.navigate("PokeStats", { pokename: name2 })
            }
          />
        </View>
        <View style={styles.button1}>
        {name3 ? (
            <Image
              source={{ uri: url + name3 + ".png" }}
              style={styles.sprite}
            />
          ) : (
            <Button
              title="Add"
              onPress={() =>
                navigation.navigate("AñadirPoke", { setName: setName3 })
              }
            />
          )}
        </View>
        <View style={styles.button2}>
          <Button
            title="Inf"
            onPress={() =>
              navigation.navigate("PokeStats", { pokename: name3 })
            }
          />
        </View>
      </View>

      <View style={styles.grup1}>
        <View style={styles.button1}>
        {name4 ? (
            <Image
              source={{ uri: url + name4 + ".png" }}
              style={styles.sprite}
            />
          ) : (
            <Button
              title="Add"
              onPress={() =>
                navigation.navigate("AñadirPoke", { setName: setName4 })
              }
            />
          )}
        </View>
        <View style={styles.button2}>
          <Button  
            title="Inf"
            onPress={() =>
              navigation.navigate("PokeStats", { pokename: name4 })
            }
          />
        </View>
        <View style={styles.button1}>
        {name5 ? (
            <Image
              source={{ uri: url + name5 + ".png" }}
              style={styles.sprite}
            />
          ) : (
            <Button
              title="Add"
              onPress={() =>
                navigation.navigate("AñadirPoke", { setName: setName5 })
              }
            />
          )}
        </View>
        <View style={styles.button2}>
          <Button
            title="Inf"
            onPress={() =>
              navigation.navigate("PokeStats", { pokename: name5 })
            }
          />
        </View>
        <View style={styles.button1}>
        {name6 ? (
            <Image
              source={{ uri: url + name6 + ".png" }}
              style={styles.sprite}
            />
          ) : (
            <Button
              title="Add"
              onPress={() =>
                navigation.navigate("AñadirPoke", { setName: setName6 })
              }
            />
          )}
        </View>
        <View style={styles.button2}>
          <Button
            title="Inf"
            onPress={() =>
              navigation.navigate("PokeStats", { pokename: name6 })
            }
          />
        </View>
      </View>
    </View>
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

const Stats = ({ }) => {
  return (
    <DetailsProvider>
    <View style={styles.stats}>
      <Text style={styles.titles}>Stats</Text>
      <View style={styles.stats}>
            <Text style={styles.content1}>Speed:</Text>
            <Text style={styles.content1}>Sp. Defense:</Text>
            <Text style={styles.content1}>SP. Attack:</Text>
            <Text style={styles.content1}>Defense:</Text>
            <Text style={styles.content1}>Attack:</Text>
            <Text style={styles.content1}>Hp:</Text>
        </View>
    </View>
    </DetailsProvider>
  );
};

PokeTeam.Icon = ({color, size}) => (
  <MaterialCommunityIcons name="pokeball" size={size} color={color} />
);


export default PokeTeam;

const styles = StyleSheet.create({
  sprite: {
    flex: 1,
    width: 50,
    height: 50,
    position: "relative",
  },
  page: {
    flex: 1,
    backgroundColor: "orange",
  },
  grup1: {
    flexDirection: "row",
    justifyContent: "center",
    marginRight: 15,
    marginLeft: 15
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
  button1: {
    flex: 1,
    //paddingLeft: 15,
    paddingTop: 15,
    paddingBottom: 15,
    //marginRight: 2,
  },
  button2: {
    flex: 1,
    //paddingRight: 15,
    marginLeft:2,
    marginRight: 2,
    paddingTop: 15,
    paddingBottom: 15,
  },
  sprite: {
    //height: 90,
    //width: 75,
    flex: 1,
  },
  content1:{
    flex: 1,
    marginTop: 15,
    fontSize: 18
  }
});
