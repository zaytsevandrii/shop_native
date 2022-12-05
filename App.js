
import React, { useState } from 'react';
import { FlatList, View } from 'react-native';
import { Header } from 'react-native/Libraries/NewAppScreen';
import { uuid } from 'uuidv4';

const App = () => {
const [items,setItems] = useState([
  {id:uuid(),text:'Milk'},
  {id:uuid(),text:'Eggs'},
  {id:uuid(),text:'Bread'},
  {id:uuid(),text:'Juice'},
])
  return (
    <View>
      <Header/>
      <FlatList data={items}
      renderItem={({item})=>(
        <Text>{itemm.text}</Text>
      )}
      />
    </View>
    );
 

};

const styles = StyleSheet.create({
  container:{
    flex:1,
    paddingTop:60
  },
  img:{
    width:100,
    height:100,
    borderRa
  }
})

export default App;
