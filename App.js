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




function PoketeamPage() {
  return(
    <Stack.Navigator>
  
    <Stack.Screen name="PokedexPage" component={Pokedex}/>
    <Stack.Screen name="PokePage" component={PokemonStats}/>
    <Stack.Screen name="AñadirPoke" component={Añadir}/>

  </Stack.Navigator>
  );
}

function PokedexPage() {
  return(
    <Stack.Navigator>

    <Stack.Screen name="PokemonPage" component={UserProfile}/>

  </Stack.Navigator>
  );
}



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
      <Tab.Navigator initialRouteName="PokedexPage" screenOptions={{}}>
      
        <Tab.Screen
          name="PokePage"
          component={UserProfile}
        />
        
        <Tab.Screen
          name="PokedexPage"
          component={Pokedex}
          //navigationOptions={{ tabBarIcon: PokedexIcono.PokedexIcon }}
        />
        <Tab.Screen
          name="PokeTeamPage"
          component={Poketeam}
        />

        <Tab.Screen
          name="AñadirPoke"
          component={Añadir}
        />
      </Tab.Navigator>
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