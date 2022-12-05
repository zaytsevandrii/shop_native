
import React from 'react';
import { View } from 'react-native';

const Header = ({title}) => {

  return (
    <View style={styles.header}>
      <Text style={styles.text}>{title}</Text>
    </View>
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

export default Header;
