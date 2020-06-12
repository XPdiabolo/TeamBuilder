import { observer } from 'mobx-react';
import React, { useState } from "react";
import {
  Button,
  ImageBackground,
  StyleSheet,
  Text,
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
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"; 

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

  pokename: {
    color: "black",
    fontSize: 15,
    fontWeight: "bold",
    paddingLeft: 15,
  },

  description: {
    borderRadius: 10,
    margin: 15,
    backgroundColor: "white",
  },

  stats: {
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    flex: 1,
    marginRight: 15,
    marginLeft: 15,
    backgroundColor: "white",
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

  button1: {
    flex: 1,
    paddingTop: 15,
    paddingBottom: 15,
  },

  button2: {
    flex: 1,
    marginLeft:2,
    marginRight: 2,
    paddingTop: 15,
    paddingBottom: 15,
  },

  sprite: {
    flex: 1,
  },

  content1:{
    flex: 1,
    marginTop: 15,
    fontSize: 18
  }
});
