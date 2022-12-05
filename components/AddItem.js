
import React from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-vector-icons/icon';

const AddItem = ({title,addItem}) => {
  const [text,set] = useState('')
  const onChange=(textValue)=>setText(textValue)
  return (
    <View>
        <TextInput placeholder='Add item...' style={style.input} onChangeText={onChange}/>
        <TouchableOpacity style={styles.btn} onPress={()=>addItem(text)}>
          <Text style={styles.btnText}>
            <Icon name='plus' size={20}/>
          </Text>
        </TouchableOpacity>
    </View>
    );
 

};

const styles = StyleSheet.create({
 
  
})

export default AddItem;
