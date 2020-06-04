import React from 'react';
import UserProfile from "./components/UserProfile.js";
import PokemonStats from "./components/StatsPokeTeam.js";
import Poketeam from "./components/Equiporesumen.js";
import ResTeam from "./components/ResTeam.js";
import Pokedex from "./components/Pokedex.js";
import Footer from "./components/Footer.js";
import Header from "./components/Header.js";
import PokedexIcon from "./assets/icn_pokedex.svg";
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";

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

/*export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.tbar}>
        <Header/>
      </View>

      <ScrollView style={styles.main}>
      <PokemonStats user={charizarde} />  
      </ScrollView>
      
      <View style={styles.bbar}>
        <Footer/>
      </View>

    </View>
      //<UserProfile user={charizardo} />
      //<Pokedex />
      //<ResTeam user={equipo} />
      //<EquipoResumen user={equipo} />
  );
}; */

const Tab = createBottomTabNavigator();

const UserprofilE =()=>{
  return(
    <PokemonStats />
  );
};

const PoketeaM =()=>{
  return(
    <Poketeam user={equipo} />
  );
};

const PokedexIcono = ( {color, size}) => (
    <PokedexIcon size={size} color={color} />
);

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
          component={UserprofilE}
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