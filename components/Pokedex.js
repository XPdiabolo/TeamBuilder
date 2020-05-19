import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

const Header =()=>{
  return(
      <View style={styles.header}>
          <Text style={styles.headertitle}>Pokédex</Text>
      </View>
  );
};



const generateNumbers = (length) => {
  let numbers = [];
  for (let i = 0; i < length; i++) {
    numbers.push({ number: i+1 });
  }
  return numbers;
}

const renderItem = ({ item }) => {
  return <View style={styles.box}>
    <Text style={styles.pokedexName}>Nº {item.number}         Pokémon Name</Text>
  </View>
}

export default function Pokedex(){
  return(
      <View>
          <Header/>
       <View style={styles.container}>
          <FlatList
          data={generateNumbers(100)}
          renderItem={renderItem}
          />
        <Footer/>
      </View>
      </View>
  );
}

const Footer =()=>{
    return(
        <View style={{flexDirection:'row'}}>
            <View style={[styles.footer, {backgroundColor:'green'}]}>
                <Text>Team</Text>
            </View>
            <View style={[styles.footer, {backgroundColor:'blue'}]}>
                <Text>Pokedex</Text>
            </View>
            <View style={[styles.footer, {backgroundColor:'red'}]}>
               <Text>Details</Text>
            </View>
        </View>
    );
};


const styles = StyleSheet.create({

  header:{
    height: 100,
    //flex: 0.8,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#4B4B4B',
},
headertitle:{
    color: "white",
    fontWeight: "bold",
    fontSize: 33,
    paddingTop: 25,
},
  container:{
      flex: 1,
      backgroundColor: "#ef503b",
      alignItems: "center",
      //justifyContent: "center",
      //marginTop: 30,
  },
footer:{
  flex: 1,
  height: 80,
  backgroundColor: 'pink'
},
  box:{
    backgroundColor: "white",
    width:"90%",
    margin: 15,
    marginLeft: 20,
    padding: 10,
    paddingLeft: 60,
    borderRadius: 25,
  },
  pokedexName:{
    fontSize: 18,
  },
});