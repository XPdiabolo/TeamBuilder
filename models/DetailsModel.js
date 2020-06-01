import { observable, action } from "mobx";
import React, { createContext} from "react";

class DetailsModel{
    @observable detail = null;

    @action async loadDetails(name){//name
      const response = await fetch("https://pokeapi.co/api/v2/pokemon/bulbasaur/");//  "+name+"
      const json = await response.json();
      this.detail = json.sprites;
    }
}

const model = new DetailsModel();
 export const DetailsContext = createContext(model);
 export const DetailsProvider = ({children}) => (
     <DetailsContext.Provider value={model}>
       {children}  
     </DetailsContext.Provider>
 )