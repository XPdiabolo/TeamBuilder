import React from 'react';
import UserProfile from "./components/UserProfile.js";
import PokemonStats from "./components/StatsPokeTeam.js";
import Poketeam from "./components/Equiporesumen.js";
import Pokedex from "./components/Pokedex.js";
import Header from "./components/Header.js";
import Añadir from './components/AñadirPokemon.js';
import PokedexIcon from "./assets/icn_pokedex.svg";
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { PokemonsProvider } from './models/Pokemonsmodel.js';





const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();




/*function PoketeamPage() {
  return(
    <Tab.Navigator>
  
    <Tab.Screen name="PokedexPage" component={Pokedex}/>
    <Tab.Screen name="PokePage" component={PokemonStats}/>
    <Tab.Screen name="AñadirPoke" component={Añadir}/>

  </Tab.Navigator>
  );
}

function PokedexPage() {
  return(
    <Tab.Navigator>

    <Tab.Screen name="PokemonPage" component={UserProfile}/>

  </Tab.Navigator>
  );
}*/



/*const PokedexIcono = ( {color, size}) => (
    <PokedexIcon size={size} color={color} />
);*/

export default function App() {
  return (
    <PokemonsProvider>
    <View style={styles.container}>
    <View style={styles.tbar}>
      <Header/>
    </View>

    
    <NavigationContainer style={styles.navContainer}>
      <Stack.Navigator initialRouteName="PokeTeamPage" screenOptions={{}}>
      
        <Stack.Screen
          name="PokePage"
          component={UserProfile}
        />
        
        <Stack.Screen
          name="PokedexPage"
          component={Pokedex}
          //navigationOptions={{ tabBarIcon: PokedexIcono.PokedexIcon }}
        />
        <Stack.Screen
          name="PokeTeamPage"
          component={Poketeam}
        />

        <Stack.Screen
          name="AñadirPoke"
          component={Añadir}
        />
      </Stack.Navigator>
    </NavigationContainer>
  

    
    </View>
    </PokemonsProvider>
  );
}




const styles = StyleSheet.create ({
  container: {
    flex: 1
  },
  tbar:{
    
  },
  main:{
  flex: 1
    },
  bbar:{
  flex: 1,
  },
  navContainer:{
  flex: 1,
  }

}) 