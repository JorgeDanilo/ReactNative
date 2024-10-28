import React, { useState } from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';
import { PrimaryButton } from '../components';
import { Button } from 'react-native-paper';



export const CounterScreen = () => {

  const [count, setCount] = useState(10);

  return (
    <View style={ style.container }>
      <Text style={ style.title }>{ count }</Text>

      {/* <PrimaryButton
        label="Incrementar"
        onPress={ () => setCount(count + 1) }
        onLongPress={ () => setCount( 0 ) }
      /> */}
      <Button
        style={ style.button }
        mode='contained'
        onPress={ () => setCount( count +1 ) }
        onLongPress={ ()=> setCount( 0 ) }
        >Incrementar</Button>
      
    </View> 
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },


  title: {
    fontSize: 80,
    color: 'black',
    fontWeight: '300'
  },

  button: {
    borderRadius:50,
  },
})