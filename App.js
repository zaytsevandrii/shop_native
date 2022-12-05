
import React, { useState } from 'react';
import { FlatList, View, Alert } from 'react-native';
import { Header } from 'react-native/Libraries/NewAppScreen';
import { uuid } from 'uuidv4';
import AddItem from './components/AddItem';

const App = () => {
const [items,setItems] = useState([
  {id:uuid(),text:'Milk'},
  {id:uuid(),text:'Eggs'},
  {id:uuid(),text:'Bread'},
  {id:uuid(),text:'Juice'},
])

const deleteItem = (id)=>{
  setItems(prevItems=>{
    return prevItems.filter(item=>item.id!==id)
  })
}

const addItem=(text)=>{
  if(!text){
    Alert.alert('Error', 'Please enter an item',{text:'OK'})
  }else{
    setItems(prevItems=>{
      return [...prevItems, {id:uuid(),text}]
    })
  }
 
}
  return (
    <View>
      <Header/>
      <AddItem addItem={addItem}/>
      <FlatList data={items}
      renderItem={({item})=>(
        <ListIem item={item} deleteItem={deleteItem}/>
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
