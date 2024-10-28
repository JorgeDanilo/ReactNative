import React, { useState } from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';
import { PrimaryButton } from '../components';
import { Button, FAB } from 'react-native-paper';
import { globalStyles } from '../../theme/global.styles';

import Icon from 'react-native-vector-icons/Ionicons'


export const CounterM3Screen = () => {

  const [count, setCount] = useState(10);

  return (
    <View style={ globalStyles.centerContainer }>
      <Text style={ globalStyles.title }>{ count }</Text>


      {/* <Icon name="accessibility-outline" size={ 25 } /> */}

      <FAB      
        style={ styles.fab }    
        icon="add"
        onPress={ () => setCount(count +1) }
        onLongPress={ () => setCount( 0 ) }
         />
      
    </View> 
  )
}

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
})