import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export const PositionsScreen2 = () => {
  return (
    <View style={ style.container } >
      
      <View style={ style.greenBox } />
          
      <View style={ style.purbleBox } />

      <View style={ style.orageBox } />

      
    </View>
  )
}

// relative filhos sempre relativa ao pai

const style = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#28c4d9',
  },
  purbleBox: {
    width: 100, 
    height: 100,
    backgroundColor: '#5856d6',
    borderWidth: 10,
    borderColor: 'white',
    position: 'absolute',
    bottom:0,
    left: 0
  },

  orageBox: {
    width: 100,
    height: 100, 
    backgroundColor: '#F0A23B',
    borderWidth: 10,
    borderColor: 'white',
    top: 0,
    right: 0,
    position: 'absolute',
  },

  greenBox: {
    // width: 100,
    // height: 100,
    backgroundColor: 'green',
    borderWidth: 10,
    borderColor: 'white',
    // position: 'absolute',
  ...StyleSheet.absoluteFillObject
  }
})