import React from 'react';
import UserProfile from "./components/UserProfile.js";
import PokemonStats from "./components/StatsPokeTeam.js";
import Poketeam from "./components/Equiporesumen.js";
import Pokedex from "./components/Pokedex.js";
import Header from "./components/Header.js";
import PokedexIcon from "./assets/icn_pokedex.svg";
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { PokemonsProvider } from './models/Pokemonsmodel.js';


const charizardo = {
  name:"Charizard",
  avatar:"https://i.pinimg.com/originals/c6/c9/d1/c6c9d1def0d68eedcfde620273dd2c8b.png",
  type: 'fire, flying',
  height: 2 ,
  poknum: '006',
  weight: 90.5,
  description: 'Charizard se dedica a volar por los cielos en busca de oponentes fuertes. Echa fuego por la boca y es capaz de derretir cualquier cosa. No obstante, si su rival es más débil que él, no usará este ataque.'
};

const charizarde = {
  avatar:"https://i.pinimg.com/originals/c6/c9/d1/c6c9d1def0d68eedcfde620273dd2c8b.png",
  move1: 'Flamethrower',
  move2: 'Dragon Pulse',
  move3: 'Earthquake',
  move4: 'Thunder Punch',
  item: 'Choice Scarf',
  ability: 'Blaze',
  nature: 'Careful',
  hp: '78',
  attack: '84',
  defense: '78',
  spatk: '109',
  spdef: '85',
  speed: '100',
};


const charizard = {
  name:"Charizard",
  avatar:"https://i.pinimg.com/originals/c6/c9/d1/c6c9d1def0d68eedcfde620273dd2c8b.png",
  
};

const garbodor = {
  name: "Garbodor",
  avatar: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/569.png",
};

const scizor = {
  name: "Scizor",
  avatar: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/212.png",
}

const lucario = {
  name: "Lucario",
  avatar: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/448.png",
}

const blissey = {
  name: "Blissey",
  avatar: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/242.png",
}

const abomasnow = {
  name: "Abomasnow",
  avatar: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/460.png",
}


const equipo = {
  slot1: charizard,
  slot2: garbodor,
  slot3: scizor,
  slot4: lucario,
  slot5: blissey,
  slot6: abomasnow,
};


const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();

const PokemonStatS =()=>{
  return(
    <PokemonStats />
  );
};

const UserProfilE =()=>{
  return(
    <UserProfile />
  );
};

const PoketeaM =()=>{
  return(
    <NavigationContainer>
    <Poketeam user={equipo} />

    <Stack.Navigator>
      <Stack.Screen name="Pokedex" component={Pokedex}/>
      <Stack.Screen name="Poke" component={PokemonStatS}/>
    </Stack.Navigator>
  </NavigationContainer>
  );
};

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
      <Tab.Navigator initialRouteName="Pokedex" screenOptions={{}}>
      
        <Tab.Screen
          name="Poke"
          component={PokemonStatS}
        />
        
        <Tab.Screen
          name="Pokedex"
          component={Pokedex}
          navigationOptions={{ tabBarIcon: PokedexIcono.PokedexIcon }}
        />
        <Tab.Screen
          name="Team"
          component={PoketeaM}
        />
      </Tab.Navigator>
    </NavigationContainer>
  

    
    </View>
    </PokemonsProvider>
  );
}

function Pokedex(){
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Pokemon" component={UserProfilE}/>
      </Stack.Navigator>
    </NavigationContainer>
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