import { StyleSheet, Text, View } from 'react-native';

export const BoxObjectModelScreen = () => {
  return (
    <View style={ styles.container }>
      {/* <Text style={ styles.title }>BoxObjectScreen</Text> */}

      <View style={ styles.publeBox }>
        <Text style={{color: 'white'}}>Hola Mundo</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red'
  },
  title: {

    backgroundColor: 'blue',
    fontSize: 30,
    color: 'white',
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderWidth: 10,
    marginVertical: 10,
    marginHorizontal: 10
  },

  publeBox : {
    height: 30,
    backgroundColor: 'purple',
    marginHorizontal: 20,
    marginVertical: 20,
    padding: 5,
  }
})