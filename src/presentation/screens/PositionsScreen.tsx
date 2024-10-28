import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export const PositionsScreen = () => {
  return (
    <View style={ styels.container } >
      <Text style={styels.title}>Título Centralizado</Text>
      <TouchableOpacity style={styels.button}>
        <Text style={ styels.buttonText }>Botão Personalizado</Text>
      </TouchableOpacity>
    </View>
  )
}

const styels = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    position: 'relative',
  },
  title: {
   fontSize: 24,
   fontWeight: 'bold'
  },
  button:{
    backgroundColor: '#6200ee',
    position: 'absolute',
    bottom: 30,
    right: 30,
    padding: 15,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold'
  }
})