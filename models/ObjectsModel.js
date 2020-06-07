import { action, observable } from "mobx";
import React, { createContext } from "react";

class ObjsModel{
    @observable objs = null ;
    

    @action async loadObjs(){//name
      const response = await fetch("https://pokeapi.co/api/v2/item/?limit=100");//  
      const json = await response.json();
      this.objs = json;
    }
}

const model = new ObjsModel();
 export const ObjsContext = createContext(model);
 export const ObjsProvider = ({children}) => (
     <ObjsContext.Provider value={model}>
       {children}  
     </ObjsContext.Provider>
 )