import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { StyleSheet, View } from "react-native";
import "react-native-gesture-handler";
import Añadir from "./components/AñadirPokemon.js";
import Poketeam from "./components/Equiporesumen.js";
import Pokedex from "./components/Pokedex.js";
import StatsPoke from "./components/StatsPokeTeam"
import UserProfile from "./components/UserProfile.js";
import { PokemonsProvider } from "./models/Pokemonsmodel.js";

const Tab = createBottomTabNavigator();

const Stack = createStackNavigator();

export default function App() {
  return (
    <PokemonsProvider>
      <View style={styles.container}>
        <NavigationContainer style={styles.navContainer}>
          <Stack.Navigator>
            <Stack.Screen
              name="Team Builder"
              component={MainTabNavigator}
              options={{
                headerTintColor: "#fff",
                headerStyle: { backgroundColor: "#4B4B4B" },
                headerTitleStyle: { alignSelf: "center" },
              }}
            />
            <Stack.Screen name="AñadirPoke" component={Añadir} />
            <Stack.Screen name="PokeStats" component={StatsPoke} />
            <Tab.Screen name="PokePage" component={UserProfile} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </PokemonsProvider>
  );
}

const MainTabNavigator = () => (
  <Tab.Navigator initialRouteName="PokedexPage" screenOptions={{}}>
    

    <Tab.Screen name="PokedexPage" component={Pokedex} />

    <Tab.Screen name="PokeTeamPage" component={Poketeam} />
  </Tab.Navigator>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tbar: {},
  main: {
    flex: 1,
  },
  bbar: {
    flex: 1,
  },
  navContainer: {
    flex: 1,
  },
});
