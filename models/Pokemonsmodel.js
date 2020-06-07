import { action, observable } from "mobx";
import React, { createContext } from "react";

class PokemonsModel{
    @observable pokemon = null;

    @action async loadPokemon(){
       const response = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=100"); //807
       const json = await response.json();
       this.pokemon = json.results;
    }
}

const model = new PokemonsModel();
 export const PokemonsContext = createContext(model);
 export const PokemonsProvider = ({children}) => (
     <PokemonsContext.Provider value={model}>
       {children}  
     </PokemonsContext.Provider>
 )