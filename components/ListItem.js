
import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Icon } from 'react-native-vector-icons/icon';

const ListItem = ({item,deleteItem}) => {

  return (
    <TouchableOpacity>
        <View style={styles.listItemView}>
            <Text style={styles.listItemText}>{item.text}</Text>
            <Icon name='remove' size={20} color='primary' onPress={()=>deleteItem(item.id)}/>
        </View>
    </TouchableOpacity>
    );
 

};

const styles = StyleSheet.create({
  container:{
    height:60,
    padding:15,
    backgorundColor:'darkslateblue'
  },
  text:{
    color:'#fff',
    fontSize:23,
    textAlign:'center'
  }
  
})

export default ListItem;
